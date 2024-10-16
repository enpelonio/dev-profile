/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        base: "#F0F2F5", // Soft Off-White for the background
        primary: "#2C3E50", // Deep Navy Blue for headers, buttons, links
        secondary: "#2ECC71", // Emerald Green for accents, icons, important highlights
        neutral: "#2F2F2F", // Dark Charcoal for primary text
        secondaryText: "#7D8C95", // Slate Gray for secondary text
        hover: "#FFC107", // Amber for hover/active state
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontFamily: {
        heading: ["Montserrat", "sans-serif"],
        body: ["Lora", "serif"],
        button: ["Roboto", "sans-serif"],
      },
    },
  },
  plugins: [],
};
