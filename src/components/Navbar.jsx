import React from "react";
import logo from "../logo/cool.png";
function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark p-2">
      <div className="container">
        <a className="navbar-brand" href="#">
          <img className="logo" src={logo} alt="Nath..." />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarTogglerDemo02"
          aria-controls="navbarTogglerDemo02"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse  " id="navbarTogglerDemo02">
          <ul className="navbar-nav ms-auto mt-2 mt-lg-0 ">
            <li className="nav-item active">
              <a className="nav-link " href="#home">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#about">
                about me
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#services">
                services
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#experience">
                experience
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#portfolio">
                portfolio
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#contact">
                contacts
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
