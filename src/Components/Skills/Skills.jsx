import { Circle } from "rc-progress";

const Skills = () => {
  return (
    <div className="w-full md:w-[800px] lg:w-[1280px] px-5 md:px-10 lg:px-20 py-10 mx-auto">
      <h1>Skills</h1>
      <div>
        <Circle percent={80} strokeWidth={4} strokeColor="#000" />
      </div>
    </div>
  );
};

export default Skills;
