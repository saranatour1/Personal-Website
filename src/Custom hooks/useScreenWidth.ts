import { useSignal , $, useOnWindow } from "@builder.io/qwik";

export function useScreenWidth() {
  const innerWidth = useSignal<number>();
  useOnWindow(
    'resize',
    $((e) => {
      innerWidth.value = e.target.innerWidth;
    })
  );
  return innerWidth;
}