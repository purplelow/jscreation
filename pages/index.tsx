import { useEffect, useState } from "react";
import type { NextPage } from "next";
import Head from "next/head";
import Loading from "@components/Loading";
import Layout from "@components/Layout";
import Particless from "@components/Particles";
import Intro from "@components/Intro";
import Container from "@components/Container";
import { useRecoilState } from "recoil";
import { loadState } from "recoil/atom";
// import { prefix } from "lib/config";

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
