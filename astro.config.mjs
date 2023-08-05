import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import svelte from "@astrojs/svelte";
import mdx from "@astrojs/mdx";
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import remarkToc from 'remark-toc';
import rehypeSlug from 'rehype-slug';

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), svelte(), mdx()],
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

});
