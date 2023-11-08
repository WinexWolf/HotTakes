import React from "react";
import "./recommendations.css";
import "../css/index.css";

const Recommendations = () => {
  return (
    <section className="section">
      <div className="container">
        <div className="glow"></div>
        <div className="vibe">
          <div>The best recommendations come</div>

          <div className="columns">
            <div>from friends, but our </div>

            <a href="https://apps.apple.com/us/app/hot-takes-social-map-reviews/id6446862951">
              <div className=" grad"> &nbsp;place curators</div>
            </a>
          </div>
          <div>know some great spots, too.</div>
        </div>
      </div>
    </section>
  );
};

export default Recommendations;
