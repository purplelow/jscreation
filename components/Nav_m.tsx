import Link from "next/link";
import { useRecoilState, useSetRecoilState } from "recoil";
import { loadState, navState } from "recoil/atom";
import Footer from "./Footer";

export default function NavM() {
  const setOpen = useSetRecoilState(navState);
  const setLoad = useSetRecoilState(loadState);

  const navClose = () => {
    setOpen(false);
    setLoad(true);
  };

  return (
    <div className="fixed z-40 h-full w-full items-end bg-[#0ca987b8] text-white transition-shadow xl:hidden">
      <div className="my-4 pr-4">
        <div className="h-14 w-full bg-logoWhite bg-contain bg-right bg-no-repeat"></div>
      </div>
      <div className="items-strat flex h-full justify-center pt-20">
        <ul className="space-y-12 text-center font-BungeeShade text-4xl">
          {/* <li>
            <Link href="/about">
              <a onClick={navClose} className="">
                About
              </a>
            </Link>
          </li> */}
          <li>
            <Link href="https://github.com/purplelow">
              <a target="_blank" className="">
                Git Hub
              </a>
            </Link>
          </li>
          <li>
            <Link href="https://spectacular-epoch-b6f.notion.site/Hello-Junseong-Lee-53462cd7b12d4f3fa3128640ccc0fc44">
              <a target="_blank" className="">
                Notion
              </a>
            </Link>
          </li>
          <li>
            <Link href="https://spectacular-epoch-b6f.notion.site/99f897ceee20425085278d86745c275f">
              <a target="_blank" className="">
                Study Log
              </a>
            </Link>
          </li>
          <li>
            <Link href="https://velog.io/@purplelow">
              <a target="_blank" className="">
                Velog
              </a>
            </Link>
          </li>
        </ul>
      </div>
      <Footer />
    </div>
  );
}
