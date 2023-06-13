/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        water: "#79cfee",
        desert: "#f2ede7",
        landscape: "#e6ecc4",
        midnight: "#4338ca",
      },
    },
  },
  plugins: [],
};
