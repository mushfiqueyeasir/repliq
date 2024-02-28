/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,tsx,ts,js,jsx}"],
  theme: {
      extend: {
          colors: {
              primary: "#7985CF",
              secondary: "#84919C ",
              warning: "#FABD23",
              error: "#E55C57",
              success: "#089164"
          }
      }
  },
  daisyui: {
      themes: ["light"]
  },
  plugins: [require("daisyui")],
  variants: {
      extend: {
          backgroundColor: ["even"]
      }
  }
};
