/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.js", // This includes all .js files in src and its subdirectories
  ],
  theme: {
    extend: {
      colors: {
        primary: "var(--primary-color)",
        secondary: "var(--background-color)",
        text: "var(--text-color)",
      },
    },
  },
  plugins: [],
}

