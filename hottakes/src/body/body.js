import React, { useEffect } from "react";
import "./body.css";
import Footer from "../footer/footer";
//import { Animator, ScrollContainer, ScrollPage } from "react-scroll-motion";
import Aos from "aos";
import "aos/dist/aos.css";
import img1 from "../assets/img1.png";
import appstore from "../assets/appstore.png";
import "bulma/css/bulma.min.css";
import arrow from "../assets/arrow.png";

import video from "../assets/explore.mov";
const Body = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <div className="container">
      <div className="columns ">
        <div className="column move snap-container">
          <div className="full snap-item">
            <h1 className="grad">Hot Takes </h1>
            <h1>Discover the hottest trending spots</h1>
          </div>{" "}
          <div className="full snap-item">
            <h1 className="grad">Hot Takes </h1>
            <h1>Hear trusted reviews from your friends</h1>
          </div>{" "}
          <div className="full snap-item">
            <h1 className="grad">Hot Takes </h1>
            <h1>Share your own reviews with your friends</h1>
          </div>
        </div>
        <div className="column fixed">
          <video src={video} width="316" height="600" controls></video>
        </div>
      </div>
    </div>
  );
};
export default Body;
