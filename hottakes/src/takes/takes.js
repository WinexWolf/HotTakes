import React, { useState, useRef } from "react";
import "./takes.css";
import img1 from "../assets/image-1.png";
import img2 from "../assets/image-2.png";
import img3 from "../assets/image-3.png";
import andrewAudio from "../assets/andrew.mp3";
import marieAudio from "../assets/marie.mp3";
import yeunjaeAudio from "../assets/yeunjae.mp3";
import { PiForkKnifeFill } from "react-icons/pi";

const Takes = () => {
  const [activeImage, setActiveImage] = useState(img1); // Initial image
  const audioRef = useRef(null); // Reference to the audio element

  const handleAudioPlay = (image, audio) => {
    if (audioRef.current) {
      audioRef.current.pause(); // Pause currently playing audio
      audioRef.current.currentTime = 0; // Reset the audio to the beginning
    }

    setActiveImage(image); // Change the displayed image based on the button clicked
    audioRef.current = new Audio(audio);
    audioRef.current.play(); // Play the associated audio
  };

  return (
    <div className="container">
      <div className="columns ">
        <div className="column  ">
          <h1 className="grad">Plus, it’s really fun. </h1>
          <div className="rounded-box">
            <PiForkKnifeFill />
            <button onClick={() => handleAudioPlay(img1, andrewAudio)}>
              Play Andrew
            </button>
          </div>

          <button onClick={() => handleAudioPlay(img2, marieAudio)}>
            Play Marie
          </button>
          <button onClick={() => handleAudioPlay(img3, yeunjaeAudio)}>
            Play Yeunjae
          </button>
        </div>
        <div className="column fixed">
          <img
            src={activeImage}
            width="316"
            height="600"
            alt="Displayed Image"
          />
        </div>
      </div>
    </div>
  );
};

export default Takes;
