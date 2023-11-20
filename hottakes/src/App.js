import logo from "./logo.svg";
import "./App.css";
import Navbar from "./navbar/navbar.js";
import IndexPage from "./js/index.js";
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

function App() {
  return (
    <div className="App">
      {/* <header className="App-header"> */}
      <Navbar />
      <Landing />
      <IndexPage />
      <Recommendations />
      <Feature />
      <VibeCheck />
      <Footer />

      {/* <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/features" element={<Features />} />
        <Route path="/place-curators" element={<PlaceCurators />} />
        <Route path="/about" element={<About />} />
      </Routes> */}

      {/* </header> */}
    </div>
  );
}

export default App;
