/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#F4F8F9',
        secondary: '#1C1C1C',
        accent: '#50EEF7',
        darkBlue: '#1D3557',
        lightGreen: '#ADD687',
        darkGreen: '#344F1B',
      },
      fontFamily: {
        'clash': ['Clash Display Variable', 'system-ui', 'sans-serif'],
        'archivo': ['Archivo', 'system-ui', 'sans-serif'],
        'switzer': ['Switzer Variable', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
