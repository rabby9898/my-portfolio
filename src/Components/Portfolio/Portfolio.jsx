import { useContext, useState } from "react";
import {
  CareerHub,
  Connectify,
  DeltaTranslate,
  EasyCart,
  Eclick,
  HotelSharif,
  ReefTechno,
  TravelNest,
} from "./PortfolioCards";
import { ModeContext } from "../../Provider/DarkModeProvider";
const Portfolio = () => {
  const [activeTab, setActiveTab] = useState("page1");

  const tabs = [
    {
      id: "page1",
      label: "Full Stack(MERN)",
      content: (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-0 md:gap-16">
          <Connectify />
          <Eclick />
          <DeltaTranslate />
          <TravelNest />
        </div>
      ),
    },
    {
      id: "page2",
      label: "Frontend",
      content: (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-0 md:gap-16">
          <HotelSharif />
          <CareerHub />
          <EasyCart />
        </div>
      ),
    },
    {
      id: "page3",
      label: "Backend",
      content: (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-0 md:gap-16">
          <ReefTechno />
        </div>
      ),
    },
    {
      id: "page4",
      label: "Python",
      content: (
        <div className="mx-auto mt-12 mb-20">
          <h2 className="text-red-500 text-2xl ">
            {" "}
            Oops! No Projects Available Right Now!
          </h2>
        </div>
      ),
      disabled: true,
    },
  ];

  const { isDarkMode } = useContext(ModeContext);
  return (
    <div
      className={`${isDarkMode && "dark"} mt-5 md:mt-16" id="projects`}
      id="projects"
    >
      <div className="flex justify-center items-center gap-1 text-3xl md:text-6xl py-5 md:py-10 mb-10 dark:text-blue-400">
        <h1 className="">My Projects</h1>
      </div>
      <ul className="grid grid-flow-col w-full md:w-[600px] text-center text-gray-200 bg-[#1f2937] rounded-xl border mx-auto">
        {tabs.map((tab) => (
          <li key={tab.id}>
            <a
              href={`#${tab.id}`}
              onClick={() => setActiveTab(tab.id)}
              className={`flex justify-center py-3 ${
                activeTab === tab.id
                  ? "bg-white rounded-xl shadow text-indigo-900"
                  : ""
              }`}
            >
              {tab.label}
            </a>
          </li>
        ))}
      </ul>
      <div className="mt-5">
        {tabs.map((tab) => (
          <div
            key={tab.id}
            style={{ display: activeTab === tab.id ? "block" : "none" }}
            className="px-5 md:px-10 lg:px-16 mx-auto w-full md:[760px] lg:w-[1020px]"
          >
            {tab.content}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
