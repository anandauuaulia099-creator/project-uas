/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        ink: '#14213d',
      },
      boxShadow: {
        card: '0 18px 45px -28px rgba(20, 33, 61, 0.35)',
      },
    },
  },
  plugins: [],
}
