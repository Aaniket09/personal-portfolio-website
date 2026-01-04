import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        cyber: {
          dark: "#0a0f16",     // Deep Charcoal background
          primary: "#00f2ea",  // Electric Cyan accent
          secondary: "#7d2ae8",// Violet accent
          success: "#00c853",  // Green success state
          muted: "#64748b",    // Muted grey text
        },
      },
      fontFamily: {
        mono: ["var(--font-jetbrains)", "monospace"],
        sans: ["var(--font-inter)", "sans-serif"],
      },
      backgroundImage: {
        'cyber-grid': "radial-gradient(circle, rgba(0, 242, 234, 0.05) 1px, transparent 1px)",
      },
    },
  },
  plugins: [],
};
export default config;