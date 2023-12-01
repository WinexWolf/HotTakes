import React, { useState, useRef } from "react";
import "./takes.css";
import img1 from "../assets/image-1.png";
import img2 from "../assets/image-2.png";
import img3 from "../assets/image-3.png";
import andrewAudio from "../assets/andrew.mp3";
import marieAudio from "../assets/marie.mp3";
import yeunjaeAudio from "../assets/yeunjae.mp3";
import { PiForkKnifeFill } from "react-icons/pi";
import { LuFerrisWheel } from "react-icons/lu";
import { BiSolidDrink } from "react-icons/bi";
import { IoMdPlayCircle } from "react-icons/io";

const Takes = () => {
  const [activeImage, setActiveImage] = useState(img1); // Initial image
  const [activeButton, setActiveButton] = useState(null); // Track active button

  const audioRef = useRef(null); // Reference to the audio element

  const handleAudioPlay = (image, audio, buttonName) => {
    if (audioRef.current) {
      audioRef.current.pause(); // Pause currently playing audio
      audioRef.current.currentTime = 0; // Reset the audio to the beginning
    }

    setActiveImage(image); // Change the displayed image based on the button clicked
    audioRef.current = new Audio(audio);
    audioRef.current.play(); // Play the associated audio

    setActiveButton(buttonName); // Set the active button
  };

  return (
    <div className="container pad">
      <div className="columns ">
        <div className="column">
          <h1 className="grad ">Plus, it’s really fun. </h1>
          <br />

          <div
            className={`button-item ${
              activeButton === "Fini Pizza" ? "active" : ""
            }`}
          >
            <div className="round">
              <PiForkKnifeFill />
            </div>
            <div className="loc-style">Fini Pizza</div>

            <button
              onClick={() => handleAudioPlay(img3, yeunjaeAudio, "Fini Pizza")}
            >
              <IoMdPlayCircle />
            </button>
          </div>
          <br />

          <div
            className={`button-item ${
              activeButton === "Greenlight" ? "active" : ""
            }`}
          >
            <div className="round">
              <LuFerrisWheel />
            </div>
            <div className="loc-style">Greenlight Bookstore</div>

            <button
              onClick={() =>
                handleAudioPlay(img2, marieAudio, "Greenlight Bookstore")
              }
            >
              <IoMdPlayCircle />
            </button>
          </div>
          <br />

          <div
            className={`button-item ${
              activeButton === "Hell Phone" ? "active" : ""
            }`}
          >
            <div className="round">
              <BiSolidDrink />
            </div>
            <div className="loc-style">Hell Phone</div>

            <button
              onClick={() => handleAudioPlay(img1, andrewAudio, "Hell Phone")}
            >
              <IoMdPlayCircle />
            </button>
          </div>
        </div>
        <div className="column fixed">
          <div style={{ display: "flex", justifyContent: "center" }}>
            <img src={activeImage} alt="Displayed Image" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Takes;
