import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/images/bangladesh-railway.png";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="container-fluid shadow-sm p-1  bg-white rounded">
      <nav className="navbar container  navbar-expand-lg navbar-light">
        <Link className="text-decoration-none" to="/">
          <div className="headerLogoText d-flex">
            <div>
              <img className="logo" src={logo} alt="" />
            </div>
            <div>
              Bangladesh <br /> Railway
            </div>
          </div>
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse justify-content-end pe-5" id="navbarNavDropdown">
          <ul className="navbar-nav">
            <li className="nav-item ">
              <Link to="/" className="nav-link" href="/">
                Home <span className="sr-only"></span>
              </Link>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/">
                Login
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/">
                Register
              </a>
            </li>
            <li className="nav-item">
              <Link to="train-information" className="nav-link" href="/">
                Train Information
              </Link>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/">
                Contact Us
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
