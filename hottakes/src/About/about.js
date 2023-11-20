import React from "react";
import "./about.css";
import Navbar from "../navbar/navbar";
import team from "../assets/team.png";
import "bulma/css/bulma.min.css";
const About = () => {
  return (
    <div className="has-background-black-bis">
      {/* <Navbar /> */}
      <section>
        <div className="container">
          {" "}
          <div className="header">Our Team</div>
          <img src={team} alt=""></img>
          <div className="heading2">
            <center>
              <span className="pink">5 </span>
              <span>recent Cornell Tech grads, </span>
              <span className="pink">1 </span>
              <span>vision</span>
            </center>
          </div>
          <div className="columns container2">
            <div className="column">
              <div className="name">Ozaner Hansha</div>
              <div className="title1">Engineer</div>
              <div className="desc">
                Ex-Twitch Software Engineer, past executive director of large
                hackathons, full stack and geolocation data experience.
              </div>
            </div>
            <div className="column">
              <div className="name">Marie Demple</div>
              <div className="title1">CPO</div>
              <div className="desc">
                Experience building enterprise-scale products in the media and
                entertainment industry (5+ years as PM and UX Design at
                ViacomCBS).
              </div>
            </div>
            <div className="column">
              <div className="name">Andrew Berger</div>
              <div className="title1">CEO</div>
              <div className="desc">
                Experience in a social media studio, finance, and academia as a
                data scientist, developer, and writer. Wrote MA thesis on AI and
                social media.
              </div>
            </div>
            <div className="column">
              <div className="name">YeunJae Kim</div>
              <div className="title1">Design</div>
              <div className="desc">
                Product and UX Designer background in design and tech, with
                experience at Bloomberg, 29Labs, and Cyphics.
              </div>
            </div>
            <div className="column">
              <div className="name">Shrishti Srivastava</div>
              <div className="title1">Engineer</div>
              <div className="desc">
                Experience across tech and consulting around the globe at top
                firms (PwC, EY, Webmaster).
              </div>
            </div>
          </div>
        </div>
      </section>
      <center>
        <section className="glow">
          <div class="heading3">With experience across industries</div>
        </section>
      </center>
    </div>
  );
};

export default About;
