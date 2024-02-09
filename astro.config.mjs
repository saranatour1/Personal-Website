import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import tailwind from "@astrojs/tailwind";

import robots from "astro-robots";

// https://astro.build/config
export default defineConfig({
  site: 'https://www.saranatour.dev/',
  integrations: [mdx(), sitemap(), tailwind(), robots()]
});