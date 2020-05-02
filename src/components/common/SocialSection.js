import React from "react";

const SocialSection = () => (
  <section className="container contact-section">
    <div className="row">
      <div className="col-md-7 offset-md-3">
        <h1 className="section-title">
          <span>Connect</span> on socials
        </h1>

        <ul className="social-list">
          <li>
            <i className="fa fa-twitter"></i>
            Twitter
          </li>
          <li>
            <i className="fa fa-github"></i>
            GitHub
          </li>
          <li>
            <i className="fa fa-linkedin"></i>
            LinkedIn
          </li>
          <li>
            <i className="fa fa-medium"></i>
            Medium
          </li>
        </ul>
      </div>
    </div>
  </section>
);

export default SocialSection;
