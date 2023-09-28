/* eslint-disable qwik/use-method-usage */
import { useSignal, useTask$ } from "@builder.io/qwik";
import { useLocation } from "@builder.io/qwik-city";

/**
 * a custom Qwik hook to validate the route to set the result of the back button 
 * @todo make it work, and remove the other buttons -links actually- in the index of each route.
 * @returns {Object} validRoute
 */

export function useValidateRoute(){
  const loc = useLocation();
  const currLocation = useSignal<string>("");
  const validRoute = useSignal(false);
  const routes = ["/about/", "/projects/", "/contact/", "/blogs/"];
  
  useTask$(() => {
    currLocation.value = loc.url.pathname;
  });
  
  useTask$(()=>{
    validRoute.value = routes.includes(currLocation.value);
  })
  
  return {
    validRoute
  }
}


