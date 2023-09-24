import { component$ } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';

export default component$(() => {
  return <div>Page!</div>
});



export const head: DocumentHead = {
  title: "About me ",
  meta: [
    {
      name: "description",
      content: "about me page",
    },
    {
      name: "author",
      content: "Sara",
    },

    {
      property: "og:title",
      content: "About me",
    },
    {
      property: "og:description",
      content: "about me page",
    },
  ],
};