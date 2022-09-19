import { NextPage } from "next";

import { ExtendedRecordMap } from "notion-types";

import * as notion from "../lib/notion";
import { NotionPage } from "../components/NotionPage";
import { rootNotionPageID, rootDomain } from "../lib/config";
import Layout from "@components/Layout";
import Particless from "@components/Particles";

export const getStaticProps = async () => {
  const pageId = rootNotionPageID;
  const recordMap = await notion.getPage(pageId);

  return {
    props: {
      recordMap,
    },
    revalidate: 10,
  };
};

const About = ({ recordMap }: { recordMap: ExtendedRecordMap }) => {
  return (
    <Layout canGoBack>
      {/* <div className="fixed top-0 left-0 z-[9998] h-screen w-screen opacity-0"></div> */}

      <div className="relative z-10 w-full">
        <NotionPage
          recordMap={recordMap}
          rootDomain={rootDomain}
          rootPageId={rootNotionPageID}
        />
      </div>
      <Particless />
    </Layout>
  );
};

export default About;
