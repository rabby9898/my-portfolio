import { FaCircleDot } from "react-icons/fa6";

const Experience = () => {
  return (
    <div
      data-aos="zoom-in-down "
      data-aos-duration="2000"
      id="experience"
      className="w-full md:w-[800px] lg:w-[1280px] px-5 md:px-10 lg:px-20 py-10 mx-auto"
    >
      <h1 className="text-3xl md:text-6xl text-gray-700 mx-auto text-center py-20">
        My Experiences <span className="font-light text-black"></span>
      </h1>
      <div>
        <ul className="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical">
          {/* --------------------*************-------------------------------------- */}
          <li>
            <div className="timeline-middle">
              <FaCircleDot className="text-gray-600 text-xl" />
            </div>
            <div className="timeline-end md:text-start text-left mt-5 md:-mt-5 mr-0 md:mr-5">
              <div className="relative flex bg-clip-border rounded-xl bg-white text-gray-700 shadow-md w-full max-w-[48rem] flex-col md:flex-row">
                <div className="relative w-full md:w-2/5 m-0 overflow-hidden text-gray-700 bg-white rounded-r-none bg-clip-border rounded-xl shrink-0">
                  <img
                    src="https://ibb.co/WB5mtxP"
                    alt="card-image"
                    className="object-cover w-full h-full"
                  />
                </div>
                <div className="p-6">
                  <h4 className="block mb-2 font-sans text-2xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
                    Travel Nest
                  </h4>
                  <p className="block mb-8 font-sans text-base antialiased font-normal leading-relaxed text-gray-700">
                    Developed a MERN-based hotel booking platform featuring
                    role-based functionalities (User, Host, Admin), secure
                    Firebase JWT authentication, and integrated payment methods.
                    Utilized a robust tech stack for an enhanced user
                    experience, including front-end libraries and a feature-rich
                    admin dashboard with statistical insights. The system
                    ensures secure and seamless transactions while allowing
                    Admins to efficiently manage users and permissions.
                  </p>
                  <p className="block mb-8 font-sans text-base antialiased font-normal leading-relaxed text-gray-700">
                    Year: 2024
                  </p>
                </div>
              </div>
            </div>
            <hr className="" />
          </li>
          {/* --------------------*************-------------------------------------- */}
          <li>
            <div className="timeline-middle">
              <FaCircleDot className="text-gray-600 text-xl" />
            </div>
            <div className="timeline-start md:text-start text-left mt-5 md:-mt-5 mr-0 md:mr-5">
              <div className="relative flex bg-clip-border rounded-xl bg-white text-gray-700 shadow-md w-full max-w-[48rem] flex-col md:flex-row ">
                <div className="relative w-full md:w-2/5 m-0 overflow-hidden text-gray-700 bg-white rounded-r-none bg-clip-border rounded-xl shrink-0">
                  <img
                    src="https://i.ibb.co/gFTzDc1/screenshot-hotel-sharif-netlify-app-2023-12-12-00-58-13.png"
                    alt="card-image"
                    className="object-cover w-full h-full"
                  />
                </div>
                <div className="p-6">
                  <h4 className="block mb-2 font-sans text-2xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
                    Hotel Sharif React Project
                  </h4>
                  <p className="block mb-8 font-sans text-base antialiased font-normal leading-relaxed text-gray-700">
                    A year ago I created a user-friendly and informative
                    platform for hotel booking. Ensure responsive design for
                    seamless user experience across devices.
                  </p>
                  <p className="block mb-8 font-sans text-base antialiased font-normal leading-relaxed text-gray-700">
                    Year: 2023
                  </p>
                </div>
              </div>
            </div>
            <hr className="" />
          </li>

          {/* 2--------- */}

          <li>
            <div className="timeline-middle">
              <FaCircleDot className="text-gray-600 text-xl" />
            </div>
            <div className="timeline-end md:text-start text-left mt-5 md:-mt-5 mr-0 md:mr-5">
              <div className="relative flex bg-clip-border rounded-xl bg-white text-gray-700 shadow-md w-full max-w-[48rem] flex-col md:flex-row">
                <div className="relative w-full md:w-2/5 m-0 overflow-hidden text-gray-700 bg-white rounded-r-none bg-clip-border rounded-xl shrink-0">
                  <img
                    src="https://i.ibb.co/cgpY3dF/screenshot-reef-techno-web-app-2023-12-12-00-59-33.png"
                    alt="card-image"
                    className="object-cover w-full h-full"
                  />
                </div>
                <div className="p-6">
                  <h4 className="block mb-2 font-sans text-2xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
                    Reef Techno Shop
                  </h4>
                  <p className="block mb-8 font-sans text-base antialiased font-normal leading-relaxed text-gray-700">
                    This was another project experience for me. A comprehensive
                    tech shop project that offers a range of features to enhance
                    your online shopping experience.
                  </p>
                  <p className="block mb-8 font-sans text-base antialiased font-normal leading-relaxed text-gray-700">
                    Year: 2023
                  </p>
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

export default Experience;
