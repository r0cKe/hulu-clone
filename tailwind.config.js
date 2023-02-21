/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        "3xl": "2500px",
      },
    },
  },
  plugins: [require("tailwind-scrollbar-hide")],
};
