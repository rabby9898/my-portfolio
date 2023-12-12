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
  SiTailwindcss,
} from "react-icons/si";
const Skills = () => {
  return (
    <div
      data-aos="fade-up"
      data-aos-duration="3000"
      id="skills"
      className="w-full md:w-[800px] lg:w-[1280px] px-5 md:px-10 lg:px-20 py-10 mx-auto"
    >
      <h1 className="text-3xl md:text-6xl text-gray-700 mx-auto text-left md:text-center py-20">
        My Top <span className="font-light text-black">Skills</span>
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-1 md:gap-2 lg:gap-8">
        <div className="w-[300px] h-[80px] rounded-sm border-[0.5px] border-black bg-white">
          <div className="relative flex w-full  flex-col rounded-xl bg-transparent bg-clip-border text-gray-700 shadow-none">
            <div className="relative gap-4 pt-0 pb-8 mx-0 overflow-hidden text-gray-700 bg-transparent shadow-none rounded-xl bg-clip-border">
              <div className="flex w-full items-center mt-5 gap-2 pl-3 text-black">
                <FaHtml5 className="text-4xl"></FaHtml5>
                <h5 className="block font-sans text-2xl antialiased font-semibold leading-snug tracking-normal">
                  Html
                </h5>
              </div>
            </div>
          </div>
        </div>

        <div className="w-[300px] h-[80px] rounded-sm border-[0.5px] border-black bg-white">
          <div className="relative flex w-full  flex-col rounded-xl bg-transparent bg-clip-border text-gray-700 shadow-none">
            <div className="relative gap-4 pt-0 pb-8 mx-0 overflow-hidden text-gray-700 bg-transparent shadow-none rounded-xl bg-clip-border">
              <div className="flex w-full items-center mt-5 gap-2 pl-3 text-black">
                <FaCss3 className="text-4xl"></FaCss3>
                <h5 className="block font-sans text-xl antialiased font-semibold leading-snug tracking-normal">
                  CSS3
                </h5>
              </div>
            </div>
          </div>
        </div>

        <div className="w-[300px] h-[80px] rounded-sm border-[0.5px] border-black bg-white">
          <div className="relative flex w-full  flex-col rounded-xl bg-transparent bg-clip-border text-gray-700 shadow-none">
            <div className="relative gap-4 pt-0 pb-8 mx-0 overflow-hidden text-gray-700 bg-transparent shadow-none rounded-xl bg-clip-border">
              <div className="flex w-full items-center mt-5 gap-2 pl-3 text-black">
                <FaJs className="text-4xl"></FaJs>
                <h5 className="block font-sans text-xl antialiased font-semibold leading-snug tracking-normal">
                  Javascript
                </h5>
              </div>
            </div>
          </div>
        </div>

        <div className="w-[300px] h-[80px] rounded-sm border-[0.5px] border-black bg-white">
          <div className="relative flex w-full  flex-col rounded-xl bg-transparent bg-clip-border text-gray-700 shadow-none">
            <div className="relative gap-4 pt-0 pb-8 mx-0 overflow-hidden text-gray-700 bg-transparent shadow-none rounded-xl bg-clip-border">
              <div className="flex w-full items-center mt-5 gap-2 pl-3 text-black">
                <SiTailwindcss className="text-4xl" />
                <h5 className="block font-sans text-2xl antialiased font-semibold leading-snug tracking-normal">
                  Tailwind
                </h5>
              </div>
            </div>
          </div>
        </div>

        <div className="w-[300px] h-[80px] rounded-sm border-[0.5px] border-black bg-white">
          <div className="relative flex w-full  flex-col rounded-xl bg-transparent bg-clip-border text-gray-700 shadow-none">
            <div className="relative gap-4 pt-0 pb-8 mx-0 overflow-hidden text-gray-700 bg-transparent shadow-none rounded-xl bg-clip-border">
              <div className="flex w-full items-center mt-5 gap-2 pl-3 text-black">
                <FaBootstrap className="text-4xl"></FaBootstrap>
                <h5 className="block font-sans text-xl antialiased font-semibold leading-snug tracking-normal">
                  Bootstrap
                </h5>
              </div>
            </div>
          </div>
        </div>
        <div className="w-[300px] h-[80px] rounded-sm border-[0.5px] border-black bg-white">
          <div className="relative flex w-full  flex-col rounded-xl bg-transparent bg-clip-border text-gray-700 shadow-none">
            <div className="relative gap-4 pt-0 pb-8 mx-0 overflow-hidden text-gray-700 bg-transparent shadow-none rounded-xl bg-clip-border">
              <div className="flex w-full items-center mt-5 gap-2 pl-3 text-black">
                <FaReact className="text-4xl"></FaReact>
                <h5 className="block font-sans text-xl antialiased font-semibold leading-snug tracking-normal">
                  React
                </h5>
              </div>
            </div>
          </div>
        </div>

        <div className="w-[300px] h-[80px] rounded-sm border-[0.5px] border-black bg-white">
          <div className="relative flex w-full  flex-col rounded-xl bg-transparent bg-clip-border text-gray-700 shadow-none">
            <div className="relative gap-4 pt-0 pb-8 mx-0 overflow-hidden text-gray-700 bg-transparent shadow-none rounded-xl bg-clip-border">
              <div className="flex w-full items-center mt-5 gap-2 pl-3 text-black">
                <FaNodeJs className="text-4xl"></FaNodeJs>
                <h5 className="block font-sans text-xl antialiased font-semibold leading-snug tracking-normal">
                  NodeJs
                </h5>
              </div>
            </div>
          </div>
        </div>

        <div className="w-[300px] h-[80px] rounded-sm border-[0.5px] border-black bg-white">
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

        <div className="w-[300px] h-[80px] rounded-sm border-[0.5px] border-black bg-white">
          <div className="relative flex w-full  flex-col rounded-xl bg-transparent bg-clip-border text-gray-700 shadow-none">
            <div className="relative gap-4 pt-0 pb-8 mx-0 overflow-hidden text-gray-700 bg-transparent shadow-none rounded-xl bg-clip-border">
              <div className="flex w-full items-center mt-5 gap-2 pl-3 text-black">
                <SiMongodb className="text-4xl"></SiMongodb>
                <h5 className="block font-sans text-xl antialiased font-semibold leading-snug tracking-normal">
                  MongoDB
                </h5>
              </div>
            </div>
          </div>
        </div>

        <div className="w-[300px] h-[80px] rounded-sm border-[0.5px] border-black bg-white">
          <div className="relative flex w-full  flex-col rounded-xl bg-transparent bg-clip-border text-gray-700 shadow-none">
            <div className="relative gap-4 pt-0 pb-8 mx-0 overflow-hidden text-gray-700 bg-transparent shadow-none rounded-xl bg-clip-border">
              <div className="flex w-full items-center mt-5 gap-2 pl-3 text-black">
                <FaGit className="text-4xl"></FaGit>
                <h5 className="block font-sans text-xl antialiased font-semibold leading-snug tracking-normal">
                  Git
                </h5>
              </div>
            </div>
          </div>
        </div>

        <div className="w-[300px] h-[80px] rounded-sm border-[0.5px] border-black bg-white">
          <div className="relative flex w-full  flex-col rounded-xl bg-transparent bg-clip-border text-gray-700 shadow-none">
            <div className="relative gap-4 pt-0 pb-8 mx-0 overflow-hidden text-gray-700 bg-transparent shadow-none rounded-xl bg-clip-border">
              <div className="flex w-full items-center mt-5 gap-2 pl-3 text-black">
                <SiFirebase className="text-4xl"></SiFirebase>
                <h5 className="block font-sans text-xl antialiased font-semibold leading-snug tracking-normal">
                  Firebase
                </h5>
              </div>
            </div>
          </div>
        </div>

        <div className="w-[300px] h-[80px] rounded-sm border-[0.5px] border-black bg-white">
          <div className="relative flex w-full  flex-col rounded-xl bg-transparent bg-clip-border text-gray-700 shadow-none">
            <div className="relative gap-4 pt-0 pb-8 mx-0 overflow-hidden text-gray-700 bg-transparent shadow-none rounded-xl bg-clip-border">
              <div className="flex w-full items-center mt-5 gap-2 pl-3 text-black">
                <SiGithub className="text-4xl"></SiGithub>
                <h5 className="block font-sans text-xl antialiased font-semibold leading-snug tracking-normal">
                  Github
                </h5>
              </div>
            </div>
          </div>
        </div>

        <div className="w-[300px] h-[80px] rounded-sm border-[0.5px] border-black bg-white">
          <div className="relative flex w-full  flex-col rounded-xl bg-transparent bg-clip-border text-gray-700 shadow-none">
            <div className="relative gap-4 pt-0 pb-8 mx-0 overflow-hidden text-gray-700 bg-transparent shadow-none rounded-xl bg-clip-border">
              <div className="flex w-full items-center mt-5 gap-2 pl-3 text-black">
                <SiFigma className="text-4xl"></SiFigma>
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
