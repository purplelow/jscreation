/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        Monoton: ["Monoton", "cursive"],
        ZenTokyoZoo: ["Zen Tokyo Zoo", "cursive"],
        Bungee: ["Bungee Outline", "cursive"],
        BungeeShade: ["Bungee Shade", "cursive"],
        LibreBarcode: ["Libre Barcode 39", "cursive"],
        BlackOpsOne: ["Black Ops One", "cursive"],
        Dancing: ["Dancing Script", "cursive"],
        Anton: ["Anton", "sans-serif"]
      },
    },
    backgroundImage: {
      logoWhite: "url('../public/assets/images/logoWhite.png')",
      logoBlack: "url('../public/assets/images/logoBlack.png')",
      loadingRocket: "url('../public/assets/images/rocket_gif.gif')",
    },
  },
  plugins: [],
};
