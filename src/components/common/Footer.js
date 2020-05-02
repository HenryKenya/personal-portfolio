import React from "react";

const Footer = () => (
  <section className="container contact-section">
    <div className="row">
      <div className="col-md-7 offset-md-3">
        <h1 className="section-title">
          <span>Connect</span> on socials
        </h1>

        <ul className="social-list">
          <li className="twitter">
            <a
              href="https://twitter.com/martian_dru"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fa fa-twitter"></i>
              Twitter
            </a>
          </li>
          <li className="github">
            <a
              href="https://github.com/HenryKenya"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fa fa-github"></i>
              GitHub
            </a>
          </li>
          <li className="linkedin">
            <a
              href="https://www.linkedin.com/in/henry-onyango/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fa fa-linkedin"></i>
              LinkedIn
            </a>
          </li>
          <li className="medium">
            <a
              href="https://medium.com/@henry.onyango"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fa fa-medium"></i>
              Medium
            </a>
          </li>
        </ul>
      </div>
    </div>
  </section>
);

export default Footer;
