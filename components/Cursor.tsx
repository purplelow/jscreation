import { useEffect, useRef } from "react";
import { gsap, TweenMax } from "gsap";

export default function CursorAnimation() {
  const cursorRef = useRef(null);
  const cursorFollowerRef = useRef(null);

  useEffect(() => {
    const cursor: any = document.querySelector(".cursor"),
      follower: any = document.querySelector(".cursor-follower"),
      cursor_active: any = document.querySelectorAll(".hoverEffect_b");
    let posX = 0,
      posY = 0,
      mouseX = 0,
      mouseY = 0;
    // let mouseCusor: any = document.querySelector(".cursor");
    // window.addEventListener("scroll", cursor);
    // window.addEventListener("mousemove", cursor);
    // function cursor(e: any) {
    //   mouseCusor.style.left = e.pageX + "px";
    //   mouseCusor.style.top = e.pageY + "px";
    // }

    TweenMax.to({}, 0.01, {
      repeat: -1,
      onRepeat: function () {
        posX += (mouseX - posX) / 9;
        posY += (mouseY - posY) / 9;

        TweenMax.set(follower, {
          css: {
            left: posX - 12,
            top: posY - 12,
          },
        });

        TweenMax.set(cursor, {
          css: {
            left: mouseX,
            top: mouseY,
          },
        });
      },
    });
    window.addEventListener("mousemove", (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    });
    document.addEventListener("mouseenter", () => {
      // window.addEventListener -> 작동 안함 (?)
      cursor.style.cssText += "opacity: 1;";
      follower.style.cssText += "opacity: 1;";
    });
    document.addEventListener("mouseleave", () => {
      cursor.style.cssText += "opacity: 0;";
      follower.style.cssText += "opacity: 0;";
    });

    console.log(" ?? ", cursor_active);

    for (let i = 0; i < cursor_active.length; i++) {
      cursor_active[i].addEventListener("mouseenter", () => {
        cursor.style.cssText += "transform: scale(2);";
        follower.style.cssText += "transform: scale(2);";
        // cursor.addClass("active");
        // follower.addClass("active");
        // cursor.style.cssText += "transform: scale(0);";
      });
      cursor_active[i].addEventListener("mouseout", () => {
        cursor.style.cssText += "transform: scale(1);";
        follower.style.cssText += "transform: scale(1);";
      });
    }
  }, []);
  return (
    <>
      <div ref={cursorRef} className="cursor hidden lg:flex"></div>
      <div
        ref={cursorFollowerRef}
        className="cursor-follower hidden lg:flex"
      ></div>
    </>
  );
}
