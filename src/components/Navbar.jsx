import { Link } from "react-router-dom"
import "../styles/Navbar.css"
function Navbar() {
  return (
    <nav className="navbar">
        <div className="logo">
          <img src="/logo.png"></img>
          
        </div>
        <ul className="nav-links">
          <li><Link to = "/">Home</Link></li>
          <li><Link to = "/about">About</Link></li>
          <li><Link to = "/project">Project</Link></li>
          <li><Link to = "/skills">Skills</Link></li> 
          <li><Link to = "/contact">Contact</Link></li> 
        </ul>
      </nav>
  )
}

export default Navbar
