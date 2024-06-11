import { useEffect, useState } from "react";
import { FaLightbulb } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import { Link } from "react-scroll";
import { MdDarkMode } from "react-icons/md";
const Navbar = () => {
  // navbar fixed
  const [isNavbarFixed, setIsNavbarFixed] = useState(false);
  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    setClicked(!clicked);
  };
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
            isPending ? "pending" : isActive ? "text-black font-semibold" : ""
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
            isPending ? "pending" : isActive ? "text-black font-semibold" : ""
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
            isPending ? "pending" : isActive ? "text-black font-semibold" : ""
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
            isPending ? "pending" : isActive ? "text-black font-semibold" : ""
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
            isPending ? "pending" : isActive ? "text-black font-semibold" : ""
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
            isPending ? "pending" : isActive ? "text-black font-semibold" : ""
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
            isPending ? "pending" : isActive ? "text-black font-semibold" : ""
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
    <div data-aos="fade-down" className="">
      <div
        className={`navbar bg-transparent py-4 px-5 md:px-10 lg:px-20 z-50 ${
          isNavbarFixed &&
          "fixed top-0 left-0 w-full backdrop-blur-3xl bg-white/90"
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

          <Link to="home" spy={true} smooth={true} offset={50} duration={500}>
            <img
              className="w-[150px]"
              src="https://i.ibb.co/D8knsQv/logo.png"
              alt=""
            />
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu-horizontal px-1 text-[#474747] ">{links}</ul>
        </div>
        <div className="navbar-end">
          <button onClick={handleClick} className="text-3xl">
            {clicked ? (
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
