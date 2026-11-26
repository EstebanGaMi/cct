/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        papel: "#f3f0e8", // fondo
        papel2: "#e9e4d8", // fondo alternativo
        tinta: "#161616", // texto y bloques oscuros
        gris: "#5c5a55", // texto secundario
        linea: "#d6d0c2", // bordes
        amarillo: "#f5b700", // acento (amarillo de seguridad)
      },
      fontFamily: {
        titulo: ["var(--font-titulo)", "sans-serif"],
        cuerpo: ["var(--font-cuerpo)", "sans-serif"],
      },
    },
  },
  plugins: [],
};
