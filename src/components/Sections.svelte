<script>
  import items from '../data/data.json';
  console.log(items)
</script>

{#each items as item }
    <section class="flex flex-col justify-center items-center  h-screen">
      <div class=" mt-24 h-fit">
        {#if item.contact}
          {item.contact}
        {/if}

      </div>

    </section>
{/each}
