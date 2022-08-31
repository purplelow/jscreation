import { useEffect, useState } from "react";
import type { NextPage } from "next";
import Head from "next/head";
import Loading from "@components/loading";
import Layout from "@components/layout";
import Particless from "@components/particles";
import Intro from "@components/intro";
import Container from "@components/container";

const Home: NextPage = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <Layout>
      <Head>
        <title>JS Creation - Junseong's portfolio</title>
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
