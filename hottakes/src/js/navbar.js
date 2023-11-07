// Navbar.js
import React, { useState, useEffect } from "react";
import HamburgerMenu from "./hamburger";
import "../css/navbar.css";

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

function Navbar() {
  const [showLogo, setShowLogo] = useState(false);

  useEffect(() => {
    const hideLogoTimeout = setTimeout(() => {
      setShowLogo(true);
    }, 500);
  }, []);

  return (
    <nav className="navbar">
      {/* {!showLogo && <img src={} height={80} width={80}></img>}
        {showLogo && <img src={} height={80} width={80}></img>} */}
      <ul>
        <li>
          <a onClick={scrollToAbout}>Features</a>
        </li>
        <li>
          <a onClick={scrollToProject}>Place Curators</a>
        </li>
        <li>
          <a onClick={scrollToExperience}>Community Guidelines</a>
        </li>
        <li>
          <a href="/photography">About</a>
        </li>
      </ul>

      <HamburgerMenu></HamburgerMenu>
    </nav>
  );
}

export default Navbar;
