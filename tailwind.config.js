/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        // Light theme (paper / editorial)
        paper: {
          bg: '#f7f5f0',
          surface: '#ffffff',
          border: '#e3e0d8',
          ink: '#16181c',
          'ink-2': '#52565c',
          'ink-3': '#8b8f95',
        },
        // Dark theme (systems / terminal)
        carbon: {
          bg: '#0a0c0f',
          surface: '#12151a',
          'surface-2': '#1a1e25',
          border: '#252a32',
          ink: '#e8eaed',
          'ink-2': '#9aa3ad',
          'ink-3': '#5f6873',
        },
        // Accents — shared concept, different intensity per theme
        signal: {
          DEFAULT: '#3ee8b8', // dark-mode mint/signal green
          light: '#0f9d72',   // light-mode equivalent (darker for contrast on white)
        },
        amber: {
          DEFAULT: '#ffb454',
          light: '#c2622d',
        },
        cobalt: {
          DEFAULT: '#5b8def',
          light: '#1d4ed8',
        },
      },
      fontFamily: {
        display: ['"Space Grotesk"', 'sans-serif'],
        serif: ['"Fraunces"', 'serif'],
        body: ['"Inter"', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      backgroundImage: {
        'grid-dark': 'linear-gradient(#1a1e25 1px,transparent 1px),linear-gradient(90deg,#1a1e25 1px,transparent 1px)',
        'grid-light': 'radial-gradient(circle,#dedad0 1px,transparent 1px)',
      },
      animation: {
        blink: 'blink 1s step-end infinite',
        scan: 'scan 3.2s ease-in-out infinite',
        pulse-ring: 'pulse-ring 2s infinite',
        float: 'float 6s ease-in-out infinite',
        marquee: 'marquee 28s linear infinite',
      },
      keyframes: {
        blink: { '50%': { opacity: 0 } },
        scan: {
          '0%,100%': { top: '14px', opacity: 0 },
          '10%': { opacity: 1 },
          '50%': { top: 'calc(100% - 14px)', opacity: 1 },
          '60%': { opacity: 0 },
        },
        'pulse-ring': {
          '0%': { boxShadow: '0 0 0 0 rgba(62,232,184,0.5)' },
          '70%': { boxShadow: '0 0 0 8px rgba(62,232,184,0)' },
          '100%': { boxShadow: '0 0 0 0 rgba(62,232,184,0)' },
        },
        float: {
          '0%,100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
    },
  },
  plugins: [],
}
