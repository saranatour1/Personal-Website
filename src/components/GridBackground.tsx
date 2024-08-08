import type { ReactNode } from "react";

interface Props {
  children: ReactNode;
}
export function GridBackground({ children }: Props) {
  return (
    <div className="h-full min-h-screen w-full max-w-full dark:bg-black bg-white-1 dark:bg-grid-white/[0.2] bg-grid-black/[0.2] absolute flex items-center justify-center top-0 left-0 -z-10">
      {/* Radial gradient for the container to give a faded look */}
      <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
      {children}
    </div>
  );
}
