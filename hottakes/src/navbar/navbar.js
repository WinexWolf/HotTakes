// Navbar.js
import React, { useState, useEffect } from "react";
import HamburgerMenu from "../js/hamburger";
import "./navbar.css";
import "bulma/css/bulma.min.css";
import logo from "../assets/logo.png";

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
    <div class="topnav">
      <a class="active" href="/">
        <img src={logo} alt=""></img>
      </a>
      {/* <a href="#Features">Features</a>
      <a href="#place-curators">Place Curators</a> */}
      <a href="/community-guidelines">Community Guidelines</a>
      <a href="/about">About</a>
    </div>
    // <div className="has-background-black-bis">
    //   <nav className="navbar">
    //     {/* {!showLogo && <img src={} height={80} width={80}></img>}
    //     {showLogo && <img src={} height={80} width={80}></img>} */}

    //     <a onClick={scrollToAbout}>Features</a>

    //     <a onClick={scrollToProject}>Place Curators</a>

    //     <a onClick={scrollToExperience}>Community Guidelines</a>

    //     <a href="/About">About</a>

    //     <HamburgerMenu></HamburgerMenu>
    //   </nav>
    // </div>
  );
}

export default Navbar;
