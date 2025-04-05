/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'base-dark': '#0D0D0D',
        'base-darker': '#1A1A1A',
        'neon-blue': '#00BFFF',
        'deep-blue': '#0066CC',
        'light-blue': '#40E0FF',
        'text-primary': '#E0E0E0',
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
        mono: ['var(--font-fira-code)', 'monospace'],
      },
      animation: {
        'glitch': 'glitch 1s linear infinite',
        'terminal-cursor': 'blink 1s step-end infinite',
      },
      keyframes: {
        glitch: {
          '0%, 100%': { transform: 'translate(0)' },
          '33%': { transform: 'translate(-2px, 2px)' },
          '66%': { transform: 'translate(2px, -2px)' },
        },
        blink: {
          '50%': { opacity: 0 },
        },
      },
      boxShadow: {
        'neon-blue': '0 0 5px #00BFFF, 0 0 10px #00BFFF, 0 0 15px #00BFFF',
        'deep-blue': '0 0 5px #0066CC, 0 0 10px #0066CC, 0 0 15px #0066CC',
      },
    },
  },
  plugins: [],
} 