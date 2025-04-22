import React, { useState } from "react";
import "../styles/Projects.css"; // 👈 Import the CSS file

const ProjectCard = ({ name, images, description, techstack, host }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div className="project-card">
      <h2 className="project-title">{name}</h2>

      <div className="carousel-container">
        <img
          src={images[currentIndex]}
          alt={`Slide ${currentIndex + 1}`}
          className="carousel-image"
        />
        {images.length > 1 && (
          <>
            <button className="carousel-btn prev" onClick={prevSlide}>
              ‹
            </button>
            <button className="carousel-btn next" onClick={nextSlide}>
              ›
            </button>
          </>
        )}
      </div>

      <p className="project-description">
        {description}
        <p className="tech-stack">{techstack}</p>
        <p className="host">
          <a href={host} target="_blank" rel="noopener noreferrer">
            {host}
          </a>
        </p>
      </p>
    </div>
  );
};

const Projects = () => {
  const projectList = [
    {
      name: "Portfolio Website",
      images: ["/Portfolio1.png", "/portfolio2.png", "/Portfolio3.png"],
      description:
        "Designed and developed a modern, responsive portfolio website to showcase personal projects, skills, and experience. The site features smooth animations, interactive project galleries, and a contact form integrated with email functionality. Emphasized clean design and accessibility to ensure a seamless experience across all devices. ",
      techstack: "Tech Stack: HTML, CSS, JavaScript, React.js, EmailJS",
      host: "",
    },
    {
      name: "Weather App",
      images: ["/weather1.png", "/weather2.png", "/weather3.png"],
      description:
        "Developed a dynamic and responsive weather application that provides real-time weather updates for any city using live API integration. Users can search for locations and instantly view current weather conditions, including temperature, humidity, wind speed, and weather icons.",
      techstack:
        "Tech Stack: React.js, OpenWeatherMap API, Axios, CSS Flexbox/Grid, JavaScript (ES6)",
      host: "https://weather-app-git-main-arpita-rais-projects.vercel.app/",
    },

    {
      name: "Online Clothing Store",
      images: ["shopping1.png", "shopping2.png", "shopping3.png"],
      description:
        "Built a fully functional e-commerce web application for an online clothing store, featuring a modern and mobile-responsive user interface. The platform allows users to browse dynamic product listings, filter by categories, view product details, and add items to a shopping cart.",
      techstack: "React.js, Node.js, Express.js, JWT, CSS (Flexbox/Grid)",
      host: "https://urban-couture-j8z2.vercel.app/",
    },
  ];

  return (
    <div className="projects-container">
      {projectList.map((project, index) => (
        <ProjectCard key={index} {...project} />
      ))}
    </div>
  );
};

export default Projects;
