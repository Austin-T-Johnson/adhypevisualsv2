/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    screens: {
      /* ----- min-w = min-width breakpoint ----- */
      "4k": "3840px",
      "2xl": "1535px",
      xl: "1279px",
      lg: "1023px",
      md: "834px",
      sm: "640px",
      "x-sm": "375px",
      "xx-sm": "280px",
      "min-w-md": "835px",
    },
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
