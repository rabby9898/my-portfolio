import AboutMe from "../../Components/AboutMe/AboutMe";
import Banner from "../../Components/Banner/Banner";
import Education from "../../Components/Education/Education";
import Experience from "../../Components/Experience/Experience";
import Navbar from "../../Components/Navbar/Navbar";
import Projects from "../../Components/Projects/Projects";
import Skills from "../../Components/Skills/Skills";

const Home = () => {
  return (
    <div id="home">
      <Navbar></Navbar>
      <Banner></Banner>
      <AboutMe></AboutMe>
      <Education></Education>
      <Skills></Skills>
      <Experience></Experience>
      <Projects></Projects>
    </div>
  );
};

export default Home;
