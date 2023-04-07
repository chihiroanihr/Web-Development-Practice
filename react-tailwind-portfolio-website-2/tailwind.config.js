/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  // Just-In-Time (JIT) compilation mode allows Tailwind to generate CSS on-demand in the browser during development, instead of generating a static CSS file that needs to be precompiled before deployment.
  mode: "jit",
  theme: {
    extend: {
      // Basic Colors
      colors: {
        blue: "#2CBCE9",
        red: "#DC4492",
        yellow: "#FDCC49",
        grey: "#EDEDED",
        "deep-blue": "#010026",
        "dark-grey": "#757575",
        "opaque-black": "rgba(0,0,0,0.35)",
      },
      // Background Gradients
      backgroundImage: (theme) => ({
        "gradient-rainbow":
          "linear-gradient(81.66deg, #00B5EE 7.21%, #FF45A4 45.05%, #FFBA00 78.07%)",
        "gradient-rainblue":
          "linear-gradient(890deg, #24CFF 14.53%, #FC59FF 69.36%, #FFBD0C 107.73%)",
      }),
      // Font Family
      fontFamily: {
        playfair: ["Playfair Display", "serif"],
        opensans: ["Open Sans", "sans-serif"],
      },
      // Images
      content: {
        brush: "url('./assets/brush.png')",
        person1: "url('./assets/person-1.png')",
        person2: "url('./assets/person-2.png')",
        person3: "url('./assets/person-3.png')",
      },
    },
    screens: {
      xs: "480px",
      ss: "620px",
      sm: "768px",
      md: "1060px",
      lg: "1200px",
      xl: "1700px",
    },
  },
  plugins: [],
};

// Make sure to run:
// npx tailwindcss -i ./src/index.css -o ./public/output.css --watch
// After configuration!

// Make sure to declare:
// <link rel="stylesheet" href="/public/output.css">
// in the index.html!
