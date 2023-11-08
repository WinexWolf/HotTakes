import React from "react";
import "./VibeCheck.css";
import "bulma/css/bulma.min.css";
import arrow from "../assets/arrow.png";

const VibeCheck = () => {
  return (
    <div className="vibe">
      <div>There’s no dress code,</div>
      <div className="columns">
        <div className="column">but there is a</div>
        <div className="column">vibe check</div>
        <div>
          <img src={arrow} alt=""></img>
        </div>
      </div>
    </div>
  );
};

export default VibeCheck;
