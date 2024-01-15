'use client'
import { routes } from "@/Constants";
import Link from "next/link";
import { usePathname } from 'next/navigation'

function NavigationBar() {
  const pathName = usePathname();
  return (
    <nav className="w-full grid h-full max-w-[31.75rem] max-h-14 grid-cols-5 grid-rows-1 self-center my-4 bg-transparent backdrop-blur-md ">
      {routes.map(([routeName, path], index) => (
        <Link key={index} href={path} className={`text-center text-green-950 text-base flex items-center justify-center gap-2 capitalize w-full h-full max-w-[6.3125rem]  max-h-[3rem] rounded-full  transition-colors duration-150 origin-left ${ path === pathName ? 'bg-green-950/10 origin-center':'' }`} >
          {routeName}
          <span className={`grid place-content-center leading-[18px] text-[calc(.875rem-2px)] justify-center items-center border border-gray-900 w-6 h-6 rounded-md ml-2 ${pathName === path ? 'opacity-100':'opacity-0'} transition-opacity`}>\</span>
        </Link>
      ))}
    </nav>
  );
}

export default NavigationBar;
