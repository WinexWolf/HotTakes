import logo from "./logo.svg";
import "./App.css";
import Navbar from "./navbar/navbar.js";

import Footer from "./footer/footer.js";
import VibeCheck from "./VibeCheck/VibeCheck.js";
import Feature from "./features/feature.js";
import Recommendations from "./recommendations/recommendations.js";
import Landing from "./landing/landing.js";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from "./About/about.js";
import PlaceCurators from "./PlaceCurators/placeCurators.js";
import Features from "./Features-main/features.js";
import Home from "./Home/home.js";
import IndexPage from "./js/index.js";
import Body from "./body/body.js";

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="snap-container">
        <div className="snap-item">
          <Landing />
        </div>
        <div className="snap-item">
          <Body />
        </div>

        <div className="snap-item">
          <Feature />
        </div>
        <div className="snap-item">
          <VibeCheck />
        </div>

        <div className="snap-item">
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default App;
