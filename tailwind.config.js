/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#87ceeb",
          secondary: "#e6e6f1",
          accent: "#ff6347",
          ".btn-cta": {
            background: "#87ceeb",
            border: "1px solid #87ceeb",
            transition: "all 0.3s",
          },
          ".btn-cta:hover": {
            background: "#003366",
            color: "#fff",
          },
        },
      },
    ],
  },
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
