/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{html,js,jsx}"],
    theme: {
      extend: {
        fontFamily: {
            'jet': ['JetBrains Mono', 'monospace'],
          },
          dropShadow: {
            glow: [
              "0 0px 20px rgba(255, 0, 0, 1)",
              "0 0px 65px rgba(255, 255,255, 0.2)"
            ]
          }
      },
      plugins: {
        'postcss-import': {},
        'tailwindcss/nesting': 'postcss-nesting',
        tailwindcss: {},
        autoprefixer: {},
      }
    },
  }