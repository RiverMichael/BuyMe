/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#87ceeb",
          accent: "#ff6347",
          ".btn-cta": {
            background: "#2a3439",
            color: "#f7f7f7",
            transition: "all 0.3s",
          },
          ".btn-cta:hover": {
            color: "#2a3439",
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
        "silver-chalice": "#d3d3d3",
        "gunmetal-gray": "#2a3439",
        "jaguar-gray": "#292929",
      },
      fontFamily: {
        heading: ["Montserrat", "sans-serif"],
        body: ["Lato", "sans-serif"],
      },
    },
  },
  plugins: [require("daisyui")],
};
