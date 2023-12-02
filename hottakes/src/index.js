import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import Home from "./Home/home";
import Features from "./Features-main/features";
import PlaceCurators from "./PlaceCurators/placeCurators";
import About from "./About/about";

const RedirectToExternalLink = () => {
  const navigate = useNavigate();

  // Redirect to the external link when this component is rendered
  React.useEffect(() => {
    window.location.href =
      "https://apps.apple.com/us/app/hot-takes-social-map-reviews/id6446862951";
  }, [navigate]);

  return null; // To prevent rendering any content on this route
};

const Root = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="home" element={<Home />} />
        <Route path="community-guidelines" element={<Features />} />
        <Route path="terms-and-conditions" element={<PlaceCurators />} />
        <Route path="about" element={<About />} />
        <Route path="download" element={<RedirectToExternalLink />} />
      </Routes>
    </BrowserRouter>
  );
};

ReactDOM.render(
  <React.StrictMode>
    <Root />
  </React.StrictMode>,
  document.getElementById("root")
);
reportWebVitals();
