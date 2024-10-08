/** @type {import('tailwindcss').Config} */
module.exports = {
  // Mit content wird Tailwind mitgeteilt, welche Dateien nach CSS-Klassen durchsucht werden sollen.
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  // Mit darkMode wird Tailwind mitgeteilt, dass es eine Klasse für den Dark Mode generieren soll.
  darkMode: "class",
  // Mit theme.extent kann das Standard-Theme von Tailwind erweitert werden. z.B. um eigene Farben. Tailwind generiert dann automatisch alle passenden Klassen (z.B. text-light, bg-light, border-light usw...).
  theme: {
    extend: {

      screens: {
        'ssm': '410px',
      },

      margin: {
        '120': '30rem',
        '144': '36rem',
        '168': '42rem',
        '192': '48rem',
      },
      
      colors: {
        light: "#D1D1D1",
        dark: "#1b1b1b",
        halfdark: "#525252",
      },
      fontSize: {
        'half-sm': '0.68rem',
        'half-md': '1.2rem', // Hier definieren Sie die Größe für die halbe sm-Größe
      },
      spacing: {
        // Add custom spacing values here
        '112': '27rem',
        '120': '30rem',
        '128': '32rem',
        '144': '36rem',
        '160': '40rem',
        '192': '48rem',
      },
    },
  },
  plugins: [],
};
