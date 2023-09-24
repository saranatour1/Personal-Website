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

export const Heading = component$<HeadingProps>(({ title, descreption }) => {
  return (
    <hgroup class="flex flex-col flex-grow w-9/12  2xl:w-7/12 items-center justify-center mx-auto h-auto ">
      <h1
        class=" text-center font-serif text-6xl lg:text-5xl md:text-4xl sm:text-3xl max-sm:text-3xl font-extrabold dark:text-white flex-1 my-3 tracking-wide"
        aria-labelledby="header-title"
      >
        {title}
      </h1>
      <p
        class="text-lg max-sm:text-base  font-serif font-extralight text-center text-gray-950 dark:text-white flex-1"
        id="header-description"
      >
        {descreption}{" "}
      </p>
    </hgroup>
  );
});
