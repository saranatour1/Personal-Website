import { component$, useStylesScoped$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import { BackButton } from "~/components/Back Button/back-button";

import { SiGithub, SiLinkedin, SiGmail } from "@qwikest/icons/simpleicons";
import { Footer } from "~/components/Footer/footer";

export default component$(() => {
  const routes = [
    [
      import.meta.env.PUBLIC_GIT_HUB,
      <SiGithub key={3} class="text-lg w-10 h-10" />,
    ],
    [
      import.meta.env.PUBLIC_lINKED_IN,
      <SiLinkedin key={4} class="text-lg w-10 h-10" />,
    ],
    [
      import.meta.env.PUBLIC_EMAIL,
      <SiGmail key={5} class="text-lg w-10 h-10" />,
    ],
  ];

  useStylesScoped$(`
  section#contact{
    animation: slideIn 1s cubic-bezier(0, 0, 0.20, 1);
    // animation: grow 1s;
    transition: transform 0.45s cubic-bezier(0, 0, 0.20, 1);
    transform-origin: bottom left; 
  }

  @keyframes slideIn {
    0% {
      transform: scale(0.2) translateX(-50%) translateY(-50%); 
      opacity: 0; 
    }
    100% {
      transform: scale(1) translateX(0) translateY(0); 
      opacity: 1; 
    }
  }

  @keyframes grow {
    0% { transform: scale(.2); }
  100% { transform: scale(1); }
}
`);

  return (
    <section
      class=" min-h-screen w-screen flex flex-col items-start justify-normal mx-auto  p-7  bg-gray-50"
      id="contact"
    >
      <div class="flex justify-start items-start h-fit my-5">
        <BackButton />
      </div>

      <article class="h-full w-full">
        <header class="w-full h-20 text-center flex flex-col items-center justify-center">
          <h2 class="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-4xl lg:text-4xl dark:text-white ">
            Contact Me
          </h2>
          <p class=" text-center my-5">Feel free to Contact me on these following Platforms, I am Looking forward to what You have to Say! </p>
        </header>

        <section class="w-8/12 h-auto  mx-auto">
          <address class="flex items-center justify-between my-5">
            {routes.map(([key, value], idx) => (
              <a
                key={idx}
                href={key}
                target="_blank"
                class=" text-lg hover:cursor-pointer"
              >
                {value}
              </a>
            ))}
          </address>
        </section>
      </article>
      <Footer/>
    </section>
  );
});

export const head: DocumentHead = {
  title: "Contact Page",
  meta: [
    {
      name: "description",
      content: "Contact Information page. ",
    },
    {
      name: "author",
      content: "Sara",
    },

    {
      property: "og:title",
      content: "Contact Page",
    },
    {
      property: "og:description",
      content: "Contact Information page.",
    },
  ],
};
