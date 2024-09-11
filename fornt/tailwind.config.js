/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "custom-gradient": "linear-gradient(135deg, #ff6b6b, #556270)",
      },
    },
  },
  plugins: [
    require("tailwind-scrollbar-hide"), // Add the scrollbar-hide plugin here
  ],
};
