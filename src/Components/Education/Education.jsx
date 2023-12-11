import { FaGraduationCap } from "react-icons/fa";
import { FaCircleDot } from "react-icons/fa6";
import img1 from "../../assets/Iubat-logo-300x263.png";
import img2 from "../../assets/Chittagong_Cantonment_Public_College_seal.png";
import img3 from "../../assets/Bangladesh_Military_Academy_Monogram.svg";
const Education = () => {
  return (
    <div className="w-full md:w-[800px] lg:w-[1280px] px-5 md:px-10 lg:px-20 py-10 mx-auto">
      <div className="flex justify-center items-center gap-1 text-6xl py-8 mb-20">
        <FaGraduationCap />
        <h1>Education</h1>
      </div>
      <div>
        <ul className="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical">
          <li>
            <div className="timeline-middle">
              <FaCircleDot className="text-gray-600 text-xl" />
            </div>
            <div className="timeline-end md:text-start text-right -mt-5 ml-5">
              <div className="relative flex w-full  flex-col rounded-xl bg-transparent bg-clip-border text-gray-700 shadow-none">
                <div className="relative gap-4 pt-0 pb-8 mx-0 overflow-hidden text-gray-700 bg-transparent shadow-none rounded-xl bg-clip-border">
                  <img
                    src={img1}
                    alt="IUBAT"
                    className="relative inline-block h-[70px] w-[70px] !rounded-full  object-cover object-center"
                  />
                  <div className="flex w-full flex-col mt-5">
                    <div className="">
                      <h5 className="block font-sans text-xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
                        IUBAT - International University of Business Agriculture
                        and Technology
                      </h5>
                      <p className="block font-sans text-base antialiased font-light leading-relaxed text-inherit mt-4">
                        BSc in Electrical & Electronics Engineering
                      </p>
                      <p className="block font-sans text-base antialiased font-light leading-relaxed text-inherit">
                        (2018 - Present)
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <hr className="" />
          </li>
          <li>
            <div className="timeline-middle">
              <FaCircleDot className="text-gray-600 text-xl" />
            </div>
            <div className="timeline-start md:text-end text-right -mt-5 mr-5">
              <div className="relative flex w-full  flex-col rounded-xl bg-transparent bg-clip-border text-gray-700 shadow-none">
                <div className="relative gap-4 pt-0 pb-8 mx-0 overflow-hidden text-gray-700 bg-transparent shadow-none rounded-xl bg-clip-border">
                  <img
                    src={img2}
                    alt="CCPC"
                    className="relative inline-block h-[70px] w-[70px] !rounded-full  object-cover object-center"
                  />
                  <div className="flex w-full flex-col mt-5">
                    <div className="">
                      <h5 className="block font-sans text-xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
                        Chittagong Cantonment Public College(CCPC)
                      </h5>
                      <p className="block font-sans text-base antialiased font-light leading-relaxed text-inherit mt-4">
                        Department Of Science
                      </p>
                      <p className="block font-sans text-base antialiased font-light leading-relaxed text-inherit">
                        (2015 - 2017)
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <hr />
          </li>
          <li>
            <div className="timeline-middle">
              <FaCircleDot className="text-gray-600 text-xl" />
            </div>
            <div className="timeline-end md:text-start -mt-5 ml-5">
              <div className="relative flex w-full  flex-col rounded-xl bg-transparent bg-clip-border text-gray-700 shadow-none">
                <div className="relative gap-4 pt-0 pb-8 mx-0 overflow-hidden text-gray-700 bg-transparent shadow-none rounded-xl bg-clip-border">
                  <img
                    src={img3}
                    alt="BMAHS"
                    className="relative inline-block h-[70px] w-[70px] !rounded-full  object-cover object-center"
                  />
                  <div className="flex w-full flex-col mt-5">
                    <div className="">
                      <h5 className="block font-sans text-xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
                        Bangladesh Military Academy High School(BMAHS)
                      </h5>
                      <p className="block font-sans text-base antialiased font-light leading-relaxed text-inherit mt-4">
                        School Graduation
                      </p>
                      <p className="block font-sans text-base antialiased font-light leading-relaxed text-inherit">
                        (2004 - 2015)
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <hr className="" />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Education;
