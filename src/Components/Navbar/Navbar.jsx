import { NavLink } from "react-router-dom";

const Navbar = () => {
  const links = (
    <>
      <li className="mr-6">
        <NavLink
          to="/"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "text-black font-semibold" : ""
          }
        >
          Home
        </NavLink>
      </li>
      <li className="mr-6">
        <NavLink
          to="#"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "text-black font-semibold" : ""
          }
        >
          About
        </NavLink>
      </li>
      <li className="mr-6">
        <NavLink
          to="#"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "text-black font-semibold" : ""
          }
        >
          Skills
        </NavLink>
      </li>
      <li className="mr-6">
        <NavLink
          to="#"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "text-black font-semibold" : ""
          }
        >
          Educations
        </NavLink>
      </li>
      <li className="mr-6">
        <NavLink
          to="#"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "text-black font-semibold" : ""
          }
        >
          Experiences
        </NavLink>
      </li>
      <li className="mr-6">
        <NavLink
          to="#"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "text-black font-semibold" : ""
          }
        >
          Projects
        </NavLink>
      </li>
      <li className="mr-6">
        <NavLink
          to="#"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "text-black font-semibold" : ""
          }
        >
          Contact
        </NavLink>
      </li>
    </>
  );
  return (
    <div>
      <div className="navbar bg-transparent py-3 hover:backdrop-blur-md hover:bg-white/30">
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
              className="menu menu-sm dropdown-content text-[#474747]"
            >
              {links}
            </ul>
          </div>
          <a className="btn btn-ghost text-xl">Fajle Rabby</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu-horizontal px-1 text-[#474747]">{links}</ul>
        </div>
        <div className="navbar-end">
          <a className="btn">Button</a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
