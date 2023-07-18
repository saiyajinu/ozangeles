/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './sections/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      backgroundImage: {
        texture: "url('/assets/images/texture.jpg')",
      },
      colors: {
        primary: {
          100: '#FFA500',
          200: '#fd7102',
        },
      }
    },
  },
  plugins: [],
}
