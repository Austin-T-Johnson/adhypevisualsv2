/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        jet: ["JetBrains Mono", "monospace"],
        nikea: ["Nikea", "sans-serif"],
        momCake: ["momcake", "sans-serif"],
      },
      dropShadow: {
        glow: [
          "0 0px 20px rgba(255, 0, 0, 1)",
          "0 0px 65px rgba(255, 255,255, 0.2)",
        ],
      },
      textShadow: {
        sm: "0 1px 2px var(--tw-shadow-color)",
        DEFAULT: "0 2px 4px var(--tw-shadow-color)",
        lg: "0 8px 16px var(--tw-shadow-color)",
      },
    },
    plugins: {
      "postcss-import": {},
      "tailwindcss/nesting": "postcss-nesting",
      tailwindcss: {},
      autoprefixer: {},
    },
  },
};
