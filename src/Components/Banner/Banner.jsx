import "./Banner.css";
import BannerImg from "../../assets/black&white.png";
import { TypeAnimation } from "react-type-animation";
import { FaDownload } from "react-icons/fa";

import { useCallback } from "react";
import Particles from "react-tsparticles";
//import { loadFull } from "tsparticles"; // if you are going to use `loadFull`, install the "tsparticles" package too.
import { loadSlim } from "tsparticles-slim";
const Banner = () => {
  const particlesInit = useCallback(async (engine) => {
    console.log(engine);
    // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
    // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
    // starting from v2 you can add only the features you need reducing the bundle size
    //await loadFull(engine);
    await loadSlim(engine);
  }, []);

  const particlesLoaded = useCallback(async (container) => {
    await console.log(container);
  }, []);
  return (
    <div className="py-10 h-[600px] relative">
      <div className="avatar flex justify-center mx-auto">
        <div className="w-44 rounded-full border bg-white border-gray-600 animated-ring">
          <img src={BannerImg} alt="Avatar" />
        </div>
      </div>
      <div className="text-center mt-8">
        <h1 className="my-5 text-black font-bold text-4xl">Md Fajle Rabby</h1>
        <div>
          <TypeAnimation
            className=" text-gray-600 font-semibold"
            preRenderFirstString={true}
            sequence={[
              500,
              "Front End Developer",
              1000,
              "MERN Stack Enthusiast",
              1000,
            ]}
            speed={50}
            style={{ fontSize: "20px" }}
            repeat={Infinity}
          />
        </div>
        <h5 className="my-5  font-semibold text-gray-500 text-xl">
          I am Currently studying
        </h5>
        <button className="bg-gray-800 text-white px-8 py-4 my-5  text-lg rounded-md">
          <a
            href="../../assets/Resume/Assignment-02.pdf"
            download="Assignment-02.pdf"
          >
            <div className="flex justify-center items-center gap-2">
              <FaDownload /> Download Resume
            </div>
          </a>
        </button>
      </div>
      <Particles
        id="tsparticles"
        init={particlesInit}
        loaded={particlesLoaded}
        className="h-[600px] top-0 absolute"
        options={{
          background: {
            color: {
              value: "transparent",
            },
          },
          fpsLimit: 120,
          interactivity: {
            events: {
              onClick: {
                enable: true,
                mode: "push",
              },
              onHover: {
                enable: true,
                mode: "repulse",
              },
              resize: true,
            },
            modes: {
              push: {
                quantity: 4,
              },
              repulse: {
                distance: 100,
                duration: 0.4,
              },
            },
          },
          fullScreen: {
            enable: false,
            zIndex: 0,
          },
          particles: {
            color: {
              value: "#B3B7BF",
            },
            links: {
              color: "#B3B7BF",
              distance: 200,
              enable: true,
              opacity: 0.5,
              width: 1,
            },
            move: {
              direction: "none",
              enable: true,
              outModes: {
                default: "bounce",
              },
              random: false,
              speed: 2,
              straight: false,
            },
            number: {
              density: {
                enable: true,
                area: 800,
              },
              value: 80,
            },
            opacity: {
              value: 0.5,
            },
            shape: {
              type: "circle",
            },
            size: {
              value: { min: 1, max: 5 },
            },
          },
          detectRetina: true,
        }}
      />
    </div>
  );
};

export default Banner;
