import "../styles/Homepage.css";
import AboutMe from "../components/AboutMe";
import HeroSection from "../components/HeroSection";
import PageData from "../data/PageData";

function Home() {
  const resumePath = "/Arpita_Rai_Resume.pdf"; // Replace this with the correct path

  return (
    <>
      <HeroSection {...PageData.home} />
      <AboutMe />
      <div className="my-resume">
        <div className="resume-title">
          <h2>My Resume</h2>
        </div>
        <div className="resume-btns">
          <button
            onClick={() => window.open(resumePath, "_blank")}
            className="resume-button"
          >
            View Resume Online
          </button>

          <a href={resumePath} download>
            <button className="resume-button">Download Resume</button>
          </a>
        </div>
      </div>
    </>
  );
}

export default Home;
