import AboutMe from "../../Components/AboutMe/AboutMe";
import Banner from "../../Components/Banner/Banner";
import Contact from "../../Components/Contact/Contact";
import Education from "../../Components/Education/Education";
import Experience from "../../Components/Experience/Experience";
import Footer from "../../Components/Footer/Footer";
import Navbar from "../../Components/Navbar/Navbar";
import Portfolio from "../../Components/Portfolio/Portfolio";
import Skills from "../../Components/Skills/Skills";

const Home = () => {
  return (
    <div id="home">
      <Navbar></Navbar>
      <Banner></Banner>
      <AboutMe></AboutMe>
      <Skills></Skills>
      <Portfolio></Portfolio>
      <Education></Education>
      <Experience></Experience>
      <Contact></Contact>
      <Footer></Footer>
    </div>
  );
};

export default Home;
