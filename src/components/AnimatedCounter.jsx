import { useAnimatedCounter } from '../hooks/useAnimatedCounter'

export default function AnimatedCounter({ value, suffix = '', className = '', decimals = 0 }) {
  const { ref, value: animated } = useAnimatedCounter(value, { decimals })
  return (
    <span ref={ref} className={className}>
      {animated}
      {suffix}
    </span>
  )
}
