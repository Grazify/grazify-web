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
          primary: "#159947",
          dark: "#0F6B3A",
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
        soft: "0 10px 30px -12px rgba(16, 25, 20, 0.12)",
        card: "0 18px 50px -24px rgba(16, 25, 20, 0.22)",
        glass: "0 12px 40px -16px rgba(16, 25, 20, 0.18)",
        float: "0 24px 60px -28px rgba(21, 153, 71, 0.35)",
      },
      backgroundImage: {
        "grazify-gradient": "linear-gradient(135deg, #159947 0%, #0F6B3A 100%)",
      },
      maxWidth: {
        content: "1200px",
      },
    },
  },
  plugins: [],
};

export default config;
