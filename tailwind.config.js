/** @type {import('tailwindcss').Config} */
export default {
    content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
      extend: {
        fontSize: {
          h1Clamp: "clamp(3.2rem, 6vh, 4rem)",
          h2Clamp: "clamp(1.6rem, 3vh, 2rem)",
          p24Clamp: "clamp(1.2rem, 2vh, 1.5rem)",
          p20Clamp: "clamp(1.1rem, 1.8vh, 1.25rem)",
          p18Clamp: "clamp(0.95rem, 1.7vh, 1.15rem)",
          p16Clamp: "clamp(0.9rem, 1.6vh, 1rem)"
        },
      },
    },
    plugins: [],
  }