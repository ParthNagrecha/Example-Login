/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/*.{html,js,css} ",
    "./views/Login.ejs",],
  theme: {
    extend: {},
  },
  plugins: [require('@tailwindcss/forms') ,],
}

