import "./Banner.css";
import BannerImg from "../../assets/black&white.png";
import { TypeAnimation } from "react-type-animation";
import { FaDownload } from "react-icons/fa";
const Banner = () => {
  return (
    <div className="py-10">
      <div className="avatar flex justify-center mx-auto">
        <div className="w-44 rounded-full border bg-white border-gray-600 animated-ring">
          <img src={BannerImg} alt="Avatar" />
        </div>
      </div>
      <div className="text-center mt-8">
        <h1 className="my-5 text-black font-bold text-4xl">Md Fajle Rabby</h1>
        <div>
          <TypeAnimation
            className=" text-gray-600 font-semibold"
            preRenderFirstString={true}
            sequence={[
              500,
              "Front End Developer",
              1000,
              "MERN Stack Enthusiast",
              1000,
            ]}
            speed={50}
            style={{ fontSize: "20px" }}
            repeat={Infinity}
          />
        </div>
        <h5 className="my-5  font-semibold text-gray-500 text-xl">
          I am Currently studying
        </h5>
        <button className="btn btn-neutral my-5 py-4 rounded-md">
          <a
            href="../../assets/Resume/Assignment-02.pdf"
            download="Assignment-02.pdf"
          >
            <div className="flex gap-2">
              <FaDownload /> Download Resume
            </div>
          </a>
        </button>
      </div>
    </div>
  );
};

export default Banner;
