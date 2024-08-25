/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html", "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    colors: {
      'white':'#ffffff',
      'grey':'#888888',
      'yellow': '#FBD784',
      'gray-dark': '#0b1d26',
    },
    fontFamily: {
      abel: ['Abel', 'sans-serif'],
      serif: ['Abel', 'serif'],
      actor: ['Actor', 'sant-serif'],
    },
    extend: {
      spacing: {
        '105': '105rem',
      },
      backgroundImage: {
        'hero-pattern': "url('./assets/MNTN main-foto.png')",
      }
    },
  },
  
  plugins: [],
}

