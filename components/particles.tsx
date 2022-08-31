import { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

export default function Particless() {
  const particlesInit = useCallback(async (engine: any) => {
    console.log(engine);
    // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
    // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
    // starting from v2 you can add only the features you need reducing the bundle size
    await loadFull(engine);
  }, []);

  const particlesLoaded = useCallback(async (container: any) => {
    await console.log(container);
  }, []);
  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      loaded={particlesLoaded}
      options={{
        particles: {
          number: {
            value: 40,
            density: {
              enable: true,
              value_area: 400,
            },
          },
          // "color": {
          //     "value": "#541235"
          // },
          shape: {
            type: "star",
            stroke: {
              width: 1,
              color: "#000000",
              opacity: 0.1,
            },
            polygon: {
              nb_sides: 6,
            },
          },
          opacity: {
            value: 0.6,
            random: true,
            anim: {
              enable: false,
              speed: 2,
              opacity_min: 0.9,
              sync: false,
            },
          },
          size: {
            value: 1,
            random: true,
            anim: {
              enable: true,
              speed: 1,
              size_min: 0.1,
              sync: false,
            },
          },
          line_linked: {
            enable: true,
            distance: 110,
            color: "#52b1c8",
            opacity: 0.6,
            width: 1,
          },
          move: {
            enable: true,
            speed: 2,
            direction: "top-right",
            random: false,
            straight: false,
            out_mode: "out",
            // bounce: false,
            attract: {
              enable: false,
              rotateX: 600,
              rotateY: 1200,
            },
          },
        },
        interactivity: {
          detect_on: "canvas",
          events: {
            onhover: {
              enable: true,
              mode: "grab",
            },
            onclick: {
              enable: true,
              mode: "repulse",
            },
            resize: true,
          },
          modes: {
            grab: {
              distance: 200,
              line_linked: {
                opacity: 1,
              },
            },
            bubble: {
              distance: 400,
              size: 40,
              duration: 2,
              opacity: 8,
              speed: 3,
            },
            repulse: {
              distance: 200,
              duration: 0.4,
            },
            push: {
              particles_nb: 4,
            },
            remove: {
              particles_nb: 2,
            },
          },
        },
        retina_detect: true,
      }}
    />
  );
}
