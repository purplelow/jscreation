import { useState } from "react";
import { useRouter } from "next/router";
import { Sling as Hamburger } from "hamburger-react";
import LayoutProps from "interface/layout";

export default function Layout({
  title,
  canGoBack,
  hasTabBar,
  children,
}: LayoutProps) {
  const router = useRouter();
  // const [isOpen, setOpen] = useState(false);
  return (
    <div className="flex h-[calc(100vh-env(safe-area-inset-bottom))] w-screen">
      <div className="fixed top-2 left-3 z-50">
        <Hamburger
          easing="ease-in"
          size={30}
          color="rgb(209,249,248)"
          onToggle={(toggled) => {
            if (toggled) {
              // open
              return <div className="h-full w-full bg-white">asb</div>;
            } else {
              // closed
            }
          }}
        />
      </div>

      {children}
    </div>
  );
}
