import { component$ } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';

export default component$(() => {
  return <div>Page!</div>
});


export const head: DocumentHead = {
  title: "blogs Page",
  meta: [
    {
      name: "description",
      content: "blogs page, Where I leave in stuff that I want humans to see or Read.",
    },
    {
      name: "author",
      content: "Sara",
    },

    {
      property: "og:title",
      content: "blogs Page",
    },
    {
      property: "og:description",
      content: "blogs page, Where I leave in stuff that I want humans to see or Read.",
    },
  ],
};