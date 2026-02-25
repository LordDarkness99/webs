/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        // Background utama (deep sunset)
        primary: "#0F172A",

        // Secondary text
        secondary: "#94A3B8",

        // Card background
        tertiary: "#1E293B",

        // Surface
        surface: "#172033",

        // Accent sunset (soft orange)
        accent: "#D97706",


        // Accent muted purple
        accent2: "#7C3AED",

        // Border lembut
        border: "#2D3748",

        // Text terang
        "white-100": "#E2E8F0",

        // Text gelap
        "black-100": "#020617",

        "black-200": "#0F172A",

        // Custom sunset palette
        sunset: {
          darkBlue: "#0F172A",
          purple: "#1E1B4B",
          softOrange: "#7C2D12",
        },
      },

      boxShadow: {
        card: "0px 8px 30px rgba(0, 0, 0, 0.35)",
      },

      screens: {
        xs: "450px",
      },

      backgroundImage: {
        "hero-pattern":
          "linear-gradient(180deg, #0F172A 0%, #1E1B4B 60%, #7C2D12 100%)",
      },
    },
  },
  plugins: [],
};
