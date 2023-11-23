import React, { useEffect, useRef, useState } from "react";
import "./body.css";
import Footer from "../footer/footer";
//import { Animator, ScrollContainer, ScrollPage } from "react-scroll-motion";
import Aos from "aos";
import "aos/dist/aos.css";
import img1 from "../assets/img1.png";
import appstore from "../assets/appstore.png";
import "bulma/css/bulma.min.css";
import arrow from "../assets/arrow.png";

import share from "../assets/share.mov";
import listen from "../assets/listen.mov";
import explore from "../assets/explore.mov";

const Body = () => {
  const [activeTextIndex, setActiveTextIndex] = useState(0);
  const videoSources = [share, listen, explore];

  const textRefs = [
    useRef(), // Ref for first text element
    useRef(), // Ref for second text element
    useRef(), // Ref for third text element
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry, index) => {
          if (entry.isIntersecting) {
            setActiveTextIndex(index);
          }
        });
      },
      { threshold: 0.5 } // Adjust threshold as needed
    );

    textRefs.forEach((ref) => {
      observer.observe(ref.current);
    });

    // Clean up the observer
    return () => {
      textRefs.forEach((ref) => {
        observer.unobserve(ref.current);
      });
    };
  }, [textRefs]);
  const videoKey = videoSources[activeTextIndex];

  return (
    <div className="container">
      <div className="columns ">
        <div className="column move snap-container">
          <div className="full snap-item" ref={textRefs[0]}>
            <h1 className="grad">Hot Takes </h1>
            <h1>
              Discover the <br />
              hottest spots
            </h1>
          </div>{" "}
          <div className="full snap-item" ref={textRefs[1]}>
            <h1 className="grad">Hot Takes </h1>
            <h1>
              Hear trusted <br />
              reviews from your friends
            </h1>
          </div>{" "}
          <div className="full snap-item" ref={textRefs[2]}>
            <h1 className="grad">Hot Takes </h1>
            <h1>
              Share your own <br />
              reviews with your friends
            </h1>
          </div>
        </div>
        <div className="column fixed">
          <video
            key={videoKey}
            src={videoSources[activeTextIndex]}
            width="316"
            height="600"
            autoPlay
            loop
          ></video>
        </div>
      </div>
    </div>
  );
};
export default Body;
