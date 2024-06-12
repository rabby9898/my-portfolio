import { useContext, useEffect, useState } from "react";
import { FaLightbulb } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import { Link } from "react-scroll";
import { MdDarkMode } from "react-icons/md";
import { ModeContext } from "../../Provider/DarkModeProvider";
const Navbar = () => {
  // navbar fixed
  const [isNavbarFixed, setIsNavbarFixed] = useState(false);
  const { toggleDarkMode, isDarkMode } = useContext(ModeContext);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsNavbarFixed(scrollPosition > 0);
    };

    // Attach the event listener when the component mounts
    window.addEventListener("scroll", handleScroll);

    // Detach the event listener when the component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const links = (
    <>
      <li className="mr-6">
        <NavLink
          className={({ isActive, isPending }) =>
            isPending
              ? "pending"
              : isActive
              ? "text-black font-semibold dark:text-gray-200"
              : ""
          }
        >
          <Link to="home" spy={true} smooth={true} offset={50} duration={500}>
            Home
          </Link>
        </NavLink>
      </li>
      <li className="mr-6">
        <NavLink
          className={({ isActive, isPending }) =>
            isPending
              ? "pending"
              : isActive
              ? "text-black font-semibold dark:text-gray-200"
              : ""
          }
        >
          <Link to="about" spy={true} smooth={true} offset={50} duration={500}>
            About
          </Link>
        </NavLink>
      </li>
      <li className="mr-6">
        <NavLink
          className={({ isActive, isPending }) =>
            isPending
              ? "pending"
              : isActive
              ? "text-black font-semibold dark:text-gray-200"
              : ""
          }
        >
          <Link
            to="education"
            spy={true}
            smooth={true}
            offset={50}
            duration={500}
          >
            Education
          </Link>
        </NavLink>
      </li>
      <li className="mr-6">
        <NavLink
          className={({ isActive, isPending }) =>
            isPending
              ? "pending"
              : isActive
              ? "text-black font-semibold dark:text-gray-200"
              : ""
          }
        >
          <Link to="skills" spy={true} smooth={true} offset={50} duration={500}>
            Skills
          </Link>
        </NavLink>
      </li>

      <li className="mr-6">
        <NavLink
          className={({ isActive, isPending }) =>
            isPending
              ? "pending"
              : isActive
              ? "text-black font-semibold dark:text-gray-200"
              : ""
          }
        >
          <Link
            to="experience"
            spy={true}
            smooth={true}
            offset={50}
            duration={500}
          >
            Experience
          </Link>
        </NavLink>
      </li>
      <li className="mr-6">
        <NavLink
          className={({ isActive, isPending }) =>
            isPending
              ? "pending"
              : isActive
              ? "text-black font-semibold dark:text-gray-200"
              : ""
          }
        >
          <Link
            to="projects"
            spy={true}
            smooth={true}
            offset={50}
            duration={500}
          >
            Projects
          </Link>
        </NavLink>
      </li>
      <li className="mr-6">
        <NavLink
          className={({ isActive, isPending }) =>
            isPending
              ? "pending"
              : isActive
              ? "text-black font-semibold dark:text-gray-200"
              : ""
          }
        >
          <Link
            to="contact"
            spy={true}
            smooth={true}
            offset={50}
            duration={500}
          >
            Contact
          </Link>
        </NavLink>
      </li>
    </>
  );

  //   navbar fixed

  return (
    <div className={`${isDarkMode && "dark"}`}>
      <div
        className={`navbar bg-transparent py-4 px-5 md:px-10 lg:px-20 z-50 dark:bg-slate-900 ${
          isNavbarFixed &&
          "fixed top-0 left-0 w-full backdrop-blur-3xl bg-white/90 "
        }`}
      >
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content text-[#474747] "
            >
              {links}
            </ul>
          </div>
          {isDarkMode ? (
            <Link to="home" spy={true} smooth={true} offset={50} duration={500}>
              <img
                className="w-[150px]"
                src={`https://i.ibb.co/nRM6SsV/Fajle-Rabby-dark-removebg-preview.png`}
                alt=""
              />
            </Link>
          ) : (
            <Link to="home" spy={true} smooth={true} offset={50} duration={500}>
              <img
                className="w-[150px]"
                src={`https://i.ibb.co/q1SZCYr/Fajle-Rabby-1-removebg-preview.png`}
                alt=""
              />
            </Link>
          )}
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu-horizontal px-1 text-[#474747] ">{links}</ul>
        </div>
        <div className="navbar-end">
          <button onClick={toggleDarkMode} className="text-3xl">
            {isDarkMode ? (
              <FaLightbulb className="text-yellow-400"></FaLightbulb>
            ) : (
              <MdDarkMode />
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
