import { useRouter } from "next/router";
import LayoutProps from "interface/layout";

import { makeConsoleLogger } from "@notionhq/client/build/src/logging";
import CursorAnimation from "./Cursor";

export default function Layout({
  title,
  canGoBack,
  hasTabBar,
  children,
}: LayoutProps) {
  // const router = useRouter();

  const router = useRouter();
  const onClick = () => {
    router.back();
  };

  return (
    <>
      {/* <Meta /> */}
      <div className="flex h-screen w-screen select-none items-start justify-center">
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
        <div className="z-30 h-screen w-screen">{children}</div>
      </div>
      <CursorAnimation />
    </>
  );
}
