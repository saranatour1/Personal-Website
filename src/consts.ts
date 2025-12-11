// Place any global data in this file.
// You can import this data from anywhere in your site by using the `import` keyword.
export const SITE_TITLE = "Sara Natour's Personal website";
export const SITE_DESCRIPTION = "The personal Website of Sara Natour.";
export const socialLinks = [
  import.meta.env.PUBLIC_EMAIL,
  import.meta.env.PUBLIC_LINKEDIN,
  import.meta.env.PUBLIC_GITHUB,
] as string[];

export const skillSet = [
  {
    name: "TypeScript",
    icon: "https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/typescript-colored.svg",
    url: "https://www.typescriptlang.org/",
  },
  {
    name: "JavaScript",
    icon: "https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/javascript-colored.svg",
    url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
  },
  {
    name: "React",
    icon: "https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/react-colored.svg",
    url: "https://reactjs.org/",
  },
  {
    name: "NextJS",
    icon: "https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/nextjs-colored.svg",
    url: "https://nextjs.org/",
  },
  {
    name: "convex",
    icon: "https://www.convex.dev/favicon.ico",
    url: "https://www.convex.dev/",
  },
  {
    name: "TailwindCSS",
    icon: "https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/tailwindcss-colored.svg",
    url: "https://tailwindcss.com/",
  },
  {
    name: "shadcn UI",
    icon: "https://ui.shadcn.com/favicon.ico",
    url: "https://ui.shadcn.com/",
  },
  {
    name: "Python",
    icon: "https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/python-colored.svg",
    url: "https://www.python.org/",
  },
  {
    name: "Java",
    icon: "https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/java-colored.svg",
    url: "https://www.oracle.com/java/",
  },
  {
    name: "Git",
    icon: "https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/git-colored.svg",
    url: "https://git-scm.com/",
  },
  {
    name: "Bootstrap",
    icon: "https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/bootstrap-colored.svg",
    url: "https://getbootstrap.com/",
  },
  {
    name: "NodeJS",
    icon: "https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/nodejs-colored.svg",
    url: "https://nodejs.org/en/",
  },
  {
    name: "MongoDB",
    icon: "https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/mongodb-colored.svg",
    url: "https://www.mongodb.com/",
  },
  {
    name: "MySQL",
    icon: "https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/mysql-colored.svg",
    url: "https://www.mysql.com/",
  },
  {
    name: "Flask",
    icon: "https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/flask-colored.svg",
    url: "https://flask.palletsprojects.com/en/2.0.x/",
  },
  {
    name: "Django",
    icon: "https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/django-colored.svg",
    url: "https://www.djangoproject.com/",
  },
  {
    name: "Svelte",
    icon: "https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/svelte-colored.svg",
    url: "https://svelte.dev/",
  },
  {
    name: "VueJS",
    icon: "https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/vuejs-colored.svg",
    url: "https://vuejs.org/",
  },
  {
    name: "Docker",
    icon: "https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/docker-colored.svg",
    url: "https://www.docker.com/",
  },
  {
    name: "Figma",
    icon: "https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/figma-colored.svg",
    url: "https://www.figma.com/",
  },
  {
    name: "PostgreSQL",
    icon: "https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/postgresql-colored.svg",
    url: "https://www.postgresql.org/",
  },
  {
    name: "MongoDB",
    icon: "https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/mongodb-colored.svg",
    url: "https://www.mongodb.com/",
  },
];

export const projectLinks = [
  {
    name: "Gemeni Chat app ",
    description: "A chat app built with NextJS and Convex",
    url: "https://gemeni-app-azure.vercel.app/",
    tools: ["NextJS", "Convex", "TailwindCSS", "shadcn UI"],
    upcoming: false,
  },
  {
    name: "Personal Job Application tracker (for the Applicant)",
    description: "No more excuses, This is an actual Personal job tracker that pays off, and is completely free, self-hosted.",
    url: null,
    tools: ["Tanstack Start", "Convex", "Firecrawl", "Agent"],
    upcoming: true,
  },
  {
    name: "link shortener app",
    description: "A link shortener app built with NextJS and Convex",
    url: null,
    tools: ["Tanstack start", "Convex"],
    upcoming: true,
  },
  {
    name: "german article wheel",
    description: "A german article wheel built with Vue",
    url: "https://article.saranatour.dev/",
    tools: ["vue"],
    upcoming: false,
  },
  {
    name: "mortage calculator",
    description: "A mortage calculator built with vue and TailwindCSS",
    url: "https://github.com/saranatour1/mortage-calculator",
    tools: ["vue", "tailwindcss"],
    upcoming: false,
  },
  {
    name: "view colors",
    description: "A view colors app built with Vue ",
    url: "https://github.com/saranatour1/view-colors",
    tools: ["vue", "tailwindcss"],
    upcoming: false,
  },
  {
    name: "preview card",
    description: "A preview card built with kaioken",
    url: "https://preview-card-uzhw.vercel.app/",
    tools: ["kaioken", "tailwindcss"],
    upcoming: false,
  },
  {
    name: "image gallery",
    description: "An image gallery built with sveltekit",
    url: "https://github.com/saranatour1/image-gallery",
    tools: ["svelte", "tailwindcss"],
    upcoming: false,
  },
];
