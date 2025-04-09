/** @type {import('tailwindcss').Config} */
export default {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx,vue}'],
  theme: {
    extend: {
        colors: {
            primary: '#0a1936',
            secondary: '#1090DB',
        },
    },
  },
  plugins: [],
}

