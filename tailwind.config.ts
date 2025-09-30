import type { Config } from "tailwindcss";

export default {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    container: { center: true, padding: "16px", screens: { xl: "1200px" } },
    extend: {
      colors: {
        brand: { DEFAULT: "#e53935", dark: "#c62828" }, /* red dot tone */
        ink:   { 900:"#111111", 800:"#1a1a1a", 700:"#2b2b2b", 500:"#666666", 300:"#cfcfcf" },
        surface: { 0:"#ffffff", 50:"#fafafa", 100:"#f3f3f3" }
      },
      boxShadow: { soft:"0 8px 30px rgba(0,0,0,.08)", hover:"0 12px 40px rgba(0,0,0,.14)" },
      borderRadius: { xl:"1rem", "2xl":"1.25rem", pill:"9999px" },
      spacing: { section:"4rem", "section-lg":"6rem" },
      fontFamily: { sans: ["Pretendard", "system-ui", "sans-serif"] },
    },
  },
  plugins: [],
} satisfies Config;
