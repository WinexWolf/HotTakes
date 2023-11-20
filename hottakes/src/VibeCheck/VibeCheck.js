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
          <div>There’s no dress code,</div>
          <div className="columns">
            <div>but there is a </div>
            <div className=" grad"> &nbsp;vibe check</div>
            <div>
              <a href="https://apps.apple.com/us/app/hot-takes-social-map-reviews/id6446862951">
                <img src={arrow} alt=""></img>
              </a>
            </div>
          </div>
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
