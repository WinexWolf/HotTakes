import React from "react";
import "./features.css";
import "bulma/css/bulma.min.css";
import Footer from "../footer/footer";

const Features = () => {
  return (
    <div className="has-background-black-bis">
      <div className="columns">
        <div className="column is-two-fifths head1">
          Our Community Guidelines
          <br /> We take this part seriously.
        </div>
        <div className="colum"></div>
      </div>
      <div className="divider1">
        <hr />
      </div>

      <div className="columns">
        <div className="column is-two-fifths head5">Be Respectful.</div>
        <div className="column">
          <div className="head3">
            No Violence, Threats, Harassment, or Hateful Conduct.
          </div>
          <div className="desc2">
            <ul>
              <li>Users cannot threaten other users or businesses.</li>
              <li>Users cannot harass other users or businesses.</li>
              <li>
                Users cannot communicate malicious intent towards other users or
                businesses.
              </li>
            </ul>
          </div>
          <br />
          <br />
          <div className="head3">
            Users cannot be racist, sexist, homophobic, or spread hate towards
            any group of people.
          </div>
          <br />
          <br />

          <div className="head3">
            Users must be mindful of the cultural and religious sensitivities of
            others.
          </div>
          <br />
          <br />
          <div className="head3">Privacy breaches are violence.</div>
          <div className="desc2">
            <ul>
              {" "}
              <li>
                Users cannot infringe upon the privacy of other users or
                businesses. Users cannot publish or post other people’s private
                information without their explicit consent.
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="divider1">
        <hr />
      </div>
      <div className="columns">
        <div className="column is-two-fifths head5">Be Truthful.</div>
        <div className="column">
          <div className="head3">
            Users cannot spread falsehoods maliciously, both towards users or
            businesses.{" "}
          </div>
          <br />
          <br />

          <div className="head3">
            Hot Takes helps businesses by providing insights from aggregated
            takes. Any attempts to maliciously harm a business by a user are not
            allowed{" "}
          </div>
          <br />
          <br />

          <div className="head3">
            Users cannot make up stories about businesses that paint it in a
            negative light if they are not true.
          </div>
          <br />
          <br />

          <div className="head3">
            Users are not allowed to pretend to be someone else.{" "}
          </div>
        </div>
      </div>
      <div className="divider1">
        <hr />
      </div>
      <div className="columns">
        <div className="column is-two-fifths head5">Be Civil.</div>
        <div className="column">
          <div className=" head3">
            Users cannot share profanity, vulgarity, or any other form of
            offensive content.{" "}
          </div>
          <br />
          <br />
          <div className=" head3">
            Users cannot share content that is overtly sexual or, more
            generally, content that is completely irrelevant to the topic at
            hand.{" "}
          </div>
        </div>
      </div>
      <div className="divider1">
        <hr />
      </div>
      <div className="columns">
        <div className="column is-two-fifths head5">Be Legal.</div>
        <div className="column">
          <div className="head3">
            Users cannot post content that is illegal, violates the law, or
            encourages others to violate the law.{" "}
          </div>
          <br />
          <br />
          <div className="head3">
            Users cannot infringe on copyright, defame others, and must follow
            the laws in their jurisdiction.{" "}
          </div>
        </div>
      </div>
      <div className="divider1">
        <hr />
      </div>
      <div className="columns">
        <div className="column is-two-fifths head5">Be Human.</div>
        <div className="column">
          <div className="head3">
            Generative AI has made it more difficult to know whether someone is
            a human or AI agent online. Hot Takes is made for human users only,
            so any AI-led or assisted accounts are not allowed.{" "}
          </div>{" "}
          <br />
          <br />
          <div className="head3">
            {" "}
            AI-driven accessibility software may be allowed on a case-by-case
            basis.
          </div>{" "}
          <br />
          <br />
          <div className="head3">
            With the rapid advancement of generative AI, it is difficult to
            predict what other issues may arise in the future. Therefore we are
            committed to frequently reevaluating our policies and guidelines to
            ensure Hot Takes upholds our shared human values.{" "}
          </div>
        </div>
      </div>
      <div className="divider1">
        <hr />
      </div>
      <Footer />
    </div>
  );
};

export default Features;
