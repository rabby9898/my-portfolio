import { Link, useLoaderData } from "react-router-dom";

const Projects = () => {
  const projectsLoad = useLoaderData();
  console.log(projectsLoad);

  return (
    <div
      id="projects"
      className="w-full md:w-[800px] lg:w-[1280px] px-5 md:px-10 lg:px-20 py-10 mx-auto"
    >
      <div className="flex justify-center items-center gap-1 text-6xl py-8 mb-20">
        <h1>My Projects</h1>
      </div>

      {projectsLoad.map((project) => (
        <div key={project.id}>
          <div className="flex w-full h-full antialiased my-16 mx-auto">
            <div className="relative mx-auto">
              <div className="z-50 p-6 w-[500px] mr-[17rem] mt-10 mx-auto grid grid-cols-1 cursor-default select-none rounded dark:bg-gray-900 shadow-lg">
                <div className="font-semibold text-xl mb-2 ml-2 text-gray-900 dark:text-white">
                  {project.name}
                </div>
                <div className="flex">
                  <button className="transform mouse-pointer bg-gray-900 text-sm text-white mx-2 py-1 px-2 font-semibold rounded hover:bg-gray-700 dark:hover:bg-gray-600 hover:scale-90   focus:bg-gray-700 dark:focus:bg-gray-600 focus:outline-none">
                    <Link to={project.link}>Live</Link>
                  </button>
                  <button className="transform mouse-pointer bg-gray-900 text-sm text-white px-2 font-semibold rounded hover:bg-gray-700 dark:hover:bg-gray-600  hover:scale-90 dark:focus:bg-gray-600 focus:outline-none">
                    <Link to={project.githubLink}>Github Link</Link>
                  </button>
                </div>
                <div className="my-2 mx-2 mr-5">
                  <p className="text-gray-900 text-sm">{project.description}</p>
                </div>
                <div>
                  <div className="font-semibold text-l text-gray-900">
                    Tech Stack:
                  </div>
                  <div>
                    <span className="transform transition-all duration-150 mr-3 inline-block bg-blue-400 bg-opacity-75 rounded px-1 py-1 text-xs font-thin text-blue-900  hover:shadow-sm  hover:scale-105">
                      ReactJS
                    </span>
                    <span className="transform transition-all  mr-3 duration-150 inline-block bg-pink-400 bg-opacity-100 rounded px-1 py-1  text-xs font-thin text-pink-900  hover:shadow-sm  hover:scale-105">
                      Tailwind
                    </span>
                    <span className="transform transition-all  mr-3 duration-150 inline-block bg-yellow-400  bg-opacity-75 rounded px-1 py-1  text-xs font-thin text-yellow-900 hover:shadow-sm  hover:scale-105">
                      MongoDB
                    </span>
                    <span className="transform transition-all duration-150   mr-3 inline-block bg-yellow-400  bg-opacity-75 rounded px-1 py-1  text-xs font-thin text-yellow-900 hover:shadow-sm  hover:scale-105">
                      Firebase
                    </span>
                    <span className="transform transition-all duration-150  mr-3 inline-block bg-yellow-400  bg-opacity-75 rounded px-1 py-1  text-xs font-thin text-yellow-900 hover:shadow-sm  hover:scale-105">
                      NodeJS
                    </span>
                  </div>
                </div>
              </div>
              <img
                className="absolute z-50 mx-72 -my-60 left-[12rem] h-64 w-[300px] object-cover object-top hover:bg-opacity-50 transform hover:scale-125 border-gray-600 border border-opacity-50 rounded-xl shadow-lg transition-all duration-150"
                src={project.image}
              ></img>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Projects;
