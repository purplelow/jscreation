import Children from "interface/children";
import { useEffect, useRef } from "react";

export default function Container({ children }: Children) {
  // function useTilt(active: any) {
  //   const ref = useRef(null);

  //   useEffect(() => {
  //     if (!ref.current || !active) {
  //       return;
  //     }

  //     const state: any = {
  //       rect: undefined,
  //       mouseX: undefined,
  //       mouseY: undefined,
  //     };

  //     let el: any = ref.current;

  //     const handleMouseMove = (e: any) => {
  //       if (!el) {
  //         return;
  //       }
  //       if (!state.rect) {
  //         state.rect = el.getBoundingClientRect();
  //       }
  //       state.mouseX = e.clientX;
  //       state.mouseY = e.clientY;
  //       const px = (state.mouseX - state.rect.left) / state.rect.width;
  //       const py = (state.mouseY - state.rect.top) / state.rect.height;

  //       el.style.setProperty("--px", px);
  //       el.style.setProperty("--py", py);
  //     };

  //     el.addEventListener("mousemove", handleMouseMove);

  //     return () => {
  //       el.removeEventListener("mousemove", handleMouseMove);
  //     };
  //   }, [active]);

  //   return ref;
  // }

  // // const active = offset === 0 ? true : null;
  // const tiltRef: any = useTilt(true);
  // console.log("tiltRef", tiltRef);

  return (
    <div
      // id="tilt"
      // ref={tiltRef}
      className="flex h-full w-full items-center justify-center bg-black p-4 xl:bg-white"
    >
      {children}
    </div>
  );
}
