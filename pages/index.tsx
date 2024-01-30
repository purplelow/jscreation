import { useEffect, useState } from "react";
import type { NextPage } from "next";
import Head from "next/head";
import Loading from "@components/loading";
import Layout from "@components/layout";
import Particless from "@components/particles";
import Intro from "@components/intro";
import Container from "@components/container";
import { useRecoilState } from "recoil";
import { loadState } from "recoil/atom";
import { prefix } from "lib/config";

const Home: NextPage = () => {
  const [isLoading, setIsLoading] = useRecoilState(loadState);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 800);
    return () => clearTimeout(timer);
  }, []);

  return (
    <Layout>
      <Head>
        <title>JS Creation</title>
      </Head>
      {isLoading && <Loading />}
      {!isLoading && (
        <Container>
          <Intro />
          <Particless />
        </Container>
      )}
    </Layout>
  );
};

export default Home;
