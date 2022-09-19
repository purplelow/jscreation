import { useEffect } from "react";
import Nav from "./Nav";

export default function Intro() {
  return (
    <div className="relative z-50 xl:flex xl:h-full xl:w-full xl:items-start xl:justify-start">
      <div className="xl:flex xl:h-[40%] xl:w-[60%] xl:items-center xl:justify-center">
        <h1 className="hidden space-x-1 text-left font-BlackOpsOne text-4xl text-[rgb(209,249,248)] xl:flex xl:space-x-6 xl:text-7xl xl:text-[#34495e]">
          <div className="flipInY">J</div>
          <div className="flipInY">S</div>
          <div className="flipInY">&nbsp;</div>
          <div className="flipInY">C</div>
          <div className="flipInY">r</div>
          <div className="flipInY">e</div>
          <div className="flipInY">a</div>
          <div className="flipInY">t</div>
          <div className="flipInY">i</div>
          <div className="flipInY">o</div>
          <div className="flipInY">n</div>
        </h1>
        <h2 className="flex text-left font-BlackOpsOne text-4xl tracking-widest text-[rgb(209,249,248)] xl:hidden xl:text-[#34495e]">
          JS Creation
        </h2>
      </div>
      <Nav />
    </div>
  );
}
