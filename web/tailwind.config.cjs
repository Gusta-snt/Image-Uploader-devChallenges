/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.jsx", "./index.html"],
  theme: {
    extend: {
      boxShadow: {
        'principal': '0px 4px 12px rgba(0, 0, 0, 0.1)'
      }
    },
  },
  plugins: [],
}
