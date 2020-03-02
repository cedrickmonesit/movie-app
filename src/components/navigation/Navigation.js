import React from "react";
import "hamburgers/_sass/hamburgers/hamburgers.scss";
import { Link } from "react-router-dom";

import SearchBar from "../SearchBar";
import "./navigation.scss";

const Navigation = () => {
  const onClickHamburger = () => {
    document.querySelector(".hamburger").classList.toggle("is-active");
    document.querySelector(".main-nav-top").classList.toggle("hide");
    document.querySelector(".main-nav-bottom").classList.toggle("hide");
  };

  return (
    <nav className="main-nav">
      <button
        onClick={onClickHamburger}
        className="hamburger hamburger--elastic"
        type="button"
      >
        <span className="hamburger-box">
          <span className="hamburger-inner"></span>
        </span>
      </button>
      <div className="main-nav-top hide">
        <p>logo</p>
        <SearchBar />
      </div>
      <div className="main-nav-bottom hide">
        <Link to="/">Home</Link>
        <Link to="/">Sign In</Link>
        <Link to="/">Favorites</Link>
      </div>
    </nav>
  );
};

export default Navigation;
