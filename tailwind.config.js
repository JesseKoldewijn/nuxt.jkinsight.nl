/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class", '[data-theme="dark"]'],
  content: ["./src/**/*.{ts,tsx}", "./nuxt.config.{js,ts}"],
  theme: {
    extend: {},
  },
  plugins: [],
};
