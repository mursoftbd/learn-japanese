/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        japanese: ['"Zen Maru Gothic"', '"Kosugi Maru"', '"M PLUS Rounded 1c"', 'sans-serif'],
      },
      colors: {
        sakura: {
          50: '#fff5f7',
          100: '#ffe6eb',
          200: '#ffccd7',
          300: '#ff99b0',
          400: '#ff668a',
          500: '#ff3364',
          600: '#e61d4f',
        },
        matcha: {
          50: '#f4f8f3',
          100: '#e5f0e3',
          200: '#cbdfc7',
          300: '#a5c69e',
          400: '#7ca872',
          500: '#5c8d52',
          600: '#466f3e',
        },
        yuzu: {
          50: '#fffdf0',
          100: '#fffbd9',
          200: '#fff5a8',
          300: '#ffeb6e',
          400: '#fedd32',
          500: '#ecc413',
        },
        fuji: {
          50: '#f0f5ff',
          100: '#e0ecff',
          200: '#c2daff',
          300: '#94beff',
          400: '#609bff',
          500: '#3875f6',
          600: '#2358db',
        }
      }
    },
  },
  plugins: [],
}
