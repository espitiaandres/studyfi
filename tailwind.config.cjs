/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#1ED670",
          secondary: "#E9E92F",
          accent: "#F6F9C8",
          neutral: "#191A3E",
          "base-100": "#FFFFFF",
          info: "#0AF610",
          success: "#1AB670",
          warning: "#FB912B",
          error: "#EA2E38",
        },
      },
    ],
  },
};
