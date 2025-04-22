import HeroSection from "../components/HeroSection"
import PageData from "../data/PageData"
import "../styles/Contact.css";
import { useRef } from "react";
import emailjs from "@emailjs/browser";

function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_36etfl4",
        "template_29z82xr",
        form.current,
        "MznE70QD3LBBJ7hPk"
      )
      .then(
        (result) => {
          alert("Message sent successfully!");
          form.current.reset();
        },
        (error) => {
          alert("Something went wrong. Please try again!");
        }
      );
  };
  return (
    <>
      <HeroSection {...PageData.contact}/>
      <div className="contact-page">
      <h1>Get in Touch</h1>
      <p>Feel free to reach out via email or connect with me on LinkedIn!</p>

      <div className="contact-info">
        <div className="contact-card">
          <img src="/logos/gmail.png" alt="email" />
          <a href="mailto:raiarpita58@gmail.com">raiarpita58@gmail.com</a>
        </div>
        <div className="contact-card">
          <img src="/logos/contactnum.png" alt="phone" />
          <span>+91 63933XXXXX</span>
        </div>
        <div className="contact-card">
          <img src="/logos/linkedin.png" alt="LinkedIn" />
          <a href="https://linkedin.com/in/arpitarai58" target="_blank" rel="noreferrer">LinkedIn</a>
        </div>
        <div className="contact-card">
          <img src="/logos/github.png" alt="GitHub" />
          <a href="https://github.com/arpitarai67" target="_blank" rel="noreferrer">GitHub</a>
        </div>
      </div>
      </div>
      <form ref={form} onSubmit={sendEmail} className="contact-form">
        <input type="text" name="user_name" placeholder="Your Name" required />
        <input type="email" name="user_email" placeholder="Your Email" required />
        <textarea name="message" placeholder="Your Message" required></textarea>
        <button type="submit">Send</button>
      </form>
    </>
  );
}

export default Contact;

