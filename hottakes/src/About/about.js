import React from "react";
import "./about.css";
import Navbar from "../navbar/navbar";
import team from "../assets/team.png";
import CornellTech from "../assets/cornelltech.png";
import Parsons from "../assets/parsons.png";
import McGill from "../assets/mcgill.png";
import PwC from "../assets/pwc.png";
import Viacombs from "../assets/viacombs.png";
import Twitch from "../assets/twitch.png";
import EY from "../assets/ey.png";
import Bloomberg from "../assets/bloomberg.png";
import ComedyCentral from "../assets/comedycentral.png";

import "bulma/css/bulma.min.css";
import Footer from "../footer/footer";
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
        <section>
          <div className="container3">
            <div className="glow"></div>

            <div className="heading3">With experience across industries</div>
            <div className="columns container4">
              <div className="column">
                <img src={CornellTech} alt=""></img>
              </div>
              <div className="column">
                <img src={Parsons} alt=""></img>
              </div>
              <div className="column">
                <img src={McGill} alt=""></img>
              </div>
              <div className="column">
                <img src={PwC} alt=""></img>
              </div>
              <div className="column">
                <img src={Viacombs} alt=""></img>
              </div>
              <div className="column">
                <img src={Twitch} alt=""></img>
              </div>
              <div className="column">
                <img src={EY} alt=""></img>
              </div>
              <div className="column">
                <img src={Bloomberg} alt=""></img>
              </div>
              <div className="column">
                <img src={ComedyCentral} alt=""></img>
              </div>
            </div>
          </div>
        </section>
      </center>

      <Footer />
    </div>
  );
};

export default About;
