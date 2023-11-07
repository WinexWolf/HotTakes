import React, { useState } from "react";
import "../css/hamburger.css"

function scrollToContact() {
  // Find the "Project" section by its ID

  const contactSection = document.getElementById("contact");

  if (contactSection) {
    // Scroll to the "Contact" section smoothly
    contactSection.scrollIntoView({ behavior: "smooth" });
  }
}

function scrollToAbout() {
  // Find the "About" section by its ID
  const aboutSection = document.getElementById("about");

  if (aboutSection) {
    // Scroll to the "Project" section smoothly
    aboutSection.scrollIntoView({ behavior: "smooth" });
  }
}

function scrollToExperience() {
  // Find the "Project" section by its ID
  const experienceSection = document.getElementById("timeline");

  if (experienceSection) {
    // Scroll to the "Project" section smoothly
    experienceSection.scrollIntoView({ behavior: "smooth" });
  }
}

function scrollToProject() {
  // Find the "Project" section by its ID
  const projectSection = document.getElementById("project");

  if (projectSection) {
    // Scroll to the "Project" section smoothly
    projectSection.scrollIntoView({ behavior: "smooth" });
  }
}

function HamburgerMenu() {
  const [isActive, setIsActive] = useState(false);

  const toggleMenu = () => {
    setIsActive(!isActive);
  };

  return (
    <div
      className={`hamburger-menu ${isActive ? "active" : ""}`}
      onClick={toggleMenu}
    >
      <div className="hamburger-bar"></div>
      <div className="hamburger-bar"></div>
      <div className="hamburger-bar"></div>
      {isActive && (
        <div className="hamburger-list">

          <li>
            <a onClick={scrollToAbout}>About</a>
          </li>
          <li>
            <a onClick={scrollToProject}>Projects</a>
          </li>
          <li>
            <a onClick={scrollToExperience}>Experience</a>
          </li>
          <li>
            <a href="/photography">Photography</a>
          </li>
          <li>
            <a onClick={scrollToContact}>Contact</a>
          </li>
        </div>
      )}
    </div>
  );
}

export default HamburgerMenu;
