/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],

  // theme: {
  // },
  
  theme: {
    extend: {
      colors: {
        'heroBg': '#F2EE9D',
        'footerBg': '#7A9D54',
        'navbar': '#557A46',
        'veryTop': '#8C3333'
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'hero-img' : ''
      },
    },
  },
  plugins: [],
}