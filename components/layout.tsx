import { useEffect } from "react";
import { useRouter } from "next/router";
import { Sling as Hamburger } from "hamburger-react";
import LayoutProps from "interface/layout";
import NavM from "./Nav_m";
import { useRecoilState } from "recoil";
import { navState } from "recoil/atom";

import { gsap, TweenMax } from "gsap";
import { makeConsoleLogger } from "@notionhq/client/build/src/logging";

export default function Layout({
  title,
  canGoBack,
  hasTabBar,
  children,
}: LayoutProps) {
  // const router = useRouter();
  const [isOpen, setOpen] = useRecoilState(navState);
  // const [isOpen, setOpen] = useState(false);

  useEffect(() => {
    // let mouseCusor: any = document.querySelector(".cursor");
    // window.addEventListener("scroll", cursor);
    // window.addEventListener("mousemove", cursor);
    // function cursor(e: any) {
    //   mouseCusor.style.left = e.pageX + "px";
    //   mouseCusor.style.top = e.pageY + "px";
    // }
    let cursor: any = document.querySelector(".cursor"),
      follower: any = document.querySelector(".cursor-follower"),
      cursor_active: any = document.querySelectorAll(".hoverEffect_b"),
      posX = 0,
      posY = 0,
      mouseX = 0,
      mouseY = 0;

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

    window.addEventListener("mousemove", function (e) {
      mouseX = e.clientX;
      mouseY = e.clientY;
    });
    document.addEventListener("mouseenter", function () {
      // window.addEventListener -> 작동 안함 (?)
      cursor.style.cssText += "opacity: 1;";
      follower.style.cssText += "opacity: 1;";
    });
    document.addEventListener("mouseleave", function () {
      cursor.style.cssText += "opacity: 0;";
      follower.style.cssText += "opacity: 0;";
    });

    for (let i = 0; i < cursor_active.length; i++) {
      cursor_active[i].addEventListener("mouseover", function () {
        cursor.addClass("active");
        follower.addClass("active");
        console.log("클래스 추가");
      });
      cursor_active[i].addEventListener("mouseout", function () {
        cursor.removeClass("active");
        follower.removeClass("active");
        console.log("클래스 제거");
      });
    }
  }, []);

  const router = useRouter();
  const onClick = () => {
    router.back();
  };

  return (
    <>
      {/* <Meta /> */}
      <div className="flex h-[calc(100vh-env(safe-area-inset-bottom))] w-screen select-none items-start justify-center">
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

        {canGoBack ? (
          <button
            onClick={onClick}
            className="fixed top-[6px] right-3 z-[9999] flex items-center"
          >
            <span>Home</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-9 w-9"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>
        ) : null}

        {children}
      </div>
      <div className="cursor"></div>
      <div className="cursor-follower"></div>
    </>
  );
}
