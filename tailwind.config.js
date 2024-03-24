/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "ghost-white": "#f7f7f7",
        "snow-mist": "#fbfbfb",
        "sky-blue": "#87ceeb",
        "navy-blue": "#003366",
        "lavender-gray": "#e6e6f1",
        "dark-gray": "#a9a9a9",
        "silver-chalice": "#d3d3d3",
        "gunmetal-gray": "#2a3439",
        "jaguar-gray": "#292929",
        "crimson-red": "#dc143c",
      },
      fontFamily: {
        heading: ["Montserrat", "sans-serif"],
        body: ["Lato", "sans-serif"],
      },
    },
  },
  plugins: [require("daisyui")],
};
