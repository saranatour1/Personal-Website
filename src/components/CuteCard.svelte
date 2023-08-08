<script>
  import items from '../data/data.json';
  console.log(items);
</script>

{#each items as item}
{#if item.projects} 
  {#each item.projects as project }
  <div class="max-w-md mx-auto  bg-gradient-to-br bg-zinc-50 rounded-lg shadow-md p-6 my-4 drop-shadow-md hover:border-teal-600 border">
    <details>
      <summary class=" flex">
        <h3 class="text-xl font-semibold text-gray-800 m-0">
          <a href={`#${project.title}`}>
          <span class="header-link">#</span>
          </a>
          {project.title}
        </h3>
      </summary>
      <p class="text-gray-600 m-0 indent-0">{project.caption}</p>
      <p class="text-gray-500  m-0">Affiliated with: <span class="text-xs font-serif font-extralight">{project.affiliatedWith}</span></p>
    </details>


    <div class=" flex w-full justify-between items-center m-0">
      <a href={project?.links?.github} class="text-blue-500 hover:underline" target="_blank">GitHub Repo</a>
      {#if project?.links?.live}
      <a href={project?.links?.live} class="text-blue-500 hover:underline" target="_blank">Live</a>
      {/if}
    </div>
  </div>
  {/each}
{/if}
{/each}



