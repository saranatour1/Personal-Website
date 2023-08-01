<script>
  import { onMount } from 'svelte';
  import { spring } from 'svelte/motion';

  let count = 0;
  const displayed_count = spring();
  $: displayed_count.set(count);
  $: offset = modulo($displayed_count, 1);
  let interval = 10000;
  let test = [1,2,3,4,5,6,7,8,9,10]

  function modulo(n, m) {
    // handle negative numbers
    return ((n % m) + m) % m;
  }

  // Function to move the things to the right
  const moveRight = () => {
    count = (count + 1) % test.length;
  }

  const moveLeft = () => {
    count = (count - 1 + test.length) % test.length;
  }

  // Marque style
  const changeIdx = () => {
    setInterval(moveRight, interval);
  }

  onMount(() => {
    changeIdx();
  })

  $: console.log(count);
</script>

<div class="slider">
  <button id="left" on:click={moveLeft} aria-label="Move left">
    «
  </button>
  <div class="slider-viewport">
    <div class="slider-digits" style="transform: translate({100 * offset}%,0)">
      <!-- <strong class="hidden" aria-hidden="true">{test[(count - 1 + test.length) % test.length]}</strong> -->
      <strong class="text-black text-3xl">{test[count]}</strong>
      <!-- <strong class="hidden" aria-hidden="true">{test[(count + 1) % test.length]}</strong> -->
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
    width: 200px;
    height: 40px;
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
    height: 100%;
    overflow: hidden;
    position: relative;
  }

  .slider-digits {
    position: absolute;
    top: -41px;
    left: 0;
    width: 100%;
    height: 300%;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: transform 1s ease;
  }

  .slider-digits strong {
    display: block;
    font-size: 22px;
    /* color: #fff; */
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    text-align: center;
    justify-content: center;
  }

  .slider-digits strong:nth-child(1),
  .slider-digits strong:nth-child(3) {
    opacity: 0.5;
  }
</style>
