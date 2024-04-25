/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        "white-1":"#fcf8ef", // bg
        "black-1":"#1a1a1a",
        "blue-1":"#2a9d8f",
        },
      fontFamily: {
        recoleta: ["Recoleta"],
      },
      backgroundImage:{
        '5':'/public/blog-placeholder-5.jpg'
      }
    },
  },
  plugins: [],
};
