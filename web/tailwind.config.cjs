/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.jsx", "./index.html"],
  theme: {
    extend: {
      boxShadow: {
        'principal': '0px 4px 12px rgba(0, 0, 0, 0.1)'
      },
      keyframes: {
        progress: {
          '0%': { transform: 'translateX(-100px)' },
          '100%': { transform: 'translateX(340px)' },
        }
      },
      animation: {
        'progress': 'progress 1s linear infinite',
      }
    },
  },
  plugins: [],
}
