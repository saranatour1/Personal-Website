import { component$, useStyles$ } from "@builder.io/qwik";
import {  type DocumentHead } from "@builder.io/qwik-city";
import { Heading } from "~/components/Heading/heading";
import { PageLink } from "~/components/Page Link/page-link";
import styles from "./index.css?inline";

export default component$(() => {
  const routes = [
    ["/about", "about me"],
    ["/projects", "projects"],
    ["/contact", "contact me"],
    ["/blogs", "blogs"],
  ];
  useStyles$(styles);


  return (
    <div class="h-screen w-screen flex flex-col justify-center items-center">
      <nav class="grid grid-cols-2 grid-rows-2 w-10/12 h-5/6 place-content-center mx-auto my-5 p-0 ">
        {routes.map(([key, value], idx) => (
          <PageLink key={idx} route={key} title={value}  />
        ))}
      </nav>
      <header
        class=" absolute  w-full h-full  top-0 left-0  grid place-content-center mx-auto -z-10 "
        role="banner"
        aria-labelledby="header-title"
        aria-describedby="header-description"
      >
        <Heading
          title="Hello There 👋"
          descreption="This is a personal website and portfolio of me, Sara Natour, an Electrical Engineer turned full-stack developer. "
        />
      </header>
    </div>
  );
});

export const head: DocumentHead = {
  title: "Home",
  meta: [
    {
      name: "description",
      content: "a Personal Website for Sara Natour.",
    },
    {
      name: "author",
      content: "Sara",
    },

    {
      property: "og:title",
      content: "Home",
    },
    {
      property: "og:description",
      content: "a Personal Website for Sara Natour.",
    },
  ],
};
