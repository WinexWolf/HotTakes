import React from "react";
import "bulma/css/bulma.min.css";
import "./footer.css";
import LogoWhite from "../assets/logo_white.png";
import Linkedin from "../assets/linkedin.png";
import Instagram from "../assets/instagram.png";

const Footer = () => {
  return (
    <div className="footer">
      <div className="logo-white">
        <img src={LogoWhite} alt=" "></img>
      </div>
      <br></br>
      <div className="social">
        {/* <a href="https://www.instagram.com/hottakes.social/"> */}
        <img src={Instagram} alt="Instagram"></img>
        {/* </a> */}
        {/* <a href="https://www.linkedin.com/company/hot-takes-social-inc/"> */}
        <img src={Linkedin} alt="LinkedIn"></img>
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
