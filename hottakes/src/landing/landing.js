import React from "react";
import "./landing.css";
import img1 from "../assets/img1.png";
import appstore from "../assets/appstore.png";

const Landing = () => {
  return (
    <section className="section1">
      <section className="sub-section1">
        <div className="big-text">
          Local business reviews from the most trustworthy source: your friends!
        </div>
        <div className="small-text">Download on the App Store</div>
        <img src={appstore} width={232} height={91} alt=""></img>
      </section>
      <section className="sub-section1">
        <img src={img1} width={700} height={500} alt=""></img>
      </section>
    </section>
  );
};

export default Landing;
