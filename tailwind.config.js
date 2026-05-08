/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        cafe: "#2B1A10",
        chocolate: "#433126",
        dourado: "#8A6A3A",
        "bege-dourado": "#A88955",
        "off-white": "#E7DFD7",
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
        serif: ["Lora", "Georgia", "serif"],
      },
      boxShadow: {
        header: "0 1px 0 0 rgba(43, 26, 16, 0.08)",
        card: "0 4px 24px -4px rgba(43, 26, 16, 0.12)",
      },
    },
  },
  plugins: [],
};
