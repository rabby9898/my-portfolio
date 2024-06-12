import { useContext } from "react";
import { Outlet } from "react-router-dom";
import { ModeContext } from "../../Provider/DarkModeProvider";

const MainLayout = () => {
  const { isDarkMode } = useContext(ModeContext);

  return (
    <div className={`${isDarkMode && "dark"}`}>
      <div className="bg-[#f3f4f6] dark:bg-slate-900">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default MainLayout;
