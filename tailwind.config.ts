import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // --- Primarios ---
        brand: {
          blue:  "#044A81",  // azul principal
          navy:  "#0D1827",  // negro azulado (fondo navbar, footer, CTAs oscuros)
        },
        // --- Complementarios ---
        comp: {
          dark:  "#2D2E4C",  // morado oscuro
          green: "#1ABA55",  // verde CTA
        },
        // --- Grises ---
        ui: {
          gray:  "#8E959E",  // texto secundario / íconos
          light: "#E2E2EC",  // fondos suaves / bordes
        },
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
      },
      fontSize: {
        // Escala tipográfica del Figma
        "h1": ["56px", { lineHeight: "55px", fontWeight: "700" }],
        "h2": ["36px", { lineHeight: "40px", fontWeight: "700" }],
        "h3": ["32px", { lineHeight: "38px", fontWeight: "700" }],
        "h4": ["24px", { lineHeight: "30px", fontWeight: "700" }],
        "body-lg":  ["24px", { lineHeight: "26px", fontWeight: "400" }],
        "body-md":  ["22px", { lineHeight: "24px", fontWeight: "600" }],
        "body-sm":  ["16px", { lineHeight: "20px", fontWeight: "400" }],
        "body-xs":  ["16px", { lineHeight: "22px", fontWeight: "400" }],
        "btn":      ["16px", { lineHeight: "18px", fontWeight: "700" }],
        "input":    ["15px", { lineHeight: "16px", fontWeight: "700" }],
      },
    },
  },
  plugins: [],
};

export default config;
