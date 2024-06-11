import { Link } from "react-router-dom";

const Connectify = () => {
  return (
    <div
    //   data-aos="fade-down"
    //   data-aos-duration="3000"
    //   id="projects"
    //   className="w-full md:w-[800px] lg:w-[1280px] px-5 md:px-2 lg:px-20 py-5 md:py-10"
    >
      <div className="bg-[#1f2937] rounded-xl">
        <div className="flex w-full antialiased my-5 md:my-8">
          <div className="">
            <img
              className="h-64 w-full object-cover object-top hover:bg-opacity-50 transform hover:scale-125 rounded-t-xl rounded-b-none shadow-lg transition-all duration-150 z-50"
              src="https://i.ibb.co/2STZ21R/connectify-1.png"
              alt="Vista Forum"
            ></img>
            <div className="w-full px-4 grid grid-cols-1 cursor-default select-none rounded-xl shadow-lg">
              <div className="font-semibold text-2xl text-white mt-8">
                Connectify - Social Media
              </div>
              <div className="my-3 ">
                <p className="text-white text-sm">
                  Connectify is a social media platform where users can connect,
                  share posts, and interact with each other. The platform
                  includes features such as posting text and media, following
                  other users, updating profiles, and viewing notifications. It
                  provides a seamless experience for users to stay connected and
                  engaged with their network.
                </p>
              </div>
              <div className="mt-3">
                <div className="font-semibold text-lg text-white">
                  Tech Stack
                </div>
                <div>
                  <span className="transform transition-all duration-150 mr-3 inline-block bg-[#efd81d] bg-opacity-75 rounded px-1 py-1 text-xs font-thin text-white hover:shadow-sm hover:scale-105">
                    Javascript
                  </span>
                  <span className="transform transition-all duration-150 mr-3 inline-block bg-[#5ed3f3] bg-opacity-75 rounded px-1 py-1 text-xs font-thin text-white hover:shadow-sm hover:scale-105">
                    ReactJS
                  </span>
                  <span className="transform transition-all mr-3 duration-150 inline-block bg-[#38bdf8] bg-opacity-100 rounded px-1 py-1 text-xs font-thin text-white hover:shadow-sm hover:scale-105">
                    TailwindCss
                  </span>
                  <span className="transform transition-all duration-150 mr-3 inline-block bg-[#ef4841] bg-opacity-75 rounded px-1 py-1 text-xs font-thin text-white hover:shadow-sm hover:scale-105">
                    TanStack Query
                  </span>
                  <span className="transform transition-all duration-150 mr-3 inline-block bg-[#79b065] bg-opacity-75 rounded px-1 py-1 text-xs font-thin text-white hover:shadow-sm hover:scale-105">
                    NodeJS
                  </span>
                  <span className="transform transition-all mr-3 duration-150 inline-block bg-[#00684a] bg-opacity-75 rounded px-1 py-1 text-xs font-thin text-white hover:shadow-sm hover:scale-105">
                    MongoDB
                  </span>
                  <span className="transform transition-all duration-150 mr-3 inline-block bg-white bg-opacity-75 rounded px-1 py-1 text-xs font-thin text-black hover:shadow-sm hover:scale-105">
                    ExpressJs
                  </span>
                  <span className="transform transition-all duration-150 mr-3 inline-block bg-[#635bff] bg-opacity-75 rounded px-1 py-1 text-xs font-thin text-white hover:shadow-sm hover:scale-105">
                    Stripe
                  </span>
                  {/* <span className="transform transition-all duration-150 mr-3 inline-block bg-[#911313] bg-opacity-75 rounded px-1 py-1 text-xs font-thin text-white hover:shadow-sm hover:scale-105">
                      Mongoose
                    </span> */}
                </div>
              </div>
              <div className="flex items-center gap-5 py-8">
                <Link to="https://connectify-2-0.onrender.com">
                  <button className="transform mouse-pointer bg-gray-200 text-sm text-gray-700 py-2 px-5 font-semibold rounded hover:bg-gray-700 hover:text-white dark:hover:bg-gray-600 hover:scale-90 focus:bg-gray-700 dark:focus:bg-gray-600 focus:outline-none">
                    Live
                  </button>
                </Link>
                <Link to="https://github.com/rabby9898/connectify-frontend">
                  <button className="transform mouse-pointer bg-gray-200 text-sm text-gray-700 py-2 px-5 font-semibold rounded hover:bg-gray-700 hover:text-white dark:hover:bg-gray-600 hover:scale-90 dark:focus:bg-gray-600 focus:outline-none">
                    Github Link
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const Eclick = () => {
  return (
    <div
    //   data-aos="fade-down"
    //   data-aos-duration="3000"
    //   id="projects"
    //   className="w-full md:w-[800px] lg:w-[1280px] px-5 md:px-2 lg:px-20 py-5 md:py-10"
    >
      <div className="bg-[#1f2937] rounded-xl">
        <div className="flex w-full antialiased my-5 md:my-8">
          <div className="">
            <img
              className="h-64 w-full object-cover object-top hover:bg-opacity-50 transform hover:scale-125 rounded-t-xl rounded-b-none shadow-lg transition-all duration-150 z-50"
              src="https://i.ibb.co/8cyFLjr/eclick-1.png"
              alt="Vista Forum"
            ></img>
            <div className="w-full px-4  grid grid-cols-1 cursor-default select-none rounded-xl shadow-lg">
              <div className="font-semibold text-2xl text-white mt-8">
                Eclick - E-commerce Website
              </div>
              <div className="my-3 ">
                <p className="text-white text-sm">
                  This project is a full-featured e-commerce platform built with
                  React. It includes user authentication, product browsing,
                  shopping cart functionality, and an admin dashboard for
                  managing users and products, utilizing various supporting
                  libraries for a robust and seamless experience.
                </p>
              </div>
              <div className="mt-3">
                <div className="font-semibold text-lg text-white">
                  Tech Stack
                </div>
                <div>
                  <span className="transform transition-all duration-150 mr-3 inline-block bg-[#efd81d] bg-opacity-75 rounded px-1 py-1 text-xs font-thin text-white hover:shadow-sm hover:scale-105">
                    Javascript
                  </span>
                  <span className="transform transition-all duration-150 mr-3 inline-block bg-[#5ed3f3] bg-opacity-75 rounded px-1 py-1 text-xs font-thin text-white hover:shadow-sm hover:scale-105">
                    ReactJS
                  </span>
                  <span className="transform transition-all mr-3 duration-150 inline-block bg-[#38bdf8] bg-opacity-100 rounded px-1 py-1 text-xs font-thin text-white hover:shadow-sm hover:scale-105">
                    TailwindCss
                  </span>
                  <span className="transform transition-all duration-150 mr-3 inline-block bg-[#ef4841] bg-opacity-75 rounded px-1 py-1 text-xs font-thin text-white hover:shadow-sm hover:scale-105">
                    TanStack Query
                  </span>
                  <span className="transform transition-all duration-150 mr-3 inline-block bg-[#79b065] bg-opacity-75 rounded px-1 py-1 text-xs font-thin text-white hover:shadow-sm hover:scale-105">
                    NodeJS
                  </span>
                  <span className="transform transition-all mr-3 duration-150 inline-block bg-[#00684a] bg-opacity-75 rounded px-1 py-1 text-xs font-thin text-white hover:shadow-sm hover:scale-105">
                    MongoDB
                  </span>
                  <span className="transform transition-all duration-150 mr-3 inline-block bg-white bg-opacity-75 rounded px-1 py-1 text-xs font-thin text-black hover:shadow-sm hover:scale-105">
                    ExpressJs
                  </span>
                  <span className="transform transition-all duration-150 mr-3 inline-block bg-[#635bff] bg-opacity-75 rounded px-1 py-1 text-xs font-thin text-white hover:shadow-sm hover:scale-105">
                    Stripe
                  </span>
                  {/* <span className="transform transition-all duration-150 mr-3 inline-block bg-[#911313] bg-opacity-75 rounded px-1 py-1 text-xs font-thin text-white hover:shadow-sm hover:scale-105">
                        Mongoose
                      </span> */}
                </div>
              </div>
              <div className="flex items-center gap-5 py-8">
                <Link to="https://eclick-ecommerce.web.app">
                  <button className="transform mouse-pointer bg-gray-200 text-sm text-gray-700 py-2 px-5 font-semibold rounded hover:bg-gray-700 hover:text-white dark:hover:bg-gray-600 hover:scale-90 focus:bg-gray-700 dark:focus:bg-gray-600 focus:outline-none">
                    Live
                  </button>
                </Link>
                <Link to="https://github.com/rabby9898/e-click-frontend">
                  <button className="transform mouse-pointer bg-gray-200 text-sm text-gray-700 py-2 px-5 font-semibold rounded hover:bg-gray-700 hover:text-white dark:hover:bg-gray-600 hover:scale-90 dark:focus:bg-gray-600 focus:outline-none">
                    Github Link
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const DeltaTranslate = () => {
  return (
    <div
    //   data-aos="fade-down"
    //   data-aos-duration="3000"
    //   id="projects"
    //   className="w-full md:w-[800px] lg:w-[1280px] px-5 md:px-2 lg:px-20 py-5 md:py-10"
    >
      <div className="bg-[#1f2937] rounded-xl">
        <div className="flex w-full antialiased my-5 md:my-8">
          <div className="">
            <img
              className="h-64 w-full object-cover object-top hover:bg-opacity-50 transform hover:scale-125 rounded-t-xl rounded-b-none shadow-lg transition-all duration-150 z-50"
              src="https://i.ibb.co/BVZkZxz/delta-trns.png"
            ></img>
            <div className="w-full px-4 grid grid-cols-1 cursor-default select-none rounded-xl shadow-lg">
              <div className="font-semibold text-2xl text-white mt-8">
                Delta Translator -{" "}
                <span className="font-bold">(Team Project)</span>
              </div>
              <div className="my-3 ">
                <p className="text-white text-sm">
                  Delta Translator is a user-friendly platform offering seamless
                  translation services, prioritizing accessibility, convenience,
                  and user engagement. It enhances cross-linguistic
                  communication and empowers users with efficient translation
                  capabilities.
                </p>
              </div>
              <div className="mt-3">
                <div className="font-semibold text-lg text-white">
                  Tech Stack
                </div>
                <div>
                  <span className="transform transition-all duration-150 mr-3 inline-block bg-[#efd81d] bg-opacity-75 rounded px-1 py-1 text-xs font-thin text-white hover:shadow-sm hover:scale-105">
                    Javascript
                  </span>
                  <span className="transform transition-all duration-150 mr-3 inline-block bg-[#5ed3f3] bg-opacity-75 rounded px-1 py-1 text-xs font-thin text-white hover:shadow-sm hover:scale-105">
                    ReactJS
                  </span>
                  <span className="transform transition-all mr-3 duration-150 inline-block bg-[#38bdf8] bg-opacity-100 rounded px-1 py-1 text-xs font-thin text-white hover:shadow-sm hover:scale-105">
                    TailwindCss
                  </span>
                  <span className="transform transition-all duration-150 mr-3 inline-block bg-[#ef4841] bg-opacity-75 rounded px-1 py-1 text-xs font-thin text-white hover:shadow-sm hover:scale-105">
                    TanStack Query
                  </span>
                  <span className="transform transition-all duration-150 mr-3 inline-block bg-[#7248b6] bg-opacity-75 rounded px-1 py-1 text-xs font-thin text-white hover:shadow-sm hover:scale-105">
                    Redux
                  </span>
                  <span className="transform transition-all duration-150 mr-3 inline-block bg-[#79b065] bg-opacity-75 rounded px-1 py-1 text-xs font-thin text-white hover:shadow-sm hover:scale-105">
                    NodeJS
                  </span>
                  <span className="transform transition-all mr-3 duration-150 inline-block bg-[#00684a] bg-opacity-75 rounded px-1 py-1 text-xs font-thin text-white hover:shadow-sm hover:scale-105">
                    MongoDB
                  </span>
                  <span className="transform transition-all duration-150 mr-3 inline-block bg-white bg-opacity-75 rounded px-1 py-1 text-xs font-thin text-black hover:shadow-sm hover:scale-105">
                    ExpressJs
                  </span>

                  {/* <span className="transform transition-all duration-150 mr-3 inline-block bg-[#635bff] bg-opacity-75 rounded px-1 py-1 text-xs font-thin text-white hover:shadow-sm hover:scale-105">
                    Stripe
                  </span> */}
                  {/* <span className="transform transition-all duration-150 mr-3 inline-block bg-[#911313] bg-opacity-75 rounded px-1 py-1 text-xs font-thin text-white hover:shadow-sm hover:scale-105">
                        Mongoose
                      </span> */}
                </div>
              </div>
              <div className="flex items-center gap-5 py-8">
                <Link to="https://delta-translator-ac8d6.web.app">
                  <button className="transform mouse-pointer bg-gray-200 text-sm text-gray-700 py-2 px-5 font-semibold rounded hover:bg-gray-700 hover:text-white dark:hover:bg-gray-600 hover:scale-90 focus:bg-gray-700 dark:focus:bg-gray-600 focus:outline-none">
                    Live
                  </button>
                </Link>
                <Link to="https://github.com/deltatranslator/translator-delta-client/tree/main">
                  <button className="transform mouse-pointer bg-gray-200 text-sm text-gray-700 py-2 px-5 font-semibold rounded hover:bg-gray-700 hover:text-white dark:hover:bg-gray-600 hover:scale-90 dark:focus:bg-gray-600 focus:outline-none">
                    Github Link
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const TravelNest = () => {
  return (
    <div
    //   data-aos="fade-down"
    //   data-aos-duration="3000"
    //   id="projects"
    //   className="w-full md:w-[800px] lg:w-[1280px] px-5 md:px-2 lg:px-20 py-5 md:py-10"
    >
      <div className="bg-[#1f2937] rounded-xl">
        <div className="flex w-full antialiased my-5 md:my-8">
          <div className="">
            <img
              className="h-64 w-full object-cover object-top hover:bg-opacity-50 transform hover:scale-125 rounded-t-xl rounded-b-none shadow-lg transition-all duration-150"
              src="https://i.ibb.co/vLq0YwQ/travel-nest-projects.png"
              alt="Vista Forum"
            ></img>
            <div className="w-full px-4 grid grid-cols-1 cursor-default select-none rounded-xl shadow-lg">
              <div className="font-semibold text-2xl text-white mt-8">
                Travel Nest - Hotel Booking
              </div>
              <div className="my-3 ">
                <p className="text-white text-sm">
                  Developed a MERN-based hotel booking platform with role-based
                  functionalities (User, Host, Admin) and secure Firebase JWT
                  authentication. Integrated payment methods, front-end
                  libraries, and admin dashboard with statistical insights
                  ensure secure transactions and efficient user and permission
                  management.
                </p>
              </div>
              <div className="mt-3">
                <div className="font-semibold text-lg text-white">
                  Tech Stack
                </div>
                <div>
                  <span className="transform transition-all duration-150 mr-3 inline-block bg-[#efd81d] bg-opacity-75 rounded px-1 py-1 text-xs font-thin text-white hover:shadow-sm hover:scale-105">
                    Javascript
                  </span>
                  <span className="transform transition-all duration-150 mr-3 inline-block bg-[#5ed3f3] bg-opacity-75 rounded px-1 py-1 text-xs font-thin text-white hover:shadow-sm hover:scale-105">
                    ReactJS
                  </span>
                  <span className="transform transition-all mr-3 duration-150 inline-block bg-[#38bdf8] bg-opacity-100 rounded px-1 py-1 text-xs font-thin text-white hover:shadow-sm hover:scale-105">
                    TailwindCss
                  </span>
                  <span className="transform transition-all duration-150 mr-3 inline-block bg-[#ffcb2c] bg-opacity-75 rounded px-1 py-1 text-xs font-thin text-white hover:shadow-sm hover:scale-105">
                    Firebase
                  </span>
                  <span className="transform transition-all duration-150 mr-3 inline-block bg-[#79b065] bg-opacity-75 rounded px-1 py-1 text-xs font-thin text-white hover:shadow-sm hover:scale-105">
                    NodeJS
                  </span>
                  <span className="transform transition-all mr-3 duration-150 inline-block bg-[#00684a] bg-opacity-75 rounded px-1 py-1 text-xs font-thin text-white hover:shadow-sm hover:scale-105">
                    MongoDB
                  </span>
                  <span className="transform transition-all duration-150 mr-3 inline-block bg-white bg-opacity-75 rounded px-1 py-1 text-xs font-thin text-black hover:shadow-sm hover:scale-105">
                    ExpressJs
                  </span>
                  <span className="transform transition-all duration-150 mr-3 inline-block bg-[#635bff] bg-opacity-75 rounded px-1 py-1 text-xs font-thin text-white hover:shadow-sm hover:scale-105">
                    Stripe
                  </span>
                  {/* <span className="transform transition-all duration-150 mr-3 inline-block bg-[#911313] bg-opacity-75 rounded px-1 py-1 text-xs font-thin text-white hover:shadow-sm hover:scale-105">
                    Mongoose
                  </span> */}
                </div>
              </div>
              <div className="flex items-center gap-5 py-8">
                <Link to="https://travel-nest-booking.web.app">
                  <button className="transform mouse-pointer bg-gray-200 text-sm text-gray-700 py-2 px-5 font-semibold rounded hover:bg-gray-700 hover:text-white dark:hover:bg-gray-600 hover:scale-90 focus:bg-gray-700 dark:focus:bg-gray-600 focus:outline-none">
                    Live
                  </button>
                </Link>
                <Link to="https://github.com/rabby9898/travel-nest-client">
                  <button className="transform mouse-pointer bg-gray-200 text-sm text-gray-700 py-2 px-5 font-semibold rounded hover:bg-gray-700 hover:text-white dark:hover:bg-gray-600 hover:scale-90 dark:focus:bg-gray-600 focus:outline-none">
                    Github Link
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const ReefTechno = () => {
  return (
    <div
    //   data-aos="fade-down"
    //   data-aos-duration="3000"
    //   id="projects"
    //   className="w-full md:w-[800px] lg:w-[1280px] px-5 md:px-2 lg:px-20 py-5 md:py-10"
    >
      <div className="bg-[#1f2937] rounded-xl">
        <div className="flex w-full antialiased my-5 md:my-8">
          <div className="">
            <img
              className="h-64 w-full object-cover object-top hover:bg-opacity-50 transform hover:scale-125 rounded-t-xl rounded-b-none shadow-lg transition-all duration-150"
              src="https://i.ibb.co/jwhmNJx/reef.png"
              alt="Vista Forum"
            ></img>
            <div className="w-full px-4 grid grid-cols-1 cursor-default select-none rounded-xl shadow-lg">
              <div className="font-semibold text-2xl text-white mt-8">
                Reef Techno - Simple Tech Shop with CRUD Operations
              </div>
              <div className="my-3 ">
                <p className="text-white text-sm">
                  A comprehensive tech shop project that offers a range of
                  features to enhance your online shopping experience. This
                  project includes full CRUD (Create, Read, Update, Delete)
                  operations for managing products, users, and orders.
                </p>
              </div>
              <div className="mt-3">
                <div className="font-semibold text-lg text-white">
                  Tech Stack
                </div>
                <div>
                  <span className="transform transition-all duration-150 mr-3 inline-block bg-[#efd81d] bg-opacity-75 rounded px-1 py-1 text-xs font-thin text-white hover:shadow-sm hover:scale-105">
                    Javascript
                  </span>
                  <span className="transform transition-all duration-150 mr-3 inline-block bg-[#5ed3f3] bg-opacity-75 rounded px-1 py-1 text-xs font-thin text-white hover:shadow-sm hover:scale-105">
                    ReactJS
                  </span>
                  <span className="transform transition-all mr-3 duration-150 inline-block bg-[#38bdf8] bg-opacity-100 rounded px-1 py-1 text-xs font-thin text-white hover:shadow-sm hover:scale-105">
                    TailwindCss
                  </span>
                  <span className="transform transition-all duration-150 mr-3 inline-block bg-[#ffcb2c] bg-opacity-75 rounded px-1 py-1 text-xs font-thin text-white hover:shadow-sm hover:scale-105">
                    Firebase
                  </span>
                  <span className="transform transition-all duration-150 mr-3 inline-block bg-[#79b065] bg-opacity-75 rounded px-1 py-1 text-xs font-thin text-white hover:shadow-sm hover:scale-105">
                    NodeJS
                  </span>
                  <span className="transform transition-all mr-3 duration-150 inline-block bg-[#00684a] bg-opacity-75 rounded px-1 py-1 text-xs font-thin text-white hover:shadow-sm hover:scale-105">
                    MongoDB
                  </span>
                  <span className="transform transition-all duration-150 mr-3 inline-block bg-white bg-opacity-75 rounded px-1 py-1 text-xs font-thin text-black hover:shadow-sm hover:scale-105">
                    ExpressJs
                  </span>
                </div>
              </div>
              <div className="flex items-center gap-5 py-8">
                <Link to="https://reef-techno.web.app">
                  <button className="transform mouse-pointer bg-gray-200 text-sm text-gray-700 py-2 px-5 font-semibold rounded hover:bg-gray-700 hover:text-white dark:hover:bg-gray-600 hover:scale-90 focus:bg-gray-700 dark:focus:bg-gray-600 focus:outline-none">
                    Live
                  </button>
                </Link>
                <Link to="https://github.com/rabby9898/reef-techno-client">
                  <button className="transform mouse-pointer bg-gray-200 text-sm text-gray-700 py-2 px-5 font-semibold rounded hover:bg-gray-700 hover:text-white dark:hover:bg-gray-600 hover:scale-90 dark:focus:bg-gray-600 focus:outline-none">
                    Github Link
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const EasyCart = () => {
  return (
    <div
    //   data-aos="fade-down"
    //   data-aos-duration="3000"
    //   id="projects"
    //   className="w-full md:w-[800px] lg:w-[1280px] px-5 md:px-2 lg:px-20 py-5 md:py-10"
    >
      <div className="bg-[#1f2937] rounded-xl">
        <div className="flex w-full antialiased my-5 md:my-8">
          <div className="">
            <img
              className="h-64 w-full object-cover object-top hover:bg-opacity-50 transform hover:scale-125 rounded-t-xl rounded-b-none shadow-lg transition-all duration-150"
              src="https://i.ibb.co/bHnxD5D/easycart0.png"
              alt="Vista Forum"
            ></img>
            <div className="w-full px-4 grid grid-cols-1 cursor-default select-none rounded-xl shadow-lg">
              <div className="font-semibold text-2xl text-white mt-8">
                Easy Cart - E-commerce
              </div>
              <div className="my-3 ">
                <p className="text-white text-sm">
                  EasyCart is an e-commerce project focused on frontend
                  development, offering a seamless shopping experience. It
                  features intuitive navigation, secure user authentication,
                  detailed product pages, a dynamic shopping cart, and user
                  profiles. The platform ensures efficient browsing and
                  purchasing, enhancing overall user engagement and
                  satisfaction.
                </p>
              </div>
              <div className="mt-3">
                <div className="font-semibold text-lg text-white">
                  Tech Stack
                </div>
                <div>
                  <span className="transform transition-all duration-150 mr-3 inline-block bg-[#dd4b25] bg-opacity-75 rounded px-1 py-1 text-xs font-thin text-white hover:shadow-sm hover:scale-105">
                    Html
                  </span>
                  <span className="transform transition-all duration-150 mr-3 inline-block bg-[#efd81d] bg-opacity-75 rounded px-1 py-1 text-xs font-thin text-white hover:shadow-sm hover:scale-105">
                    Javascript
                  </span>
                  <span className="transform transition-all duration-150 mr-3 inline-block bg-[#5ed3f3] bg-opacity-75 rounded px-1 py-1 text-xs font-thin text-white hover:shadow-sm hover:scale-105">
                    ReactJS
                  </span>
                  <span className="transform transition-all mr-3 duration-150 inline-block bg-[#38bdf8] bg-opacity-100 rounded px-1 py-1 text-xs font-thin text-white hover:shadow-sm hover:scale-105">
                    Css
                  </span>
                  <span className="transform transition-all duration-150 mr-3 inline-block bg-[#79b065] bg-opacity-75 rounded px-1 py-1 text-xs font-thin text-white hover:shadow-sm hover:scale-105">
                    NodeJS
                  </span>
                  <span className="transform transition-all mr-3 duration-150 inline-block bg-[#00684a] bg-opacity-75 rounded px-1 py-1 text-xs font-thin text-white hover:shadow-sm hover:scale-105">
                    MongoDB
                  </span>
                  <span className="transform transition-all duration-150 mr-3 inline-block bg-white bg-opacity-75 rounded px-1 py-1 text-xs font-thin text-black hover:shadow-sm hover:scale-105">
                    ExpressJs
                  </span>
                </div>
              </div>
              <div className="flex items-center gap-5 py-8">
                <Link to="https://easy-cart.netlify.app">
                  <button className="transform mouse-pointer bg-gray-200 text-sm text-gray-700 py-2 px-5 font-semibold rounded hover:bg-gray-700 hover:text-white dark:hover:bg-gray-600 hover:scale-90 focus:bg-gray-700 dark:focus:bg-gray-600 focus:outline-none">
                    Live
                  </button>
                </Link>
                <Link to="https://github.com/rabby9898/EasyCart---Ecommerce">
                  <button className="transform mouse-pointer bg-gray-200 text-sm text-gray-700 py-2 px-5 font-semibold rounded hover:bg-gray-700 hover:text-white dark:hover:bg-gray-600 hover:scale-90 dark:focus:bg-gray-600 focus:outline-none">
                    Github Link
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
const HotelSharif = () => {
  return (
    <div
    //   data-aos="fade-down"
    //   data-aos-duration="3000"
    //   id="projects"
    //   className="w-full md:w-[800px] lg:w-[1280px] px-5 md:px-2 lg:px-20 py-5 md:py-10"
    >
      <div className="bg-[#1f2937] rounded-xl">
        <div className="flex w-full antialiased my-5 md:my-8">
          <div className="">
            <img
              className="h-64 w-full object-cover object-top hover:bg-opacity-50 transform hover:scale-125 rounded-t-xl rounded-b-none shadow-lg transition-all duration-150"
              src="https://i.ibb.co/HH18tn6/hotel.png"
              alt="Vista Forum"
            ></img>
            <div className="w-full px-4 grid grid-cols-1 cursor-default select-none rounded-xl shadow-lg">
              <div className="font-semibold text-2xl text-white mt-8">
                Hotel Sharif
              </div>
              <div className="my-3 ">
                <p className="text-white text-sm">
                  Hotel Sharif is a hotel management site focused on frontend
                  development. It features intuitive navigation, secure booking,
                  detailed room listings, and user profiles. The platform offers
                  a seamless experience for browsing, booking, and managing
                  hotel stays, ensuring user satisfaction and engagement.
                </p>
              </div>
              <div className="mt-3">
                <div className="font-semibold text-lg text-white">
                  Tech Stack
                </div>
                <div>
                  <span className="transform transition-all duration-150 mr-3 inline-block bg-[#efd81d] bg-opacity-75 rounded px-1 py-1 text-xs font-thin text-white hover:shadow-sm hover:scale-105">
                    Javascript
                  </span>
                  <span className="transform transition-all duration-150 mr-3 inline-block bg-[#5ed3f3] bg-opacity-75 rounded px-1 py-1 text-xs font-thin text-white hover:shadow-sm hover:scale-105">
                    ReactJS
                  </span>
                  <span className="transform transition-all mr-3 duration-150 inline-block bg-[#38bdf8] bg-opacity-100 rounded px-1 py-1 text-xs font-thin text-white hover:shadow-sm hover:scale-105">
                    Css
                  </span>
                  <span className="transform transition-all duration-150 mr-3 inline-block bg-[#79b065] bg-opacity-75 rounded px-1 py-1 text-xs font-thin text-white hover:shadow-sm hover:scale-105">
                    NodeJS
                  </span>
                  {/* <span className="transform transition-all mr-3 duration-150 inline-block bg-[#00684a] bg-opacity-75 rounded px-1 py-1 text-xs font-thin text-white hover:shadow-sm hover:scale-105">
                    MongoDB
                  </span> */}
                  {/* <span className="transform transition-all duration-150 mr-3 inline-block bg-white bg-opacity-75 rounded px-1 py-1 text-xs font-thin text-black hover:shadow-sm hover:scale-105">
                    ExpressJs
                  </span> */}
                </div>
              </div>
              <div className="flex items-center gap-5 py-8">
                <Link to="https://hotel-sharif.netlify.app">
                  <button className="transform mouse-pointer bg-gray-200 text-sm text-gray-700 py-2 px-5 font-semibold rounded hover:bg-gray-700 hover:text-white dark:hover:bg-gray-600 hover:scale-90 focus:bg-gray-700 dark:focus:bg-gray-600 focus:outline-none">
                    Live
                  </button>
                </Link>
                <Link to="https://github.com/rabby9898/hotel-sharif">
                  <button className="transform mouse-pointer bg-gray-200 text-sm text-gray-700 py-2 px-5 font-semibold rounded hover:bg-gray-700 hover:text-white dark:hover:bg-gray-600 hover:scale-90 dark:focus:bg-gray-600 focus:outline-none">
                    Github Link
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
const CareerHub = () => {
  return (
    <div
    //   data-aos="fade-down"
    //   data-aos-duration="3000"
    //   id="projects"
    //   className="w-full md:w-[800px] lg:w-[1280px] px-5 md:px-2 lg:px-20 py-5 md:py-10"
    >
      <div className="bg-[#1f2937] rounded-xl">
        <div className="flex w-full antialiased my-5 md:my-8">
          <div className="">
            <img
              className="h-64 w-full object-cover object-top hover:bg-opacity-50 transform hover:scale-125 rounded-t-xl rounded-b-none shadow-lg transition-all duration-150"
              src="https://i.ibb.co/YLHTZWM/career.png"
            ></img>
            <div className="w-full px-4 grid grid-cols-1 cursor-default select-none rounded-xl shadow-lg">
              <div className="font-semibold text-2xl text-white mt-8">
                Career Hub
              </div>
              <div className="my-3 ">
                <p className="text-white text-sm">
                  CareerHub is a job posting and searching site focused on
                  frontend development. It offers intuitive navigation, secure
                  user authentication, detailed job listings, and user profiles.
                  The platform ensures a seamless experience for job seekers and
                  employers, enhancing job search efficiency and user
                  engagement.
                </p>
              </div>
              <div className="mt-3">
                <div className="font-semibold text-lg text-white">
                  Tech Stack
                </div>
                <div>
                  <span className="transform transition-all duration-150 mr-3 inline-block bg-[#efd81d] bg-opacity-75 rounded px-1 py-1 text-xs font-thin text-white hover:shadow-sm hover:scale-105">
                    Javascript
                  </span>
                  <span className="transform transition-all duration-150 mr-3 inline-block bg-[#5ed3f3] bg-opacity-75 rounded px-1 py-1 text-xs font-thin text-white hover:shadow-sm hover:scale-105">
                    ReactJS
                  </span>
                  <span className="transform transition-all mr-3 duration-150 inline-block bg-[#38bdf8] bg-opacity-100 rounded px-1 py-1 text-xs font-thin text-white hover:shadow-sm hover:scale-105">
                    Tailwind Css
                  </span>
                  <span className="transform transition-all duration-150 mr-3 inline-block bg-[#79b065] bg-opacity-75 rounded px-1 py-1 text-xs font-thin text-white hover:shadow-sm hover:scale-105">
                    NodeJS
                  </span>
                  {/* <span className="transform transition-all mr-3 duration-150 inline-block bg-[#00684a] bg-opacity-75 rounded px-1 py-1 text-xs font-thin text-white hover:shadow-sm hover:scale-105">
                      MongoDB
                    </span> */}
                  {/* <span className="transform transition-all duration-150 mr-3 inline-block bg-white bg-opacity-75 rounded px-1 py-1 text-xs font-thin text-black hover:shadow-sm hover:scale-105">
                      ExpressJs
                    </span> */}
                </div>
              </div>
              <div className="flex items-center gap-5 py-8">
                <Link to="https://career-hub-field.netlify.app">
                  <button className="transform mouse-pointer bg-gray-200 text-sm text-gray-700 py-2 px-5 font-semibold rounded hover:bg-gray-700 hover:text-white dark:hover:bg-gray-600 hover:scale-90 focus:bg-gray-700 dark:focus:bg-gray-600 focus:outline-none">
                    Live
                  </button>
                </Link>
                <Link to="https://github.com/rabby9898/career_hub">
                  <button className="transform mouse-pointer bg-gray-200 text-sm text-gray-700 py-2 px-5 font-semibold rounded hover:bg-gray-700 hover:text-white dark:hover:bg-gray-600 hover:scale-90 dark:focus:bg-gray-600 focus:outline-none">
                    Github Link
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export {
  TravelNest,
  Connectify,
  Eclick,
  DeltaTranslate,
  ReefTechno,
  EasyCart,
  HotelSharif,
  CareerHub,
};
