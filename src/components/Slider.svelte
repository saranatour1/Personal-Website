<script>
  import { onMount, onDestroy } from 'svelte';
  import { spring } from 'svelte/motion';
  import Card from './Card.svelte';
  import items from '../data/data.json';
  let count = 0;
  const displayed_count = spring();
  $: displayed_count.set(count);
  $: offset = modulo($displayed_count, 1);
  let interval = 15000;
  let test = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  let intervalId;

  function modulo(n, m) {
    return ((n % m) + m) % m;
  }

  const moveRight = () => {
    count = (count + 1) % items.length;
  }

  const moveLeft = () => {
    count = (count - 1 + items.length) % items.length;
  }

  const startInterval = () => {
    intervalId = setInterval(moveRight, interval);
  }

  const stopInterval = () => {
    clearInterval(intervalId);
  }

  onMount(() => {
    startInterval();
  });

  onDestroy(() => {
    stopInterval();
  });

  $: console.log(count);
</script>

<!-- svelte-ignore a11y-no-static-element-interactions -->
<div class="slider" on:mouseenter={stopInterval} on:mouseleave={startInterval} >
  <button class="py-2 px-2" id="left" on:click={moveLeft} aria-label="Move left">
    «
  </button>
  <div class="slider-viewport">
    <div class="slider-digits" style="transform: translate({20 * offset}%, 0)">
      <!-- <div class="hidden" aria-hidden="true"> <Card item={items[$displayed_count+1]} /></div> -->
      <Card item={items[count]} />
      <!-- <div class="hidden" aria-hidden="true"> <Card item={items[$displayed_count-1]} /></div> -->
    </div>
  </div>
  <button class="py-2 px-2" id="right" on:click={moveRight} aria-label="Move right">
    »
  </button>
</div>





<style>
  .slider {
    display: flex;
    align-items: center;
    justify-content: center;
    /* border: 1px solid #ccc; */
    border-radius: 5px;
    overflow: hidden;
    /* width: 100%;
    height: 100%; */
    margin: 0 auto;
    /* position: relative; */
    width: calc(100vw - 30px);

  }

  .slider button {
    /* width: 40px;
    height: 40px; */
    background: none;
    border: none;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 20px;
    color: #333;
    outline: none;
    user-select: none;
  }

  .slider-viewport {
    /* width: 100%;
    height: auto; */
    overflow: hidden;
    /* position: relative; */
  }

  .slider-digits {

    display: flex;
    align-items: center;
    justify-content: center;
    transition: transform 1s ease;
  }


</style>
