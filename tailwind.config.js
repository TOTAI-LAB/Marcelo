/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        mono: ['Space Mono', 'monospace'],
      },
      animation: {
        'glitch': 'glitch 1s infinite',
        'scanline': 'scanline 8s linear infinite',
      },
    },
  },
  plugins: [],
};