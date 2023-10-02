import { component$ } from '@builder.io/qwik';

export const CustomOverlay = component$(() => {
  return <div class=" absolute w-full h-full top-0 left-0 bg-blend-overlay  bg-gray-950  opacity-20 grid place-content-center">
    <p class=" italic text-base text-red-600 text-center">
      For screen sizes under 450px or 4.69 inches, Please click on the live button for better View
    </p>
    </div>
});