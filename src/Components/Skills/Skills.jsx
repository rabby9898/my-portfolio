import { useContext } from "react";
import {
  FaBootstrap,
  FaCss3,
  FaGit,
  FaHtml5,
  FaJs,
  FaNodeJs,
  FaReact,
} from "react-icons/fa";
import {
  SiExpress,
  SiFigma,
  SiFirebase,
  SiGithub,
  SiMongodb,
  SiMongoosedotws,
  SiTailwindcss,
} from "react-icons/si";
import { ModeContext } from "../../Provider/DarkModeProvider";
const Skills = () => {
  const { isDarkMode } = useContext(ModeContext);
  return (
    <div
      data-aos="fade-up"
      data-aos-duration="3000"
      id="skills"
      className={`${
        isDarkMode && "dark"
      } w-full md:w-[800px] lg:w-[1280px] px-5 md:px-10 lg:px-20 py-10 mx-auto`}
    >
      <h1 className="text-3xl md:text-6xl text-gray-700 mx-auto text-left md:text-center py-5 md:py-20 dark:text-white">
        My Top{" "}
        <span className="font-light text-black dark:text-blue-400">Skills</span>
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-1 md:gap-2 lg:gap-8 ">
        <div className="group w-full md:w-[300px] h-[80px] rounded-sm border-[0.5px] border-black bg-white hover:bg-[#f3f4f6]">
          <div className="relative flex w-full  flex-col rounded-xl bg-transparent bg-clip-border text-gray-700 shadow-none">
            <div className="relative gap-4 pt-0 pb-8 mx-0 overflow-hidden text-gray-700 bg-transparent shadow-none rounded-xl bg-clip-border">
              <div className="flex w-full items-center mt-5 gap-2 pl-3 text-black">
                <FaHtml5 className="text-4xl group-hover:text-[#dd4b25]"></FaHtml5>
                <h5 className="block font-sans text-2xl antialiased font-semibold leading-snug tracking-normal">
                  Html
                </h5>
              </div>
            </div>
          </div>
        </div>

        <div className="group w-full md:w-[300px] h-[80px] rounded-sm border-[0.5px] border-black bg-white hover:bg-[#f3f4f6]">
          <div className="relative flex w-full  flex-col rounded-xl bg-transparent bg-clip-border text-gray-700 shadow-none">
            <div className="relative gap-4 pt-0 pb-8 mx-0 overflow-hidden text-gray-700 bg-transparent shadow-none rounded-xl bg-clip-border">
              <div className="flex w-full items-center mt-5 gap-2 pl-3 text-black">
                <FaCss3 className="text-4xl group-hover:text-[#254bdd]"></FaCss3>
                <h5 className="block font-sans text-xl antialiased font-semibold leading-snug tracking-normal">
                  CSS3
                </h5>
              </div>
            </div>
          </div>
        </div>

        <div className="group w-full md:w-[300px] h-[80px] rounded-sm border-[0.5px] border-black bg-white hover:bg-[#f3f4f6]">
          <div className="relative flex w-full  flex-col rounded-xl bg-transparent bg-clip-border text-gray-700 shadow-none">
            <div className="relative gap-4 pt-0 pb-8 mx-0 overflow-hidden text-gray-700 bg-transparent shadow-none rounded-xl bg-clip-border">
              <div className="flex w-full items-center mt-5 gap-2 pl-3 text-black">
                <FaJs className="text-4xl group-hover:text-[#efd81d]"></FaJs>
                <h5 className="block font-sans text-xl antialiased font-semibold leading-snug tracking-normal">
                  Javascript
                </h5>
              </div>
            </div>
          </div>
        </div>

        <div className="group w-full md:w-[300px] h-[80px] rounded-sm border-[0.5px] border-black bg-white hover:bg-[#f3f4f6]">
          <div className="relative flex w-full  flex-col rounded-xl bg-transparent bg-clip-border text-gray-700 shadow-none">
            <div className="relative gap-4 pt-0 pb-8 mx-0 overflow-hidden text-gray-700 bg-transparent shadow-none rounded-xl bg-clip-border">
              <div className="flex w-full items-center mt-5 gap-2 pl-3 text-black">
                <SiTailwindcss className="text-4xl group-hover:text-[#36b7f0]" />
                <h5 className="block font-sans text-2xl antialiased font-semibold leading-snug tracking-normal">
                  TailwindCss
                </h5>
              </div>
            </div>
          </div>
        </div>

        <div className="group w-full md:w-[300px] h-[80px] rounded-sm border-[0.5px] border-black bg-white hover:bg-[#f3f4f6]">
          <div className="relative flex w-full  flex-col rounded-xl bg-transparent bg-clip-border text-gray-700 shadow-none">
            <div className="relative gap-4 pt-0 pb-8 mx-0 overflow-hidden text-gray-700 bg-transparent shadow-none rounded-xl bg-clip-border">
              <div className="flex w-full items-center mt-5 gap-2 pl-3 text-black">
                <FaBootstrap className="text-4xl group-hover:text-[#7710f1]"></FaBootstrap>
                <h5 className="block font-sans text-xl antialiased font-semibold leading-snug tracking-normal">
                  Bootstrap
                </h5>
              </div>
            </div>
          </div>
        </div>
        <div className="group w-full md:w-[300px] h-[80px] rounded-sm border-[0.5px] border-black bg-white hover:bg-[#f3f4f6]">
          <div className="relative flex w-full  flex-col rounded-xl bg-transparent bg-clip-border text-gray-700 shadow-none">
            <div className="relative gap-4 pt-0 pb-8 mx-0 overflow-hidden text-gray-700 bg-transparent shadow-none rounded-xl bg-clip-border">
              <div className="flex w-full items-center mt-5 gap-2 pl-3 text-black">
                <FaReact className="text-4xl group-hover:text-[#5ed3f3]"></FaReact>
                <h5 className="block font-sans text-xl antialiased font-semibold leading-snug tracking-normal">
                  ReactJs
                </h5>
              </div>
            </div>
          </div>
        </div>

        <div className="group w-full md:w-[300px] h-[80px] rounded-sm border-[0.5px] border-black bg-white hover:bg-[#f3f4f6]">
          <div className="relative flex w-full  flex-col rounded-xl bg-transparent bg-clip-border text-gray-700 shadow-none">
            <div className="relative gap-4 pt-0 pb-8 mx-0 overflow-hidden text-gray-700 bg-transparent shadow-none rounded-xl bg-clip-border">
              <div className="flex w-full items-center mt-5 gap-2 pl-3 text-black">
                <FaNodeJs className="text-4xl group-hover:text-[#7fc728]"></FaNodeJs>
                <h5 className="block font-sans text-xl antialiased font-semibold leading-snug tracking-normal">
                  NodeJs
                </h5>
              </div>
            </div>
          </div>
        </div>

        <div className="group w-full md:w-[300px] h-[80px] rounded-sm border-[0.5px] border-black bg-white hover:bg-[#f3f4f6]">
          <div className="relative flex w-full  flex-col rounded-xl bg-transparent bg-clip-border text-gray-700 shadow-none">
            <div className="relative gap-4 pt-0 pb-8 mx-0 overflow-hidden text-gray-700 bg-transparent shadow-none rounded-xl bg-clip-border">
              <div className="flex w-full items-center mt-5 gap-2 pl-3 text-black">
                <SiExpress className="text-4xl" />
                <h5 className="block font-sans text-xl antialiased font-semibold leading-snug tracking-normal">
                  ExpressJs
                </h5>
              </div>
            </div>
          </div>
        </div>

        <div className="group w-full md:w-[300px] h-[80px] rounded-sm border-[0.5px] border-black bg-white hover:bg-[#f3f4f6]">
          <div className="relative flex w-full  flex-col rounded-xl bg-transparent bg-clip-border text-gray-700 shadow-none">
            <div className="relative gap-4 pt-0 pb-8 mx-0 overflow-hidden text-gray-700 bg-transparent shadow-none rounded-xl bg-clip-border">
              <div className="flex w-full items-center mt-5 gap-2 pl-3 text-black">
                <SiMongodb className="text-4xl group-hover:text-[#118d4d]"></SiMongodb>
                <h5 className="block font-sans text-xl antialiased font-semibold leading-snug tracking-normal">
                  MongoDB
                </h5>
              </div>
            </div>
          </div>
        </div>

        <div className="group w-full md:w-[300px] h-[80px] rounded-sm border-[0.5px] border-black bg-white hover:bg-[#f3f4f6]">
          <div className="relative flex w-full  flex-col rounded-xl bg-transparent bg-clip-border text-gray-700 shadow-none">
            <div className="relative gap-4 pt-0 pb-8 mx-0 overflow-hidden text-gray-700 bg-transparent shadow-none rounded-xl bg-clip-border">
              <div className="flex w-full items-center mt-5 gap-2 pl-3 text-black">
                <SiMongoosedotws className="text-4xl group-hover:text-[#840000]"></SiMongoosedotws>
                <h5 className="block font-sans text-xl antialiased font-semibold leading-snug tracking-normal">
                  Mongoose
                </h5>
              </div>
            </div>
          </div>
        </div>

        <div className="group w-full md:w-[300px] h-[80px] rounded-sm border-[0.5px] border-black bg-white hover:bg-[#f3f4f6]">
          <div className="relative flex w-full  flex-col rounded-xl bg-transparent bg-clip-border text-gray-700 shadow-none">
            <div className="relative gap-4 pt-0 pb-8 mx-0 overflow-hidden text-gray-700 bg-transparent shadow-none rounded-xl bg-clip-border">
              <div className="flex w-full items-center mt-5 gap-2 pl-3 text-black">
                <FaGit className="text-4xl group-hover:text-[#e84d31]"></FaGit>
                <h5 className="block font-sans text-xl antialiased font-semibold leading-snug tracking-normal">
                  Git
                </h5>
              </div>
            </div>
          </div>
        </div>

        <div className="group w-full md:w-[300px] h-[80px] rounded-sm border-[0.5px] border-black bg-white hover:bg-[#f3f4f6]">
          <div className="relative flex w-full  flex-col rounded-xl bg-transparent bg-clip-border text-gray-700 shadow-none">
            <div className="relative gap-4 pt-0 pb-8 mx-0 overflow-hidden text-gray-700 bg-transparent shadow-none rounded-xl bg-clip-border">
              <div className="flex w-full items-center mt-5 gap-2 pl-3 text-black">
                <SiFirebase className="text-4xl group-hover:text-[#ffcb2c]"></SiFirebase>
                <h5 className="block font-sans text-xl antialiased font-semibold leading-snug tracking-normal">
                  Firebase
                </h5>
              </div>
            </div>
          </div>
        </div>

        <div className="group w-full md:w-[300px] h-[80px] rounded-sm border-[0.5px] border-black bg-white hover:bg-[#f3f4f6]">
          <div className="relative flex w-full  flex-col rounded-xl bg-transparent bg-clip-border text-gray-700 shadow-none">
            <div className="relative gap-4 pt-0 pb-8 mx-0 overflow-hidden text-gray-700 bg-transparent shadow-none rounded-xl bg-clip-border">
              <div className="flex w-full items-center mt-5 gap-2 pl-3 text-black">
                <SiGithub className="text-4xl group-hover:text-[#6766e9]"></SiGithub>
                <h5 className="block font-sans text-xl antialiased font-semibold leading-snug tracking-normal">
                  Github
                </h5>
              </div>
            </div>
          </div>
        </div>

        <div className="group w-full md:w-[300px] h-[80px] rounded-sm border-[0.5px] border-black bg-white hover:bg-[#f3f4f6]">
          <div className="relative flex w-full  flex-col rounded-xl bg-transparent bg-clip-border text-gray-700 shadow-none">
            <div className="relative gap-4 pt-0 pb-8 mx-0 overflow-hidden text-gray-700 bg-transparent shadow-none rounded-xl bg-clip-border">
              <div className="flex w-full items-center mt-5 gap-2 pl-3 text-black">
                <SiFigma className="text-4xl group-hover:text-[#f76d5e]"></SiFigma>
                <h5 className="block font-sans text-xl antialiased font-semibold leading-snug tracking-normal">
                  Figma
                </h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
