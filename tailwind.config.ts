import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          black: "#0D1127",
          graphite: "#3A3436",
          blue: "#0A47C9",
          "blue-mid": "#3E7FE8",
          "blue-sky": "#6FAFEA",
          cyan: "#3AC8D5",
          aqua: "#67DCE4",
        },
        neutral: {
          900: "#111111",
          700: "#333333",
          500: "#707070",
          200: "#D9D9D9",
          50: "#F5F7FA",
        },
        semantic: {
          success: "#10B981",
          warning: "#F59E0B",
          danger: "#EF4444",
          info: "#3E7FE8",
        },
      },
      fontFamily: {
        display: ["var(--font-display)"],
        body: ["var(--font-body)"],
      },
      backgroundImage: {
        "gradient-primary": "linear-gradient(to right, #0A47C9, #3E7FE8, #3AC8D5)",
        "gradient-dark": "linear-gradient(to right, #0D1127, #3A3436)",
        "gradient-hero": "linear-gradient(135deg, #0D1127, #0A47C9, #3AC8D5)",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-33.333%)" },
        },
        grid: {
          "0%": { transform: "translateY(-50%)" },
          "100%": { transform: "translateY(0)" },
        },
      },
      animation: {
        marquee: "marquee 25s linear infinite",
        grid: "grid 15s linear infinite",
      },
    },
  },
  plugins: [],
};

export default config;
