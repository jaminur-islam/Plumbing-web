import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../../logo-img/logo.png";
import "./NavigationBar.css";

const NavigationBar = () => {
  const [isActive, setisActive] = useState("home");
  return (
    <nav className="navbar navbar-expand-lg py-2  navbar-light sticky-top full-nav navContainer">
      <div className="container">
        <a href="">
          <img width="200" src={logo} alt="" />
        </a>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav mx-auto">
            <li className="nav-item">
              <a
                onClick={() => setisActive("home")}
                className={isActive == "home" ? "active" : ""}
                href="#"
              >
                Home
              </a>
            </li>
            <li className="nav-item">
              <a
                onClick={() => setisActive("service")}
                className={isActive == "service" ? "active" : ""}
                href="#"
              >
                Service
              </a>
            </li>
            <li className="nav-item">
              <a
                onClick={() => setisActive("about")}
                className={isActive == "about" ? "active" : ""}
                href="#"
              >
                About{" "}
              </a>
            </li>
            <li className="nav-item">
              <a
                onClick={() => setisActive("contact")}
                className={isActive == "contact" ? "active" : ""}
                href="#"
              >
                Contact
              </a>
            </li>
            <li className="nav-item dropdown">
              <a
                onClick={() => setisActive("pages")}
                className={isActive == "pages" ? "active" : ""}
                className=" dropdown-toggle"
                href="#"
                id="navbarDropdownMenuLink"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Pages
              </a>
              <ul
                className="dropdown-menu bg-primary overflow-hidden"
                aria-labelledby="navbarDropdownMenuLink"
              >
                <li>
                  <a className="dropdown-item w-75" href="#">
                    Action
                  </a>
                </li>
                <li>
                  <a className="dropdown-item  w-75" href="#">
                    Another action
                  </a>
                </li>
                <li>
                  <a className="dropdown-item  w-75" href="#">
                    Something
                  </a>
                </li>
              </ul>
            </li>
          </ul>
          <div>
            <Link to="/login" className="btn btn-primary px-4 py-2 fs-6">
              Log in
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavigationBar;
