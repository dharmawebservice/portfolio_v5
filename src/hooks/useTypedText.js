import { useEffect, useState } from 'react'

/**
 * Cycles through an array of strings with a typewriter effect:
 * types out each word, pauses, deletes it, moves to the next.
 */
export function useTypedText(words, { typeSpeed = 75, deleteSpeed = 40, pauseDuration = 1400 } = {}) {
  const [text, setText] = useState('')

  useEffect(() => {
    let wordIndex = 0
    let charIndex = 0
    let deleting = false
    let timeoutId

    const tick = () => {
      const currentWord = words[wordIndex]
      setText(deleting ? currentWord.slice(0, charIndex--) : currentWord.slice(0, charIndex++))

      if (!deleting && charIndex > currentWord.length) {
        deleting = true
        timeoutId = setTimeout(tick, pauseDuration)
        return
      }

      if (deleting && charIndex < 0) {
        deleting = false
        wordIndex = (wordIndex + 1) % words.length
        charIndex = 0
      }

      timeoutId = setTimeout(tick, deleting ? deleteSpeed : typeSpeed)
    }

    tick()
    return () => clearTimeout(timeoutId)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return text
}
