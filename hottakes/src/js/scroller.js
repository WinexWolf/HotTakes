import React, { useState } from "react";
import "../css/scroller.css";

function Scroller() {
    return (
      <div class="dot-container">
        <div class="dot" onclick="handleDotClick(1)"></div>
        <div class="dot" onclick="handleDotClick(2)"></div>
        <div class="dot" onclick="handleDotClick(3)"></div>
        <div class="dot" onclick="handleDotClick(4)"></div>
      </div>
    );
}

export default Scroller;