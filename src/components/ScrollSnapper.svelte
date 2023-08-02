
<script>
  export let item; /** sliding item*/
  console.log(item)
</script>
<div class=" snap-y snap-mandatory overflow-scroll h-40 ">
  {#each item as child }
  <div class={`child  w-full h-full flex flex-col justify-center items-center ${child.links ? 'my-10':''}`}>
    <p class="font-serif my-4 font-extrabold ">{child.title}
    </p>
    {#if child.img}
    <img class="w-20" src={child.img} alt={`${child.title} logo`}>
    {/if}
    {#if child.caption}
      <p class=" break-words w-2/3">{child.caption}</p>
    {/if}
    {#if child.links}
    <div class="flex space-x-4 my-2 ">
      {#if child.links.github}
      <button class="px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-lg shadow-md">
        <a href={child.links.github}>Explore on github</a>
      </button>
      {/if}
      {#if child.links.live}
      <button class="px-4 py-2 bg-purple-500 hover:bg-purple-600 text-white font-semibold rounded-lg shadow-md">
        <a href={ child.links.live}>Live view</a>
      </button>
      {/if}

    </div>
    
    {/if}

  </div>
{/each}
</div>
