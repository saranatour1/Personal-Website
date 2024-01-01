<script>
    const routes = [['/about', "About"], ["/projects", "Projects & Skills"], ["/extra","Extra"]]
</script>

<nav class=" bg-white flex items-center justify-around dark:bg-gray-900  w-full   border-b border-gray-200 dark:border-gray-600 h-16 rounded-md my-5  transition-all backdrop-blur-sm">
    {#each routes as [route, name] }
    <a href={route} class="text-lg text-gray-900 text-pretty font-semibold block py-2 px-3  rounded md:bg-transparent md:p-0 md:dark:text-blue-500 transition hover:border-t-2 hover:border-b-2 hover:border-green-500">{name}</a>
    {/each}
</nav>
