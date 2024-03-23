import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./public/svg/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      backgroundImage: {
        // 'dark-gradient': `linear-gradient(to bottom,"#18282A", "#221A2C"})`,
        'dark-gradient': `linear-gradient(to bottom, rgba(24,40,42,1), rgba(34,26,44,1))`,
        'light-gradient': `linear-gradient(to bottom, rgba(249,248,255,1), rgba(243,249,255,1))`,
      },
      colors: {
        darkBackground: "#292B32",
        lightBackground: "#F7F7F8",
        darkContainer: "#3B3E47",
        lightContainer: "#FFFFFF",
        brandBlue: "#2C9CF0",
        darkText: "#FFFFFF",
        lightText: "#000000"

      },
      fontFamily: {
        popps: ["var(--font-poppin)"],
        inter: ["var(--font-inter)"]
      }
    },
  },
  plugins: [],
};
export default config;
