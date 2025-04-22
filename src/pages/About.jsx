
import AboutMe from '../components/AboutMe';
import HeroSection from "../components/HeroSection"
import PageData from '../data/PageData'
function About() {
  return (
    <>
      <HeroSection {...PageData.about}/>
      <AboutMe/>
    </>
  );
}

export default About;
