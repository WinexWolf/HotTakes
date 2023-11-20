import React from "react";
import "bulma/css/bulma.min.css";
import "./footer.css";
import LogoWhite from "../assets/logo_white.png";
import Linkedin from "../assets/linkedin.png";
import Instagram from "../assets/instagram.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faInstagram } from "@fortawesome/free-brands-svg-icons";
import "bulma/css/bulma.min.css";

const Footer = () => {
  return (
    <div className="footer has-background-black-bis">
      <div className="logo-white">
        <img src={LogoWhite} alt=" "></img>
      </div>
      <br></br>
      <div className="social">
        {/* <a href="https://www.instagram.com/hottakes.social/"> */}
        {/* <img src={Instagram} alt="Instagram"></img> */}
        <a
          href="https://www.instagram.com/hottakes.social/"
          className="youtube social"
        >
          <FontAwesomeIcon icon={faInstagram} size="2x" />
        </a>
        <a
          href="https://www.linkedin.com/company/hot-takes-social-inc/"
          className="youtube social"
        >
          <FontAwesomeIcon icon={faLinkedin} size="2x" />
        </a>
        {/* </a> */}
        {/* <a href="https://www.linkedin.com/company/hot-takes-social-inc/"> */}
        {/* <img src={Linkedin} alt="LinkedIn"></img> */}
        {/* </a> */}
      </div>
      <br />
      <div className="email">
        <a href="mailto:andrew@hottakes.social?subject = Feedback&body = Message">
          andrew@hottakes.social
        </a>
      </div>

      <br />
      <div className="footer-links">
        <a href="/terms-and-conditions#terms">Terms and Conditions</a>
      </div>
      <div className="footer-links">
        <a href="/terms-and-conditions#privacy">Privacy Policy</a>
      </div>
      <br />
      <div className="copyright">
        COPYRIGHT PROVERS 2023 - ALL RIGHTS RESERVED
      </div>
    </div>
  );
};

export default Footer;
