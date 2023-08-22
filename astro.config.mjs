import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import svelte from "@astrojs/svelte";
import mdx from "@astrojs/mdx";
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import rehypeSlug from 'rehype-slug';
import robotsTxt from 'astro-robots-txt';

// https://astro.build/config
export default defineConfig({
  site: 'https://personal-website-indol-sigma.vercel.app/',
  redirects: {
    '/blogs': '/503',
  },
  integrations: [tailwind(), svelte(), mdx(),robotsTxt()],
  markdown: {
    syntaxHighlight: false,
    rehypePlugins: [
        rehypeSlug,
        [rehypeAutolinkHeadings, {
            behavior: "prepend",
            content: {
                type: "element",
                tagName: "span",
                properties: { className: "header-link" },
                children: [{ type: "text", value: "#" }],
            },
        }],
    ],
},
experimental: {
  viewTransitions: true
 }


});
