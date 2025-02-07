/** @type {import('tailwindcss').Config} */
export default {
  darkMode:"class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors:{
        'custom-blue': 'rgb(0,85,255,1)',
      },
        backgroundImage: {
          'card-blue': 'linear-gradient(74deg, rgb(10, 102, 194) 6.27%, rgb(89, 148, 206) 90.96%)',
        },
    },
  },
  plugins: [],
};
