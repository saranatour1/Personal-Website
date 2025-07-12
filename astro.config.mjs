import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import tailwindcss from "@tailwindcss/vite";
import robots from "astro-robots";
import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  site: 'https://saranatour.dev/',
  integrations: [mdx(), sitemap(), tailwindcss(), robots(), react()],

  vite: {
    plugins: [tailwindcss()]
  }
});