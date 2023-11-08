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
        <img src={LogoWhite} width={232} height={91} alt=" "></img>
      </div>
      <br></br>
      <div className="columns social">
        <div className="column">
          <a href="https://www.instagram.com/hottakes.social/">
            <img src={Instagram} width={232} height={91} alt=""></img>
          </a>
        </div>
        <div className="column">
          <a href="https://www.linkedin.com/company/hot-takes-social-inc/">
            <img src={Linkedin} width={232} height={91} alt=""></img>
          </a>
        </div>
      </div>
      <div className="email">andrew@hottakes.social</div>
      <br />
      <div className="footer-links">Terms and Conditions</div>
      <div className="footer-links">Privacy Policy</div>
      <br />
      <div className="copyright">
        COPYRIGHT PROVERS 2023 - ALL RIGHTS RESERVED
      </div>
    </div>
  );
};

export default Footer;
