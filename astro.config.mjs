import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";

import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  site:'https://www.saranatour.dev/',
  integrations: [tailwind(), sitemap({
    changefreq: 'weekly',
    priority: 0.7,
    lastmod: new Date('2024-01-29'),
    i18n: {
      defaultLocale: 'en', 
      locales: {
        en: 'en-US', 
        ar:'ar-AE'
      },
    },
  })]
});