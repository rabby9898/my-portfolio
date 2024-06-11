import { useState } from "react";
import { SocialPlatform } from "./PortfolioCards";
const Portfolio = () => {
  const [activeTab, setActiveTab] = useState("page1");

  const tabs = [
    {
      id: "page1",
      label: "Full Stack(MERN)",
      content: (
        <div className="grid grid-cols-2 gap-5">
          <SocialPlatform />
        </div>
      ),
    },
    {
      id: "page2",
      label: "Frontend",
      content: <div className="flex"></div>,
    },
    {
      id: "page3",
      label: "Backend",
      content: <div>Server Browser Content</div>,
    },
    {
      id: "page4",
      label: "Python",
      content: <div>Server Browser Content</div>,
      disabled: true,
    },
  ];

  return (
    <div className="">
      <ul className="grid grid-flow-col w-[600px] text-center text-gray-200 bg-[#1f2937] rounded-xl border mx-auto">
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
