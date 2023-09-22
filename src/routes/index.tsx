import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import { Heading } from "~/components/Heading/heading";

export default component$(() => {
  return (
    <>
      <Heading
      title="Hi"
      descreption={`      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusantium eligendi qui illo, esse necessitatibus aliquid blanditiis voluptatibus? Illum rerum natus quisquam delectus illo, blanditiis, itaque veritatis necessitatibus, eum qui fugit.
      `}
      />
    </>
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
      name:"author",
      content:"Sara",
    },

  ],
};
