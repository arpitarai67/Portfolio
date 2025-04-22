import { FaInstagram, FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';
import "../styles/Footer.css"

function Footer() {
  return (
    <footer className="footer-container">
      <div className="socials">
        <a href="https://www.instagram.com/_arpitaa._?igsh=c2pjenZtY3p6eXA0" target="_blank" rel="noopener noreferrer">
          <FaInstagram className="icon" />
        </a>
        <a href="https://www.linkedin.com/in/arpitarai58/" target="_blank" rel="noopener noreferrer">
          <FaLinkedin className="icon" />
        </a>
        <a href="https://github.com/arpitarai67" target="_blank" rel="noopener noreferrer">
          <FaGithub className="icon" />
        </a>
        <a href="mailto:raiarpita58@gmail.com">
          <FaEnvelope className="icon" />
        </a>
      </div>

      <div className="footer-details">
        <div>
        <p><strong>Arpita Rai</strong></p>
          <p>© 2025</p>
        </div>
        <div>
          <p><strong>Address</strong></p>
          <p>Jalandhar, Punjab</p>
          <p>India</p>
        </div>
        <div>
          <p><strong>Phone</strong></p>
          <p>+91 63933XXXXX</p>
        </div>
        <div>
          <p><strong>Email</strong></p>
          <p>raiarpita@gmail.com</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
