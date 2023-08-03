<script>
  import { onMount } from "svelte";

  const funText = [
    'a Full-Stack Developer ...',
    'an Electrical Engineer ...',
    '24 years old ...',
    'Perfectionist ...',
    'Reader ...',
    'Food Lover ...',
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

  onMount(() => {
    setInterval(changeIdx,10000);
  })
</script>

<span class="font-semibold font-serif text-blue-950">
  {textToDisplay}  
</span>

<style>
  span:hover {
    text-shadow: 1px 1px 2px rgba(255, 215, 0, 0.8);
  }
</style>
