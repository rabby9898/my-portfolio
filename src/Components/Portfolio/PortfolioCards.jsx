import { Link } from "react-router-dom";

const SocialPlatform = () => {
  return (
    <div
    //   data-aos="fade-down"
    //   data-aos-duration="3000"
    //   id="projects"
    //   className="w-full md:w-[800px] lg:w-[1280px] px-5 md:px-2 lg:px-20 py-5 md:py-10"
    >
      <div className="bg-[#1f2937] rounded-xl">
        <div className="flex w-full h-auto antialiased my-5 md:my-8">
          <div className="">
            <img
              className="h-64 w-full object-cover object-top hover:bg-opacity-50 transform hover:scale-125 rounded-t-xl rounded-b-none shadow-lg transition-all duration-150"
              src="https://i.ibb.co/vLq0YwQ/travel-nest-projects.png"
              alt="Vista Forum"
            ></img>
            <div className="w-full px-4  grid grid-cols-1 cursor-default select-none rounded-xl shadow-lg">
              <div className="font-semibold text-2xl text-white mt-8">
                Vista Forum
              </div>
              <div className="my-2 ">
                <p className="text-white text-sm">
                  Developed a MERN-based hotel booking platform featuring
                  role-based functionalities (User, Host, Admin), secure
                  Firebase JWT authentication, and integrated payment methods.
                  Utilized a robust tech stack for an enhanced user experience,
                </p>
              </div>
              <div className="mt-3">
                <div className="font-semibold text-lg text-white">
                  Tech Stack
                </div>
                <div>
                  <span className="transform transition-all duration-150 mr-3 inline-block bg-blue-400 bg-opacity-75 rounded px-1 py-1 text-xs font-thin text-white hover:shadow-sm hover:scale-105">
                    ReactJS
                  </span>
                  <span className="transform transition-all mr-3 duration-150 inline-block bg-pink-400 bg-opacity-100 rounded px-1 py-1 text-xs font-thin text-white hover:shadow-sm hover:scale-105">
                    Tailwind
                  </span>
                  <span className="transform transition-all mr-3 duration-150 inline-block bg-yellow-400 bg-opacity-75 rounded px-1 py-1 text-xs font-thin text-white hover:shadow-sm hover:scale-105">
                    MongoDB
                  </span>
                  <span className="transform transition-all duration-150 mr-3 inline-block bg-yellow-400 bg-opacity-75 rounded px-1 py-1 text-xs font-thin text-white hover:shadow-sm hover:scale-105">
                    Firebase
                  </span>
                  <span className="transform transition-all duration-150 mr-3 inline-block bg-yellow-400 bg-opacity-75 rounded px-1 py-1 text-xs font-thin text-white hover:shadow-sm hover:scale-105">
                    NodeJS
                  </span>
                </div>
              </div>
              <div className="flex items-center gap-5 py-8">
                <button className="transform mouse-pointer bg-gray-200 text-sm text-gray-700 py-2 px-5 font-semibold rounded hover:bg-gray-700 hover:text-white dark:hover:bg-gray-600 hover:scale-90 focus:bg-gray-700 dark:focus:bg-gray-600 focus:outline-none">
                  <Link to="">Live</Link>
                </button>
                <button className="transform mouse-pointer bg-gray-200 text-sm text-gray-700 py-2 px-5 font-semibold rounded hover:bg-gray-700 hover:text-white dark:hover:bg-gray-600 hover:scale-90 dark:focus:bg-gray-600 focus:outline-none">
                  <Link to="">Github Link</Link>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export { SocialPlatform };
