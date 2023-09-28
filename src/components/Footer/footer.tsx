import { component$, useSignal } from '@builder.io/qwik';
import { PageLink } from '../Page Link/page-link';

export const Footer = component$(() => {
  const currentYear = useSignal(new Date().getFullYear());
  return (
  <footer class="w-full h-auto flex flex-col items-center justify-center  text-center bg-inherit mt-auto">
    <small class="w-full flex justify-center items-center tracking-wide">
    Made With ♡ <span class="mr-1 ml-1">&</span> <PageLink route='https://qwik.builder.io/' title='qwik'/> </small> 
    <small>
    © All rights Reserved  to Sara Natour <span class="text-center" id="currentYear">{currentYear}</span>
    </small>


    </footer>)
});