import Link from "next/link";
import { useSetRecoilState } from "recoil";
import { loadState } from "recoil/atom";
import Footer from "./Footer";

export default function Nav() {
  const setLoad = useSetRecoilState(loadState);

  const loadRocket = () => {
    setLoad(true);
  };

  return (
    <div className="items-strat relative z-50 hidden h-full w-[40%] items-end justify-start bg-transparent pt-[2%]  text-[#34495e] transition-shadow xl:flex">
      {/* <div className="my-4 pr-4">
        <div className="h-14 w-full bg-logoWhite bg-contain bg-right bg-no-repeat"></div>
      </div> */}

      <ul
        id="hoverEffect"
        className="h-full space-y-12 text-left font-ZenTokyoZoo text-7xl uppercase"
      >
        <li>
          <Link href="/about">
            <a
              onClick={loadRocket}
              className="hoverEffect_b inline-block cursor-none"
            >
              About
            </a>
          </Link>
        </li>
        <li>
          <Link href="https://github.com/purplelow">
            <a
              target="_blank"
              className="hoverEffect_b inline-block cursor-none"
            >
              Git Hub
            </a>
          </Link>
        </li>
        <li>
          <Link href="https://spectacular-epoch-b6f.notion.site/Junseong-53462cd7b12d4f3fa3128640ccc0fc44">
            <a
              target="_blank"
              className="hoverEffect_b inline-block cursor-none"
            >
              Notion
            </a>
          </Link>
        </li>
        <li>
          <Link href="https://spectacular-epoch-b6f.notion.site/99f897ceee20425085278d86745c275f">
            <a
              target="_blank"
              className="hoverEffect_b inline-block cursor-none"
            >
              Study Log
            </a>
          </Link>
        </li>
        <li>
          <Link href="https://velog.io/@purplelow">
            <a
              target="_blank"
              className="hoverEffect_b inline-block cursor-none"
            >
              Velog
            </a>
          </Link>
        </li>
        <li>
          <Link href="http://purplelow.dothome.co.kr/">
            <a
              target="_blank"
              className="hoverEffect_b inline-block cursor-none"
            >
              Design
            </a>
          </Link>
        </li>
      </ul>

      <Footer />
    </div>
  );
}
