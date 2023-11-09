import logo from "./logo.svg";
import "./App.css";
import Navbar from "./navbar/navbar.js";
import IndexPage from "./js/index.js";
import Footer from "./footer/footer.js";
import VibeCheck from "./VibeCheck/VibeCheck.js";
import Feature from "./features/feature.js";
import Recommendations from "./recommendations/recommendations.js";
import Landing from "./landing/landing.js";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar />
        <Landing />
        <IndexPage />
        <Recommendations />
        <Feature />
        <VibeCheck />
        <Footer />
      </header>
    </div>
  );
}

export default App;
