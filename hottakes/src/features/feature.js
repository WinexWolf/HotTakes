import React from "react";
import "./feature.css";
import "bulma/css/bulma.min.css";
import arrow from "../assets/arrow.png";
import magnify from "../assets/magnify.png";
import headphones from "../assets/headphones.png";
import thumbsup from "../assets/thumb-up.png";

const Feature = () => {
  return (
    <div className="container1">
      <div className="glow"></div>
      <div className="vibe">
        <span>We’re always building.</span>
        <br />
        <span className="center">check out</span>
        <span className=" grad center"> our features</span>
        <span className="center">
          <a href="https://apps.apple.com/us/app/hot-takes-social-map-reviews/id6446862951">
            <span className="center">
              <img src={arrow} alt=""></img>
            </span>
          </a>
        </span>

        <div className="columns">
          <div className="feature-section column">
            <div className="feature-box">
              <div className="img2">
                <img src={magnify} alt=""></img>
              </div>
              <div className="text">Explore</div>
            </div>
          </div>
          <div className="feature-section column">
            <div className="feature-box">
              <div className="img2">
                <img src={headphones} alt=""></img>
              </div>
              <div className="text">Listen</div>
            </div>
          </div>
          <div className="feature-section column">
            <div className="feature-box">
              <div className="img2">
                <img src={thumbsup} alt=""></img>
              </div>
              <div className="text">Share</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Feature;
