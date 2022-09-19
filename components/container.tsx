import Hamburger from "hamburger-react";
import Children from "interface/children";
import { useEffect, useRef } from "react";
import { useRecoilState } from "recoil";
import { navState } from "recoil/atom";
import NavM from "./Nav_m";

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
  const [isOpen, setOpen] = useRecoilState(navState);

  return (
    <div
      // id="tilt"
      // ref={tiltRef}
      className="fixed top-0 left-0 flex h-full w-full items-center justify-center bg-black p-4 xl:relative xl:bg-white"
    >
      <div className="fixed top-2 left-3 z-50 xl:hidden">
        <Hamburger
          easing="ease-in"
          size={30}
          rounded
          distance="sm"
          color="rgb(209,249,248)"
          toggled={isOpen}
          toggle={setOpen}
        />
      </div>
      {isOpen && <NavM />}
      {children}
    </div>
  );
}
