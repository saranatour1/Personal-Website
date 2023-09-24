import { component$, useStylesScoped$ } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';
import { BackButton } from '~/components/Back Button/back-button';

export default component$(() => {
  useStylesScoped$(`
  section#blogs{
    animation: slideIn 1s cubic-bezier(0, 0, 0.20, 1);
    // animation: grow 1s;
    transition: transform 0.45s cubic-bezier(0, 0, 0.20, 1);
    transform-origin: bottom right; 
  }

  @keyframes slideIn {
    0% {
      transform: scale(0.2) translateX(100%) translateY(100%);
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

  
  return <section class=" bg-rose-100 w-full h-full grid place-content-center " id='blogs'>
    <BackButton />
    Page!
    </section>
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