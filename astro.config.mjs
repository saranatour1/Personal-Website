import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";

import svelte from "@astrojs/svelte";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), svelte()],
  redirects:{
    '/projects/': '/503',
    '/about/': '/503',
    '/contact/': '/503',
    '/blogs/': '/503',

  }
});