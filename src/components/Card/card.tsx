import { component$, useStyles$ } from "@builder.io/qwik";
import type { ProjectProps } from "../model";

export const Card = component$<ProjectProps>(({ project }) => {
  useStyles$(`
  #projectFrame{
    zoom: 0.15;
    transform: scale(0.50);
    -moz-transform:scale(0.75);
    -moz-transform-origin: 0 0;
    -o-transform: scale(0.75);
    -o-transform-origin: 0 0;
    -webkit-transform: scale(0.75);
    -webkit-transform-origin: 0 0;
    }
    }
  `);

  const removeSpacesFromID = (title: string) => {
    return title.split(" ").join("-").toLowerCase();
  };

  return (
    <div class=" w-full mx-auto  bg-gradient-to-br bg-zinc-50 rounded-lg shadow-md p-6 my-4 drop-shadow-md hover:border-teal-600 border">
      <details class="w-full">
        <summary class=" flex">
          <h3
            class="text-xl font-semibold text-gray-800 m-0"
            id={removeSpacesFromID(project.title)}
          >
            <a
              class=" opacity-0 hover:transition-transform hover:opacity-100"
              href={`#${removeSpacesFromID(project.title)}`}
            >
              <span class="header-link">#</span>
            </a>
            {project.title}
          </h3>
        </summary>
        <p class="text-gray-600 m-0 indent-0">{project.caption}</p>
        <p class="text-gray-500  m-0">
          Affiliated with:{" "}
          <span class="text-xs font-serif font-extralight">
            {project.affiliatedWith}
          </span>
        </p>
        {project.links.live && (
          <div class=" inline-flex items-center justify-center w-full">
            <iFrame
              src={project.links.live}
              title={`${project.title} live preview, click on live button for better user exprerience`}
              allowFullScreen
              width="100%"
              height="400"
              id="#projectFrame"
            ></iFrame>
          </div>
        )}
      </details>

      <div class=" flex w-full justify-between items-center m-0">
        <a
          href={project?.links?.github}
          class="text-blue-500 hover:underline"
          target="_blank"
        >
          GitHub Repo
        </a>
        {project?.links?.live && (
          <a
            href={project?.links?.live}
            class="text-blue-500 hover:underline"
            target="_blank"
          >
            Live
          </a>
        )}
      </div>
    </div>
  );
});
