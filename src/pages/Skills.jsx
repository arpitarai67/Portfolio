import HeroSection from "../components/HeroSection"
import PageData from "../data/PageData"
import "../styles/Skills.css"

const skills = [
  { name: "Java", icon: "/logos/java.png" },
  { name: "C++", icon: "/logos/cpp.png" },
  { name: "JavaScript", icon: "/logos/js.png" },
  { name: "Python", icon: "/logos/python.png" },
  { name: "C", icon: "/logos/c.png" },
  { name: "React.js", icon: "/logos/react.png" },
  { name: "Node.js", icon: "/logos/node.png" },
  { name: "Express.js", icon: "/logos/express.png" },
  { name: "Git", icon: "/logos/git.png" },
  { name: "MongoDB", icon: "/logos/mongo.png" },
  { name: "MySQL", icon: "/logos/mysql.png" },
  { name: "VS Code", icon: "/logos/vs.png" },
  { name: "IntelliJ IDEA", icon: "/logos/intellij.png" },
];

function Skills() {
  return (
    <>
      <HeroSection {...PageData.skills}/>
      <div className="skills">
      <h1>Tech Stack</h1>
      <div className="skills-grid">
        {skills.map((skill) => (
          <div className="skill-card" key={skill.name}>
            <img src={skill.icon} alt={skill.name} />
            <p>{skill.name}</p>
          </div>
        ))}
      </div>
    </div>
    </>
    
  )
}

export default Skills
