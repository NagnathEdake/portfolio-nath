import React from "react";
import { ReactTyped } from "react-typed";

function Header() {
  return (
    <div className="header-wraper">
      <div className="main-info">
        <h1>Web development and web promotion</h1>
        <ReactTyped
          loop
          typeSpeed={40}
          backSpeed={30}
          className="typed-text"
          strings={["Web Design", "Frontend Developer", "Backend developer"]}
        />
        <a href="#" className="btn-main-offer">
          Contact Me
        </a>
      </div>
    </div>
  );
}

export default Header;
