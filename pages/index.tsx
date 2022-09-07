import { useEffect, useState } from "react";
import type { NextPage } from "next";
import Head from "next/head";
import Loading from "@components/Loading";
import Layout from "@components/Layout";
import Particless from "@components/Particles";
import Intro from "@components/Intro";
import Container from "@components/Container";
// import { prefix } from "lib/config";

const Home: NextPage = () => {
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  // useEffect(() => {
  //   /* Store the element in el */
  //   let el: any = document.getElementById("tilt");

  //   /* Get the height and width of the element */
  //   const height = el.clientHeight;
  //   const width = el.clientWidth;

  //   /*
  //    * Add a listener for mousemove event
  //    * Which will trigger function 'handleMove'
  //    * On mousemove
  //    */
  //   el.addEventListener("mousemove", handleMove);

  //   /* Define function a */
  //   function handleMove(e: any) {
  //     /*
  //      * Get position of mouse cursor
  //      * With respect to the element
  //      * On mouseover
  //      */
  //     /* Store the x position */
  //     const xVal = e.layerX;
  //     /* Store the y position */
  //     const yVal = e.layerY;

  //     /*
  //      * Calculate rotation valuee along the Y-axis
  //      * Here the multiplier 20 is to
  //      * Control the rotation
  //      * You can change the value and see the results
  //      */
  //     const yRotation = 20 * ((xVal - width / 2) / width);

  //     /* Calculate the rotation along the X-axis */
  //     const xRotation = -20 * ((yVal - height / 2) / height);

  //     /* Generate string for CSS transform property */
  //     const string =
  //       "perspective(500px) scale(1) rotateX(" +
  //       xRotation +
  //       "deg) rotateY(" +
  //       yRotation +
  //       "deg)";

  //     /* Apply the calculated transformation */
  //     el.style.transform = string;
  //   }

  //   /* Add listener for mouseout event, remove the rotation */
  //   el.addEventListener("mouseout", function () {
  //     el.style.transform = "perspective(500px) scale(1) rotateX(0) rotateY(0)";
  //   });

  //   /* Add listener for mousedown event, to simulate click */
  //   el.addEventListener("mousedown", function () {
  //     el.style.transform = "perspective(500px) scale(1) rotateX(0) rotateY(0)";
  //   });

  //   /* Add listener for mouseup, simulate release of mouse click */
  //   el.addEventListener("mouseup", function () {
  //     el.style.transform = "perspective(500px) scale(1) rotateX(0) rotateY(0)";
  //   });
  // }, []);

  return (
    <Layout>
      <Head>
        <title>JS Creation</title>
      </Head>
      {isLoading && <Loading />}
      {!isLoading && (
        <Container>
          <Intro />
          <div id="tilt" className="fixed top-0 left-0 h-[150vh] w-[150vw]">
            <Particless />
          </div>
        </Container>
      )}
    </Layout>
  );
};

export default Home;
