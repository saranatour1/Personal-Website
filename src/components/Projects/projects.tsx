import { component$, useSignal, useTask$ } from "@builder.io/qwik";
import all from "~/data/data.json";
import type { SingleProject } from "../model";
import { Card } from "../Card/card";





export const Projects = component$(() => {
  
  const items = useSignal<SingleProject[]|undefined>(undefined)

  useTask$( () => {
    // console.log("Runs once when the component mounts in the server OR client.");

    items.value = all[0].projects;
    // console.log(items.value);
  });

  return <>
  {items.value?.map((item ,key)=> <div class="min-w-full" key={key}><Card  project={item}/></div> )}
  </> 
    

});
