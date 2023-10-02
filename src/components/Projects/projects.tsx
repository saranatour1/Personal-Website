import { component$, useSignal, useTask$ } from "@builder.io/qwik";
import all from "~/data/data.json";
import type { SingleProject } from "../model";
import { Card } from "../Card/card";


export const Projects = component$(() => {
  // const screenSize = useScreenWidth();
  
  
  const items = useSignal<SingleProject[]|undefined>(undefined)

  useTask$( () => {
    // console.log("Runs once when the component mounts in the server OR client.");

    items.value = all[0].projects;
      
    // console.log(screenSize.value)

  });



  return <>
  {items.value?.map((item ,key)=> <div class="min-w-screen" key={key}><Card  project={item}/></div> )}
  </> 
    

});
