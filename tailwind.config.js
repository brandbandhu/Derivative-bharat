/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        heritage: "0 20px 55px -30px rgba(59, 37, 25, 0.45)",
      },
      colors: {
        heritage: {
          bg: "#FDFBF7",
          text: "#3B2519",
          gold: "#D4AF37",
        },
      },
    },
  },
  plugins: [],
};
