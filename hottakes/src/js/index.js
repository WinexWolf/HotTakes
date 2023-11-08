import React from "react";
import "../css/index.css";
import img1 from "../assets/img1.png";
import appstore from "../assets/appstore.png";
import Scroller from "./scroller";
import PlayButton from "./playbuttons";
import arrow from "../assets/arrow.png";
import Input from "./input";

function IndexPage() {
  return (
    <div className="">
      {/* landing */}
      <section className="section1">
        <section className="sub-section1">
          <h1>
            Local business reviews from the most trustworthy source: your
            friends!
          </h1>
          <p>Download on the App Store</p>
          <img src={appstore} width={232} height={91}></img>
        </section>
        <section className="sub-section1">
          <img src={img1} width={700} height={500}></img>
        </section>
      </section>
      {/*      feature 1
       */}{" "}
      <section className="section1">
        <section className="sub-section1">
          <h1 className="grad">Hot Takes </h1>
          <h1>Discover the hottest trending spots</h1>
        </section>
        <section className="sub-section2">
          <div className="screen"></div>
          <Scroller />
          {/* <img src={img1}></img> */}
        </section>
      </section>
      {/*           feature 2
       */}{" "}
      <section className="section1">
        <section className="sub-section1">
          <h1 className="grad">Hot Takes </h1>
          <h1>Hear trusted reviews from your friends</h1>
        </section>
        <section className="sub-section2">
          <div className="screen"></div>
          <Scroller />
          {/* <img src={img1}></img> */}
        </section>
      </section>
      {/*           feature 3
       */}{" "}
      <section className="section1">
        <section className="sub-section1">
          <h1 className="grad">Hot Takes </h1>
          <h1>Share your own reviews with your friends</h1>
        </section>
        <section className="sub-section2">
          <div className="screen"></div>
          <Scroller />
          {/* <img src={img1}></img> */}
        </section>
      </section>
      {/*           feature 4
       */}{" "}
      <section className="section1">
        <section className="sub-section1">
          <h1 className="grad">Plus, it's really fun.</h1>
          <PlayButton />
        </section>
        <section className="sub-section2">
          <div className="screen"></div>
          <Scroller />
          {/* <img src={img1}></img> */}
        </section>
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
