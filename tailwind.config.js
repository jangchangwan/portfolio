/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      mobile: { max: "1079px" },
      desktop: { min: "1080px" },
    },
    fontFamily: {
      display: ["var(--font-display)"],
      body: ["var(--font-body)"],
    },
    extend: {
      colors: {
        primary: {
          default: "#000",
          hover: "#20466f",
        },
        secondary: {
          default: "#222222",
          hover: "#f2f3f7",
          light: "#f4f6f8",
          gray: "#e7ecf1",
          gray555: "#555555",
          darkgray: "#5b636d",
          black111: "#111111",
        },
      },
    },
  },
  plugins: [],
};
