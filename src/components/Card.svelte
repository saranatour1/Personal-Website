<script>
  export let item; /** refers to any one of the Items in data.json*/

</script>

<div class="  shadow-lg p-6 h-full w-full m-4 rounded-2xl  mt-2 mb-2 bg-[#1D2939]">
  <hgroup class="p-4 rounded-t-xl">
    <h3 class="font-title text-[#FCFCFD] text-xl md:text-2xl pt-2 pb-2">{item}</h3>
    <p class="text-[#E4E7EC]">Card content goes here. You can add more text or any other elements inside this section.</p>

  </hgroup>

  <div class="w-full  mt-2 overflow-hidden">
    <span class="w-full h-fit flex justify-around items-center p-3">
      <p class="text-[#E4E7EC] flex-1 mt-1 flex items-center justify-around">
        <a href="#" class=" text-blue-600 font-medium hover:underline">Learn More</a>
        <button class=" bg-blue-600 text-white font-medium px-4 py-2 rounded-md hover:bg-blue-700 ">Action</button>
      </p>
    </span>
  </div>

</div>
