/** @type {import('tailwindcss').Config} */
const { addDynamicIconSelectors } = require("@egoist/tailwindcss-icons");
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    fontFamily: {
      sans: ["ui-sans-serif", "system-ui"],
      serif: ["ui-serif", "Georgia"],
      mono: ["ui-monospace", "SFMono-Regular"],
      display: ["Oswald"],
      body: ['"Open Sans"'],
      kaushan: ["Kaushan Script"],
      quicksand: ["Quicksand"],
      volko: ["Volkhov"],
    },
    extend: {
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-50%)" },
        },
        marquee2: {
          "0%": { transform: "translateX(100%)" },
          "100%": { transform: "translateX(0%)" },
        },
      },
      animation: {
        "spin-slow-30": "spin 30s linear infinite",
        "spin-slow-25": "spin 25s linear infinite",
        "spin-slow-10": "spin 10s linear infinite",
        "marquee-infinite": "marquee 25s linear infinite",
        "marquee2-infinite": "marquee2 25s linear infinite",
      },
      colors: {
        clifford: "#da373d",
        lightpink: "#ffe8f0",
        darkpink: "#ff5bb1",
        navpink: "#fcaad2",
        cardpink: "#f2c5d4",
      },
    },
  },
  plugins: [
    function ({ addVariant, e }) {
      addVariant("child", ({ modifySelectors, separator }) => {
        modifySelectors(({ className }) => {
          return `.${e(`child${separator}${className}`)} > *`;
        });
      });
    },
  ],
};
