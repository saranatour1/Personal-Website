import { component$, useStylesScoped$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import { BackButton } from "~/components/Back Button/back-button";
import Projects from "./projects.mdx";
import { Footer } from "~/components/Footer/footer";

export default component$(() => {
  useStylesScoped$(`
  section#projects{
    animation: slideIn 1s cubic-bezier(0, 0, 0.20, 1);
    // animation: grow 1s;
    transition: transform 0.45s cubic-bezier(0, 0, 0.20, 1);
    transform-origin: top right; 
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

  const dateNow = new Date("09/24/2023");
  return (
    <section
      class=" bg-stone-50 w-screen min-h-screen flex flex-col justify-normal  p-10 "
      id="projects"
    >
      <div class="flex justify-start items-start h-fit my-5">
        <BackButton />
      </div>

      <article class="h-full w-full  bg-inherit bg-emerald-100">
        <header class="w-full h-20 text-center flex flex-col items-center justify-center">
          <h2 class="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-4xl lg:text-4xl dark:text-white">
            Projects and Skills{" "}
          </h2>
          <time
            dateTime={dateNow.toISOString()}
            class="font-light text-xs text-zinc-500"
          >
            Last updated on {dateNow.toLocaleDateString()}
          </time>
        </header>

        <section class="h-full bg-inherit bg-emerald-100 prose 2xl:w-full mt-5 prose-headings:m-0 mx-auto  ">
          <Projects />
        </section>
      </article>

      <Footer />
    </section>
  );
});

export const head: DocumentHead = {
  title: "Projects Page",
  meta: [
    {
      name: "description",
      content: "Projects and skills Page ",
    },
    {
      name: "author",
      content: "Sara",
    },

    {
      property: "og:title",
      content: "Projects Page",
    },
    {
      property: "og:description",
      content: "Projects and skills  Page",
    },
  ],
};
