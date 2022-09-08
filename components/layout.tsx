import { useEffect } from "react";
import { useRouter } from "next/router";
import { Sling as Hamburger } from "hamburger-react";
import LayoutProps from "interface/layout";
import NavM from "./Nav_m";
import { useRecoilState } from "recoil";
import { navState } from "recoil/atom";

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
    let mouseCusor: any = document.querySelector(".cursor");
    window.addEventListener("scroll", cursor);
    window.addEventListener("mousemove", cursor);

    function cursor(e: any) {
      mouseCusor.style.left = e.pageX + "px";
      mouseCusor.style.top = e.pageY + "px";
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
            className="fixed top-1 right-4 z-[9999] flex items-center"
          >
            <span>Home</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-10 w-10"
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
    </>
  );
}
