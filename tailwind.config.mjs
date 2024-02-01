/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        yellow: {
          5: "#F0DBA5",
          10: "#EDB74D",
        },
        red: {
          5: "#EB6666",
        },
        green: {
          5: "#6FB18A",
        },
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
