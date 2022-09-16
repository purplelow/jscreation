import type { AppProps } from "next/app";
import { RecoilRoot } from "recoil";

import "../styles/globals.css";
import "react-notion-x/src/styles.css";
// import "rc-dropdown/assets/index.css";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <RecoilRoot>
      <Component {...pageProps} />
    </RecoilRoot>
  );
}

export default MyApp;
