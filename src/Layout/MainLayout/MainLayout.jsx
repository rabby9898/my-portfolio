import { Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <div className="bg-[#f3f4f6]">
      <Outlet></Outlet>
    </div>
  );
};

export default MainLayout;
