// Place any global data in this file.
// You can import this data from anywhere in your site by using the `import` keyword.
export const SITE_TITLE = "Astro Blog";
export const SITE_DESCRIPTION = "Welcome to my website!";
export const socialLinks = [
  import.meta.env.PUBLIC_EMAIL,
  import.meta.env.PUBLIC_LINKEDIN,
  import.meta.env.PUBLIC_GITHUB,
] as string[];
