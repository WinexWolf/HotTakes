import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Home/home";
import Features from "./Features-main/features";
import PlaceCurators from "./PlaceCurators/placeCurators";
import About from "./About/about";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "home",
    element: <Home />,
  },
  {
    path: "community-guideliness",
    element: <Features />,
  },
  {
    path: "terms-and-conditions",
    element: <PlaceCurators />,
  },
  {
    path: "about",
    element: <About />,
  },
]);

document.addEventListener("DOMContentLoaded", function () {
  const rootElement = document.getElementById("root");
  if (rootElement) {
    const root = ReactDOM.createRoot(rootElement);
    root.render(
      <React.StrictMode>
        {/* <BrowserRouter> */}
        <RouterProvider router={router} />
        {/* </BrowserRouter> */}
      </React.StrictMode>
    );
    reportWebVitals();
  } else {
    console.error("Root element not found!");
  }
});
