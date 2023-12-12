import aboutSvg from "../../assets/abootme.svg";
const AboutMe = () => {
  return (
    <div id="about">
      <div className="divider"></div>
      <div className="w-full md:w-[800px] lg:w-[1280px] px-5 md:px-10 lg:px-20 py-5 flex flex-col md:flex-row md:justify-between gap-5 md:10 lg:gap-20 items-center mx-auto">
        <div className="w-full md:w-1/2">
          <img
            className="w-full h-[450px] md:h-[700px]"
            src={aboutSvg}
            alt=""
          />
        </div>
        <div className="w-full md:w-1/2">
          <div className="w-full border border-white bg-white rounded-sm">
            <h1 className="text-3xl md:text-5xl font-bold text-gray-900 uppercase my-2 md:my-6 text-center">
              About <span className="font-normal text-gray-600">Me</span>
            </h1>
            <p className="text-base md:text-lg text-gray-400 p-10 text-justify">
              I am a MERN-focused frontend developer, passionate about creating
              modern and user-friendly web experiences. I love using my skills
              in MongoDB, Express.js, React, and Node.js to build responsive and
              dynamic applications. My goal is to continuously elevate my
              proficiency in web development, contributing to exciting projects
              and expanding my capabilities. I am enthusiastic about the journey
              ahead, embracing every opportunity for learning and professional
              advancement.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
