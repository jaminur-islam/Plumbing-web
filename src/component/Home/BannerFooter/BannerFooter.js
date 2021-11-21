import React from "react";
import img3 from "../../../logo-img/BannerFooter/express-delivery.svg";
import img7 from "../../../logo-img/BannerFooter/7.png";
import img8 from "../../../logo-img/BannerFooter/8.png";
import "./BannerFooter.css";

const BannerFooter = () => {
  return (
    <div>
      <div className="container footer-container">
        <div className="row">
          <div className="col-lg-4">
            <div className="item">
              <img width="70" src={img3} alt="" />
              <h3>We Arrive </h3>
            </div>
          </div>
        </div>
      </div>

      <div className="container my-5">
        <div className="row">
          <div className="col-lg-6">
            <div className="Plumbing">
              <img src={img7} alt="" />
              <h3 className="fs-2 text-white">Commercial Plumbing</h3>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="Plumbing2">
              <img src={img8} alt="" />
              <h3 className="fs-2 text-white">Residential Plumbing</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BannerFooter;
