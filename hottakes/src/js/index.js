import React from "react";
import "../css/index.css";
import img1 from '../img1.png';
import appstore from "../appstore.png";
import Scroller from "./scroller";
import PlayButton from "./playbuttons";
import arrow from '../arrow.png';
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
          <h1 className="hottakes">Hot Takes </h1>
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
          <h1 className="hottakes">Hot Takes </h1>
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
          <h1 className="hottakes">Hot Takes </h1>
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
          <h1 className="hottakes">Plus, it's really fun.</h1>
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
      <section className="section1">
        <div className="note">
          The best recommendations come from friends, but our know some great
          spots, too.
        </div>
      </section>
      {/*           feature 6
       */}
      <section className="section1">
        <div className="note">
          We’re always building.
          <br></br>
          Checkout our features <img src={arrow}></img>
          <div className="feature-section">
            <div className="feature-box"></div>
            <div className="feature-box"></div>
            <div className="feature-box"></div>
          </div>
        </div>
      </section>
      {/*           feature 7
       */}
      <section className="section1">
        <div className="note">
          There's no dress code,
          <br></br>
          but there is a vibe check <img src={arrow}></img>
          <div className="feature-section">
            <div className="feature-box"></div>
          </div>
        </div>
      </section>
      <section className="section1">
        <div className="note">
          Join the waitlist for early access.
          <br></br>
          We'll reach out soon!
          <Input />
          <div className="feature-section">
            <div className="button-req">Request access</div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default IndexPage;
