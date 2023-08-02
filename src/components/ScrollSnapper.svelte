
<script>
  export let item; /** sliding item*/
  console.log(item)
</script>
<div class=" snap-y snap-mandatory overflow-scroll max-h-60 min-h-40 overflow-x-hidden ">
  {#each item as child }
  <div class={`child  w-full h-fit flex flex-col justify-center items-center ${child.links ? 'my-10':''} max-xs:my-12 max-[400px]:my-32`}>
    <p class="font-serif my-4 font-extrabold ">{child.title}
    </p>
    {#if child.img}
    <img class="w-20" src={child.img} alt={`${child.title} logo`}>
    {/if}
    {#if child.caption}
      <p class=" break-words w-2/3">{child.caption}</p>
    {/if}
    {#if child.links}
    <div class="flex space-x-4 my-2 max-[400px]:my-6">
      {#if child.links.github}
      <button class="px-4 py-2  bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-lg  drop-shadow-sm">
        <a href={child.links.github} target="_blank">Explore on github</a>
      </button>
      {/if}
      {#if child.links.live}
      <button class="px-4 py-2 bg-purple-500 hover:bg-purple-600 text-white font-semibold rounded-lg drop-shadow-sm">
        <a href={ child.links.live} target="_blank">Live view</a>
      </button>
      {/if}

    </div>
    
    {/if}

  </div>
{/each}
</div>
