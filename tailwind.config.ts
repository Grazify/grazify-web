import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        grazify: {
          primary: "#1B8A4B",
          dark: "#0F6B38",
          light: "#EAF8EF",
          mint: "#F3FBF6",
          soft: "#F7FBF8",
          border: "#E6EEE9",
        },
        ink: "#101914",
        muted: "#6B746E",
      },
      fontFamily: {
        sans: [
          "var(--font-sans)",
          "-apple-system",
          "BlinkMacSystemFont",
          "Segoe UI",
          "Roboto",
          "Helvetica Neue",
          "Arial",
          "sans-serif",
        ],
      },
      boxShadow: {
        /* Layered shadows — a tight contact shadow for definition plus a soft
           ambient one for depth. Reads more premium than a single blur. */
        soft: "0 1px 2px -1px rgba(16, 25, 20, 0.06), 0 8px 24px -14px rgba(16, 25, 20, 0.14)",
        card: "0 2px 6px -2px rgba(16, 25, 20, 0.08), 0 24px 48px -24px rgba(16, 25, 20, 0.20)",
        glass: "0 2px 24px -4px rgba(16, 25, 20, 0.08), inset 0 1px 0 rgba(255, 255, 255, 0.96)",
        float: "0 24px 60px -28px rgba(27, 138, 75, 0.32)",
        phone: "0 40px 80px -32px rgba(16, 25, 20, 0.32)",
      },
      backgroundImage: {
        "grazify-gradient": "linear-gradient(135deg, #1B8A4B 0%, #0F6B38 100%)",
      },
      maxWidth: {
        content: "1200px",
      },
    },
  },
  plugins: [],
};

export default config;
