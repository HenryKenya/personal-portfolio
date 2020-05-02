import React from "react";
import gsea_logo from "../../images/gsea_logo.png";
import sahara_logo from "../../images/sahara_logo.png";
import tuk_logo from "../../images/tuk_logo.png";
import api_logo from "../../images/api-logo.png";
import ja_logo from "../../images/ja_logo.jpeg";
import Footer from "../common/Footer";

const AwardsPage = () => (
  <>
    <section className="container awards-section">
      <div className="row">
        <div className="col-md-12">
          <h1 className="section-title">Awards</h1>
          <h4 className="section-subtitle">Accolades won so far</h4>

          <ul className="awards-list">
            <li>
              <img src={gsea_logo} className="awards-images" alt="GSEA" />
            </li>
            <li>
              <img src={sahara_logo} className="awards-images" alt="Sahara" />
            </li>
            <li>
              <img src={tuk_logo} className="awards-images" alt="Sahara" />
            </li>
            <li>
              <img src={api_logo} className="awards-images" alt="Sahara" />
            </li>
            <li>
              <img src={ja_logo} className="awards-images" alt="Sahara" />
            </li>
          </ul>
        </div>
      </div>
      <Footer />
    </section>
  </>
);

export default AwardsPage;
