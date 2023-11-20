import React from "react";
import "./VibeCheck.css";
import "bulma/css/bulma.min.css";
import arrow from "../assets/arrow.png";
import vibe from "../assets/vibe.png";
import "bulma/css/bulma.min.css";

const VibeCheck = () => {
  return (
    <div className="has-background-black-bis">
      <div className="container">
        <div className="glow"></div>
        <div className="vibe">
          <span>There’s no dress code,</span>
          <br />
          <span>but there is a </span>
          <span className="grad">vibe check</span>
          <span>
            <a href="https://apps.apple.com/us/app/hot-takes-social-map-reviews/id6446862951">
              <img src={arrow} alt=""></img>
            </a>
          </span>

          <div className="container">
            <div className="box1"></div>
            <div className="img">
              <img src={vibe} alt=""></img>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VibeCheck;
