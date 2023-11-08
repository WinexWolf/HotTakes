import logo from "./logo.svg";
import "./App.css";
import Navbar from "./js/navbar.js";
import IndexPage from "./js/index.js";
import Footer from "./footer/footer.js";
import VibeCheck from "./VibeCheck/VibeCheck.js";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar />
        {/* <IndexPage /> */}
        <VibeCheck />
        <Footer />
      </header>
    </div>
  );
}

export default App;
