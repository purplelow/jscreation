import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import dynamic from "next/dynamic";
import { useRouter } from "next/router";

import { NotionRenderer } from "react-notion-x";
import { ExtendedRecordMap } from "notion-types";
import { getPageTitle } from "notion-utils";

import Loading from "./Loading";
import "react-notion-x/src/styles.css";
import { lazy, useEffect, useState } from "react";

// =======================================
// dynamic imports for optional components
// =======================================

const Code = lazy((): any => {
  import("react-notion-x/build/third-party/code")
    .then(async (m) => {
      await Promise.all([
        import("prismjs/components/prism-markup-templating.js"),
        import("prismjs/components/prism-markup.js"),
        import("prismjs/components/prism-bash.js"),
        import("prismjs/components/prism-c.js"),
        import("prismjs/components/prism-cpp.js"),
        import("prismjs/components/prism-csharp.js"),
        import("prismjs/components/prism-docker.js"),
        import("prismjs/components/prism-java.js"),
        import("prismjs/components/prism-js-templates.js"),
        import("prismjs/components/prism-coffeescript.js"),
        import("prismjs/components/prism-diff.js"),
        import("prismjs/components/prism-git.js"),
        import("prismjs/components/prism-go.js"),
        import("prismjs/components/prism-graphql.js"),
        import("prismjs/components/prism-handlebars.js"),
        import("prismjs/components/prism-less.js"),
        import("prismjs/components/prism-makefile.js"),
        import("prismjs/components/prism-markdown.js"),
        import("prismjs/components/prism-objectivec.js"),
        import("prismjs/components/prism-ocaml.js"),
        import("prismjs/components/prism-python.js"),
        import("prismjs/components/prism-reason.js"),
        import("prismjs/components/prism-rust.js"),
        import("prismjs/components/prism-sass.js"),
        import("prismjs/components/prism-scss.js"),
        import("prismjs/components/prism-solidity.js"),
        import("prismjs/components/prism-sql.js"),
        import("prismjs/components/prism-stylus.js"),
        import("prismjs/components/prism-swift.js"),
        import("prismjs/components/prism-wasm.js"),
        import("prismjs/components/prism-yaml.js"),
      ]);
      return m.Code;
    })
    .catch((e) => console.log(e));
});

const Collection = dynamic(() =>
  import("react-notion-x/build/third-party/collection")
    .then(async (m) => m.Collection)
    .catch((e) => console.log(e))
);

// const Equation = dynamic(() =>
//   import("react-notion-x/build/third-party/equation")
//     .then((m) => m.Equation)
//     .catch((e) => console.log(e))
// );

// const Pdf = dynamic(
//   () =>
//     import("react-notion-x/build/third-party/pdf")
//       .then((m) => m.Pdf)
//       .catch((e) => console.log(e)),
//   { ssr: false }
// );

// const Modal = dynamic(
//   () =>
//     import("react-notion-x/build/third-party/modal")
//       .then((m) => m.Modal)
//       .catch((e) => console.log(e)),
//   { ssr: false }
// );

export const NotionPage = ({
  recordMap,
  rootPageId,
  rootDomain,
}: {
  recordMap: ExtendedRecordMap;
  rootPageId?: string;
  rootDomain?: any;
}) => {
  const router = useRouter();

  if (router.isFallback) {
    return <Loading />;
  }

  if (!recordMap) {
    return null;
  }

  const title = getPageTitle(recordMap);
  // console.log("title, recordMap :: ", title, recordMap);

  // if (typeof window !== "undefined") {
  const keys = Object.keys(recordMap?.block || {});
  const block = recordMap?.block?.[keys[0]]?.value;
  // const [g, setG]: any = useState(null);
  // useEffect(() => {
  //   const g = window as any;
  //   g.recordMap = recordMap;
  //   g.block = block;
  //   // setG(g);
  // }, []);
  // }

  const socialDescription = "React Notion X Test ==== JSCreation";

  return (
    <>
      <Head>
        {socialDescription && (
          <>
            <meta name="description" content={socialDescription} />
            <meta property="og:description" content={socialDescription} />
          </>
        )}
        <title>{title}</title>
      </Head>
      <NotionRenderer
        recordMap={recordMap}
        fullPage={true}
        darkMode={false}
        rootDomain={rootDomain}
        rootPageId={rootPageId}
        previewImages={false}
        components={{
          nextImage: Image,
          nextLink: Link,
          Code,
          Collection,
          // Equation,
          // Pdf,
          // Modal,
        }}
      />
    </>
  );
};
