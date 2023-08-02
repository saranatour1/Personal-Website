<script>
  import ScrollSnapper from "./ScrollSnapper.svelte";

  export let item; /** refers to any one of the Items in data.json*/
  $:console.log(item)
</script>

<div class=" drop-shadow-md p-8  m-4 rounded-2xl  mt-2 mb-2  bg-slate-50  w-auto">
  <hgroup class="p-4 rounded-t-xl font-serif">
    {#if item.contact}
        <h3 class="font-title  text-xl md:text-2xl pt-2 pb-2">Contact Info</h3>
        <p class=" ">Contact Me on {item.contact.title}</p>
        {:else if item.skills}
        <h3 class="font-title  text-xl md:text-2xl pt-2 pb-2">My Skills</h3>
        {:else if item.projects}
        <h3 class="font-title  text-xl md:text-2xl pt-2 pb-2">My Projects</h3>
    {/if}


  </hgroup>
  <div class="grid grid-rows-1 grid-cols-1 justify-items-center">
      {#if item?.contact}
        <a  class=" font-serif w-10" href={item?.contact?.links} target="_blank"><span><img src={item?.contact?.img} alt={`${item?.contact?.title} logo`}></span></a>
        {:else if item?.skills}
        <ScrollSnapper item={item.skills}/>
        {:else if item?.projects}
        <ScrollSnapper item={item.projects}/>
      {/if}
  </div>





</div>


