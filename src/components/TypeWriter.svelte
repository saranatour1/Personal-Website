<script>
  import { onDestroy, onMount } from "svelte";

  const funText = [
    'Sara Natour',
    'a Full-Stack Developer ...',
    'an Electrical Engineer ...',
    '24 years old ...',
    'a Perfectionist ...',
    'a Reader ...',
    'a Food Lover ...',
    'a Writer..',
    'coffee Lover',
    'Passionate Learner ...',
    'a Geek ...',
    'What else?',
  ];

  let textToDisplay = funText[0];
  let idx = 0;

  const changeIdx = () => {
    // textToDisplay = funText[idx];

    if (idx + 1 === funText.length) {
      idx = 0;
    } else {
      idx++;
    }
    TypeWriterEffect(funText[idx]);
  }
  const waitInterval = 1000;



const TypeWriterEffect = (textToAdd) => {
  let i = 0;
  const interval = setInterval(() => {
    textToDisplay = textToAdd.slice(0, i + 1);
    i++;
    if (i === textToAdd.length) {
      setTimeout(() => backTrackingEffect(textToAdd), waitInterval); 
      clearInterval(interval);
    }
  }, 100);
}

const backTrackingEffect = (textToDelete) => {
  let i = textToDelete.length;
  const interval = setInterval(() => {
    textToDisplay = textToDelete.substring(0, i);
    i--;
    if (i === -1) {
      clearInterval(interval);
    }
  }, 100); 
}
  let intervalId;
  onMount(()=>{
    intervalId = setInterval(changeIdx, 7000);
  })
  onDestroy(() => {
  clearInterval(intervalId);
});

</script>

<span class="font-semibold font-serif text-blue-950 typewriter indent-2 w-min">
  {textToDisplay}  
</span>

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
