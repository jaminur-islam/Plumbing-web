import React from "react";
import img from "../../../logo-img/headerPic.png";
import "./Banner.css";

const Banner = () => {
  return (
    <div className="full-banner">
      <div className="banner-container">
        <div className="container">
          <div className="banner-content">
            <div>
              <h4 className="fs-6 text-primary text-uppercase">
                Highly Trained Staff
              </h4>
              <h1>
                Ready For <span className="text-primary">Help</span> You.
              </h1>
              <p>
                We are certified company. We provide best plumbing services for
                you & your company
              </p>
              <button className="btn btn-primary px-3 py-2 fs-5">
                BOOK ONLINE
              </button>
            </div>
            <div>
              <img src={img} className="banner-img" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
