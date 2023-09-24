import { component$, useStylesScoped$ } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';
import { BackButton } from '~/components/Back Button/back-button';

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
  return <section class=" bg-slate-100 w-full min-h-screen flex flex-col justify-normal  p-10 " id='projects'>
    <BackButton />
    Page!</section>
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