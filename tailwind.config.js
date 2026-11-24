/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', "system-ui", "sans-serif"],
        mono: ['"JetBrains Mono"', "monospace"],
      },
      colors: {
        navy: {
          950: "#090E1A",
          900: "#0D1424",
          850: "#111A2E",
          800: "#17223B",
        },
      },
    },
  },
  plugins: [],
};