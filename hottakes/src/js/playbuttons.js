import React, { useState } from "react";
import "../css/playbuttons.css";
import playpause from "../assets/playpause.png";
import restaurant from "../assets/restaurant.png";

function PlayButton() {
  return (
    <div class="button-container">
      <div class="button-item">
        <img src={restaurant} alt="Image 1" class="image-left"></img>
        <p>Secret Gem</p>
        <img src={playpause} alt="Image 1" class="image-left"></img>
      </div>
      <div class="button-item">
        <img src={restaurant} alt="Image 1" class="image-left"></img>
        <p>Secret Gem</p>
        <img src={playpause} alt="Image 1" class="image-left"></img>
      </div>
      <div class="button-item">
        <img src={restaurant} alt="Image 1" class="image-left"></img>
        <p>Secret Gem</p>
        <img src={playpause} alt="Image 1" class="image-left"></img>
      </div>
    </div>
  );
}

export default PlayButton;
