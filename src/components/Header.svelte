<script>

  import { onMount } from "svelte";
  import { fade, fly , slide } from 'svelte/transition';


	let windowWidth;
  let isMobileDevice = false;
  let showMenu = false;

  if(window){
    windowWidth = window.innerWidth;
  }

  const setWindowWidth = () => {
		windowWidth = window.innerWidth;
    showMobileMenu();
	};

  const showMobileMenu =()=>{
    isMobileDevice = (windowWidth <= 700)
  }

  $:showMobileMenu();

	onMount(() => {		
		window.addEventListener('resize',   setWindowWidth);
	});

  const showMenuChange =()=>{
    showMenu = !showMenu;
  }


</script>


<header class="flex justify-between items-center  px-6 h-16 font-serif  fixed w-full top-0 left-0 ">

  <div class=" font-extrabold text-xl" >
    <a href="/"> <img src="/logo.svg" alt="My cat Logo"></a>
  </div>

{#if isMobileDevice}
  <button on:click={showMenuChange}>

      <div class={`burger-menu ${showMenu ? 'open' : ''}`} transition:fly={{ y: 200, duration: 2000 }}>
        <div class="burger-line bg-zinc-950"></div>
        <div class="burger-line bg-zinc-950"></div>
        <div class="burger-line bg-zinc-950"></div>
        {#if !showMenu}
        <div class="burger-line bg-zinc-950"></div>
        {/if}

      </div>
  </button>
  {:else}
  <div class="flex  items-center justify-center" transition:fade>
    <ul class="flex space-x-6">
      <li class="text-lg"><a href="/projects" class=" hover:text-cyan-400">Projects</a> </li>
      <li class="text-lg"><a href="/about" class=" hover:text-cyan-400"> About Me</a></li>
      <li class="text-lg"><a href="/blogs" class=" hover:text-cyan-400">blogs</a></li>
      <li class="text-lg"><a href="/contact" class=" hover:text-cyan-400">contact</a> </li>
    </ul>
  </div>
  
  <div class="flex items-center justify-center" transition:fade>
    <button class="text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800    font-medium rounded-3xl text-sm px-5 py-2.5 text-center drop-shadow-md"> Hire Me</button>
  </div>

{/if}
</header>

{#if showMenu && isMobileDevice}
  <div class=" flex flex-col justify-between items-start mx-8  font-serif xl:mx-24 mt-16" transition:slide>
    <ul class="flex flex-col ps-10 my-1">
      <li class="text-lg"><a href="/projects" class=" hover:text-cyan-400">Projects</a> </li>
      <li class="text-lg"><a href="/about" class=" hover:text-cyan-400"> About Me</a></li>
      <li class="text-lg"><a href="/blogs" class=" hover:text-cyan-400">blogs</a></li>
      <li class="text-lg"><a href="/contact" class=" hover:text-cyan-400">contact</a> </li>
      <li class="text-lg">    <button class="text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800    font-medium rounded-3xl text-sm px-5 py-2.5 text-center drop-shadow-md"> Hire Me</button>
      </li>
    </ul>

  </div>
{/if}

<style>
@media screen and (min-width: 1280px) {
header {
margin: 0;
}
}



.burger-menu, .burger-line {
  list-style: none;
  margin: 0;
  padding: 0;
}

.burger-menu {
  width: 30px;
  height: 25px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  cursor: pointer;
}

.burger-line {
  width: 100%;
  height: 3px;
  background-color: #333; 
  transition: background-color 0.2s ease;
}

.burger-menu.open .burger-line:nth-child(1) {
  animation: rotateLine1 0.3s forwards;
}

.burger-menu.open .burger-line:nth-child(2) {
  animation: hideLine2 0.3s forwards;
}

.burger-menu.open .burger-line:nth-child(3) {
  animation: rotateLine3 0.3s forwards;
}


@keyframes rotateLine1 {
  from {
    transform: translateY(0) rotate(0);
  }
  to {
    transform: translateY(11px) rotate(45deg);
  }
}

@keyframes hideLine2 {
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
}

@keyframes rotateLine3 {
  from {
    transform: translateY(0) rotate(0);
  }
  to {
    transform: translateY(-11px) rotate(-45deg);
  }
}


</style>