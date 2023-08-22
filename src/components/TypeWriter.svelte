<script>
  import { onMount, onDestroy } from "svelte";
  import Typewriter from 'svelte-typewriter'

  const funText = [
    'Sara Natour',
    'a Full-Stack Developer ...',
    'an Electrical Engineer ...',
    '24 years old ...',
    'a Perfectionist ...',
    'a Reader ...',
    'a Food Lover ...',
    'a Writer..',
    'a coffee Lover',
    'a Passionate Learner ...',
    'a Geek ...',
    'What else?',
  ];

  let i = 0;
  let textToDisplay = funText[i];
  let requestId = null;
  let lastTimestamp = 0;

  const updateText = (timestamp) => {
    if (!lastTimestamp) {
      lastTimestamp = timestamp;
    }
    const elapsed = timestamp - lastTimestamp;
    if (elapsed >= 3000) { 
      i = (i + 1) % funText.length;
      textToDisplay = funText[i];
      lastTimestamp = timestamp;
    }
    requestId = requestAnimationFrame(updateText);
  };

  onMount(() => {
    console.log("I happened ")
    requestId = requestAnimationFrame(updateText);
  });

  /**
   *  a function that we can use to decide if a component or an HTML page is unrendered or unmounted.
  */
  onDestroy(() => {
    cancelAnimationFrame(requestId);
    console.log("I am Destroyed ")
  });

</script>




<Typewriter  on:done={()=> updateText()}>
  <span class="font-semibold font-serif text-blue-950 typewriter indent-2 w-min" >
    {textToDisplay}  
  </span>
  
</Typewriter>


<style>
  span:hover {
    text-shadow: 1px 1px 2px rgba(255, 215, 0, 0.8);
  }

  /* source */
  .typewriter {
  overflow: hidden; /* Ensures the content is not revealed until the animation */
  border-right: .15em solid orange; /* The typwriter cursor */
  white-space: nowrap; /* Keeps the content on a single line */
  margin: 0 auto; /* Gives that scrolling effect as the typing happens */
  letter-spacing: .15em; /* Adjust as needed */
  animation: 
    typing 3.5s steps(40, end),
    blink-caret .75s step-end infinite;
}

/* The typing effect */
@keyframes typing {
  from { width: 0 }
  to { width: 100% }
}

/* The typewriter cursor effect */
@keyframes blink-caret {
  from, to { border-color: transparent }
  50% { border-color: orange; }
}
</style>
