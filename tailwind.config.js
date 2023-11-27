/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        blue: {
          50: '#f0f0fd',
          100: '#d9d9fb',
          200: '#b3b2f8',
          300: '#8d8bf5',
          400: '#6766f2',
          500: '#0D0B6F', // Main color
          600: '#4d4cb9',
          700: '#4241a1',
          800: '#363089',
          900: '#2b2a70',
        },
        iceland_poppy: {
          100: '#f87e08',
          200: '#f98413',
          300: '#f9891e',
          400: '#f98f29',
          500: '#e4750a',
          600: '#fa9a3f',
          700: '#faa04a',
          800: '#faa655',
          900: '#faab60',
        }
      }
    },
  },
  plugins: [],
}
