import { component$ } from "@builder.io/qwik";
import type { LinkProps } from "../model";
import {  Link } from "@builder.io/qwik-city";

/**
 * A Qwik Component that holds a reference to an '<a></a>' tag, allowing navigation without full page reload.
 * @todo using an anchor tag results in full page reload, even though its recommended to use,find a way to use Link instead.
 * @param {Object} props - The properties for the PageLink component.
 * @param {string} props.title - The title of the link.
 * @param {string} props.route - The route the link should navigate to.
 * @returns {qwikComponent} - The Qwik component for rendering the link.
 * @see {@link https://qwik.builder.io/docs/api/#link} for more information on Qwik Link components.
 */

export const PageLink = component$<LinkProps>(({ title, route  }) => {
  return (
    <div class="flex " >
    <Link
      href={route}
      class=" font-serif font-medium text-blue-600 dark:text-blue-500 hover:underline focus-visible:ring capitalize"
      title={`go to route ${title}`}
    >
      {title}
    </Link>
    </div>

  );
});
