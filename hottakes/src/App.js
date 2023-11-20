import "./App.css";

import { BrowserRouter as Routes, Route } from "react-router-dom";
import About from "./About/about.js";
import PlaceCurators from "./PlaceCurators/placeCurators.js";
import Features from "./Features-main/features.js";
import Home from "./Home/home.js";

function App() {
  return (
    <div className="App">
      {/* <header className="App-header"> */}
      {/* <Navbar />
        <Landing />
        <IndexPage />
        <Recommendations />
        <Feature />
        <VibeCheck />
        <Footer /> */}

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
