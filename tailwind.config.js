/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#fff7ed',
          100: '#ffedd5',
          200: '#fed7aa',
          300: '#fdba74',
          400: '#fb923c',
          500: '#f97316',
          600: '#ea580c',
          700: '#c2410c',
          800: '#9a3412',
          900: '#7c2d12',
        },
        'tiger-orange': {
          DEFAULT: '#ff6b35',
          50: '#fff4f0',
          100: '#ffe6d9',
          200: '#ffccb3',
          300: '#ffa880',
          400: '#ff6b35',
          500: '#ff6b35',
          600: '#e55a2b',
          700: '#cc4f26',
          800: '#b34421',
          900: '#9a391c',
        },
        'secondary': {
          DEFAULT: '#ff914d',
          yellow: '#ffde59',
          orange: '#ff914d',
          50: '#fffef0',
          100: '#fffbdb',
          200: '#fff5b3',
          300: '#ffed80',
          400: '#ffde59',
          500: '#ff914d',
          600: '#e88244',
          700: '#d1733d',
          800: '#ba6435',
          900: '#a3552e',
        },
      },
    },
  },
  plugins: [],
}

