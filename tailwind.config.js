/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        accent: "#C7A17A",   // aesthetic gold
        dark: "#111827",     // soft black
        muted: "#6B7280",    // gray text
        lightbg: "#F9FAFB",  // off-white background
      },
    },
  },
  plugins: [],
};
