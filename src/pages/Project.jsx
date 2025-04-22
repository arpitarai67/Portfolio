import PageData from "../data/PageData"
import HeroSection from "../components/HeroSection"
import ProjectCard from "../components/ProjectCard"
function Project() {
  return (
    <>
      <HeroSection {...PageData.project}/>
      <ProjectCard/>
    </>
    
  )
}

export default Project
