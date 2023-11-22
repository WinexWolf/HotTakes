import React, { useRef } from "react";
import "./placeCurators.css";
import "bulma/css/bulma.min.css";
import Footer from "../footer/footer";
import Navbar from "../navbar/navbar";
const PlaceCurators = () => {
  const termsRef = useRef(null);
  const privacyRef = useRef(null);
  return (
    <div className="main-background">
      <Navbar />
      <div className="columns pad1">
        <div className="column is-two-fifths">
          <div className="header1">
            <a
              href="#terms"
              onClick={() =>
                termsRef.current.scrollIntoView({ behavior: "smooth" })
              }
            >
              Terms and Conditions
            </a>
          </div>
          <div className="header1">
            {" "}
            <a
              href="#privacy"
              onClick={() =>
                privacyRef.current.scrollIntoView({ behavior: "smooth" })
              }
            >
              Privacy Policy
            </a>
          </div>
        </div>
        <div className="column">
          <div className="sub" ref={termsRef}>
            <div className="heading1">Terms and Conditions</div>
            <div className="desc3">
              Welcome to Hot Takes! Hot Takes is a platform designed for users
              to share their takes with friends and connect with businesses. We
              aim to create a fun and engaging space where authenticity,
              spontaneity, warmth, and truth flourish. By using Hot Takes, you
              agree to abide by the following terms and conditions. Violation of
              these guidelines may result in your account being banned from Hot
              Takes.
            </div>
          </div>
          <div className="sub">
            <div className="head2">Purpose and Content:</div>
            <div className="desc3">
              Hot Takes is intended for users to share their opinions and
              thoughts with their friends in an open and respectful manner.
              <br />
              <br />
              While takes about businesses can be positive or negative, there
              are strict limits on the nature of negative content that may be
              included. Personal attacks, hate speech, harassment, and any form
              of content that is defamatory, discriminatory, or violates the
              rights of others will not be tolerated.
              <br />
              <br />
              Users are solely responsible for the content they post on Hot
              Takes, and they must ensure that it complies with applicable laws
              and regulations.
            </div>
          </div>
          <div className="sub">
            <div className="head2">User Commitments:</div>
            <div className="desc3">
              By joining our platform, users agree to uphold the following
              commitments:
              <br />
              a) Engage in respectful and civil discussions with other users.
              <br />
              b) Refrain from posting content that is harmful, offensive, or
              inappropriate.
              <br />
              c) Respect the rights and privacy of others.
              <br />
              d) Report any content or behavior that violates these terms and
              conditions.
              <br />
            </div>
          </div>{" "}
          <div className="sub">
            <div className="head2">Guidelines and Prohibited Activities:</div>
            <div className="desc3">
              The following activities and types of content are strictly
              prohibited on Hot Takes:
              <br />
              a) Posting content that promotes violence, discrimination, or
              illegal activities.
              <br />
              b) Engaging in bullying, harassment, or stalking of other users.{" "}
              <br />
              c) Impersonating others or providing false information about
              oneself. <br />
              d) Sharing personal or confidential information of others without
              their consent.
              <br />
              e) Posting spam, unauthorized advertisements, or any form of
              unsolicited promotions. <br />
              f) Violating intellectual property rights, including copyright and
              trademark laws. <br />
              g) Interfering with the proper functioning of Hot Takes or
              attempting unauthorized access.
            </div>
          </div>{" "}
          <div className="sub">
            <div className="head2">User Responsibility:</div>
            <div className="desc3">
              Users are responsible for their actions and the content they post
              on Hot Takes. Hot Takes Social, Inc. does not endorse or guarantee
              the accuracy, integrity, or quality of user-generated content.
              <br />
              <br />
              Users must promptly report any violations or concerns to Hot Takes
              Social, Inc. for appropriate action to be taken.
            </div>
          </div>{" "}
          <div className="sub">
            <div className="head2">Termination:</div>
            <div className="desc3">
              Hot Takes Social, Inc. reserves the right to terminate or suspend
              user accounts at its discretion if any violations of these terms
              and conditions are identified.
              <br />
              <br />
              Users may also terminate their account on Hot Takes at any time.
            </div>
          </div>{" "}
          <div className="sub">
            <div className="head2">Intellectual Property:</div>
            <div className="desc3">
              Users retain ownership of the content they post on Hot Takes. By
              posting content, users grant Hot Takes Social, Inc. a
              non-exclusive, worldwide, royalty-free license to use, reproduce,
              modify, adapt, publish, and display the content for the purpose of
              operating and promoting Hot Takes.
            </div>
          </div>{" "}
          <div className="sub">
            <div className="head2">Disclaimer of Liability:</div>
            <div className="desc3">
              Hot Takes Social, Inc. shall not be held liable for any direct,
              indirect, incidental, consequential, or special damages arising
              out of or in connection with the use of Hot Takes or the content
              posted by users.
            </div>
          </div>{" "}
          <div className="sub">
            <div className="head2">Modification of Terms:</div>
            <div className="desc3">
              Hot Takes Social, Inc. reserves the right to modify or update
              these terms and conditions at any time. Users will be notified of
              any significant changes via their registered email address.
            </div>
          </div>{" "}
          <div className="sub">
            <div className="head2">Governing Law:</div>
            <div className="desc3">
              These terms and conditions shall be governed by and construed in
              accordance with the laws of the state of Delaware, without regard
              to its conflict of laws principles.
            </div>
          </div>{" "}
          <div className="sub">
            <div className="head2">Age:</div>
            <div className="desc3">
              Users must be above the age of 18 to use Hot Takes.
            </div>
          </div>
          <div className="divider">
            <hr class="solid"></hr>
          </div>
          <div className="sub" ref={privacyRef}>
            <div className="heading1">Privacy Policy</div>
            <div className="desc3">
              At Hot Takes, we take your privacy very seriously. This policy
              outlines how we collect, use, and protect your personal
              information on our map-based social audio platform.
            </div>
          </div>
          <div className="sub">
            <div className="head2">Data Collection</div>
            <div className="desc3">
              When you sign up for Hot Takes, we collect personal information
              that you provide us with, such as your name and email address. We
              also collect information about your device, including your IP
              address, device type, and operating system.
              <br />
              <br />
              We may also collect information that you provide to us when you
              use our services, or application data, such as your location,
              takes, contacts, and audio recordings/takes, or any of your
              engagement with our app, such as reactions to takes. We may also
              collect information from third-party sources to improve our
              services, such as demographic or interest data, but as of July
              2023 we do not collect any data from third party sources.
              <br />
              <br />
              We do not collect any sensitive data from users. Any data
              collected from users, such as the items listed above, are fully
              anonymized on our servers/in our backend.
            </div>
          </div>
          <div className="sub">
            <div className="head2">Data Usage</div>
            <div className="desc3">
              We use the data we collect to provide you with the best user
              experience possible. This includes personalizing your account,
              sending you notifications, and improving our services. We do not
              share any data linked to you with outside sources. All data used
              on our backend, such as for recommendations, is anonymized.
              <br />
              <br />
              We may use your data to provide you with targeted advertising or
              marketing communications that we believe may be of interest to
              you.
              <br />
              <br />
              The only platforms whom we share your location data with is the
              Google Maps Platform APIs. You can read about their privacy policy
              here.
            </div>
          </div>
          <div className="sub">
            <div className="head2">Data Protection</div>
            <div className="desc3">
              We take the protection of your personal information very
              seriously. We have implemented various security measures to ensure
              your data is safe, including encryption and regular backups. We
              also restrict access to your personal information to authorized
              employees who need to know that information to provide you with
              our services.
              <br />
              <br />
              We may retain your personal information for as long as necessary
              to fulfill the purposes outlined in this policy or as required by
              law. We will delete data from users 1 year after they have deleted
              their accounts. Please contact us if you would like us to delete
              your data before then.
              <br />
              <br />
              We do not knowingly solicit data from children under the age of
              18. By using our services, you represent that you are at least 18
              years old. If we learn that a user under the age limit has created
              an account, we will deactivate the account.
            </div>
          </div>
          <div className="sub">
            <div className="head2">Changes to Policy</div>
            <div className="desc3">
              We reserve the right to make changes to this privacy policy at any
              time. Any changes will be posted on our website and will take
              effect immediately.
            </div>
          </div>
          <div className="sub">
            <div className="head2">Contact Us</div>
            <div className="desc3">
              If you have any questions or concerns about our privacy policy,
              please contact us.
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default PlaceCurators;
