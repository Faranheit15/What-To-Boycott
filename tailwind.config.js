/** @type {import('tailwindcss').Config} */
import defaultTheme from "tailwindcss/defaultTheme";

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        inter: ['"Inter var"', "sans-serif"],
        proxima: ['"Proxima Nova Medium"', "sans-serif"],
        poppins: ["Poppins", "sans-serif"],
      },
      colors: {
        "custom-blue-700": "#063F85",
      },
    },
  },
  plugins: [],
};
