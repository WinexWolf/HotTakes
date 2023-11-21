import React from "react";
import "../css/index.css";
import img1 from "../assets/img1.png";
import appstore from "../assets/appstore.png";
import Scroller from "./scroller";
import PlayButton from "./playbuttons";
import arrow from "../assets/arrow.png";
import Input from "./input";
import video from "../assets/explore.mov";

function IndexPage() {
  return (
    <div className="">
      {/* landing */}
      {/*           feature 2
       */}{" "}
      <section className="section1">
        <section className="sub-section1">
          <h1 className="grad">Hot Takes </h1>
          <h1>Hear trusted reviews from your friends</h1>
        </section>
        <div className="vid">
          <video src={video} width="316" height="600" controls></video>
        </div>
      </section>
      {/*           feature 3
       */}{" "}
      <section className="section1">
        <section className="sub-section1">
          <h1 className="grad">Hot Takes </h1>
          <h1>Share your own reviews with your friends</h1>
        </section>
        <div className="vid">
          <video src={video} width="316" height="600" controls></video>
        </div>
      </section>
      {/*           feature 4
       */}{" "}
      <section className="section1">
        <section className="sub-section1">
          <h1 className="grad">Plus, it's really fun.</h1>
          <PlayButton />
        </section>
        <div className="vid">
          <video src={video} width="316" height="600" controls></video>
        </div>
      </section>
      {/*           feature 5
       */}{" "}
      {/*           feature 6
       */}
      {/*           feature 7
       */}
    </div>
  );
}

export default IndexPage;
