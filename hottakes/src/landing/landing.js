import React from "react";
import "./landing.css";
import img1 from "../assets/img1.png";
import appstore from "../assets/appstore.png";

const Landing = () => {
  return (
    <div className="columns sec">
      <div className="column">
        <div className="big-text">
          Local business
          <br /> reviews from the most trustworthy
          <br /> source: your friends!
        </div>
        <br />
        <div className="small-text">Download on the App Store</div>
        <br />
        <div className="img-app-store">
          {" "}
          <a href="https://apps.apple.com/us/app/hot-takes-social-map-reviews/id6446862951">
            <img src={appstore} alt=""></img>
          </a>
        </div>
      </div>
      <div className="column image-land">
        <img src={img1} alt=""></img>
      </div>
    </div>
  );
};

export default Landing;
