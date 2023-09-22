import { component$ } from "@builder.io/qwik";
import type { HeadingProps } from "../model";

/**
 * a Qwik component to Represent the main Heading on the page, nothing to serious about this
 * Edit: made this into an Hgroup, better?
 * @param {Object} props - the Heading properties
 * @param {string} title - the title of the main heading.
 * @param {string} descreption - some commentary descreption
 * @returns {qwikComponent}
 * 
 */

export const Heading = component$<HeadingProps>(({ title , descreption }) => {
  return <hgroup class="flex flex-col flex-grow w-9/12 items-center justify-center mx-auto h-auto">
    <h1 class=" font-serif text-6xl font-extrabold dark:text-white flex-1 my-3 tracking-wide">{title}</h1>
    <p class="text-lg  font-serif font-extralight text-center  text-gray-500 dark:text-white flex-1">{descreption} </p>
  </hgroup>;
});
