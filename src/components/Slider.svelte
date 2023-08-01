<script>
  import { onMount, onDestroy } from 'svelte';
  import { spring } from 'svelte/motion';
  import Card from './Card.svelte';

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
    count = (count + 1) % test.length;
  }

  const moveLeft = () => {
    count = (count - 1 + test.length) % test.length;
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
  <button id="left" on:click={moveLeft} aria-label="Move left">
    «
  </button>
  <div class="slider-viewport">
    <div class="slider-digits" style="transform: translate({100 * offset}%, 0)">
      <Card item={test[count]} />
    </div>
  </div>
  <button id="right" on:click={moveRight} aria-label="Move right">
    »
  </button>
</div>




<style>
  .slider {
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px solid #ccc;
    border-radius: 5px;
    overflow: hidden;
    width: 100%;
    height: 100%;
    margin: 0 auto;
    position: relative;
  }

  .slider button {
    width: 40px;
    height: 40px;
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
    width: 100%;
    height: auto;
    overflow: hidden;
    position: relative;
  }

  .slider-digits {

    display: flex;
    align-items: center;
    justify-content: center;
    transition: transform 1s ease;
  }


</style>
