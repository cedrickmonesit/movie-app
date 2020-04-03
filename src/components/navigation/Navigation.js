import React from "react";
import { connect } from "react-redux";
import "hamburgers/_sass/hamburgers/hamburgers.scss";
import { Link } from "react-router-dom";
import { AiFillHome } from "react-icons/ai";
import { FaUserAlt, FaHeart } from "react-icons/fa";

import SearchBar from "../searchbar/SearchBar";
import { onInputChange, fetchMovies } from "../../actions";
import "./navigation.scss";
import logo from "../../images/logo.png";

const Navigation = props => {
  //when the hamburger button is clicked toggle is-active class and hide class from elements
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
        <a href="/">
          <div className="main-nav-logo-container">
            <img className="main-nav-logo" src={logo} alt="FilmFlix Logo" />
          </div>
        </a>
        <div className="main-nav-top-searchbar">
          <SearchBar
            searchTerm={props.searchTerm}
            fetchMovies={props.fetchMovies}
            onInputChange={props.onInputChange}
          />
        </div>

        <div className="main-nav-top-icons">
          <Link to="/">
            <AiFillHome className="icon icon-home" />
          </Link>
          <Link to="/user/signin">
            <FaUserAlt className="icon" />
          </Link>
          <Link to="/">
            <FaHeart className="icon" />
          </Link>
        </div>
      </div>
      <div className="main-nav-bottom hide">
        <Link to="/">
          <AiFillHome className="icon icon-home" />
        </Link>
        <Link onClick={onClickHamburger} to="/user/signin">
          <FaUserAlt className="icon" />
        </Link>
        <Link to="/">
          <FaHeart className="icon" />
        </Link>
      </div>
    </nav>
  );
};

//filter data from redux store to use in the component as a prop
const mapStateToProps = state => {
  return { movies: state.movieData.results, searchTerm: state.searchTerm };
  //this is setting what you want to call the data from the api just to use the data
};

//connect function from react-redux to access redux store and dispatch actions
export default connect(mapStateToProps, { onInputChange, fetchMovies })(
  Navigation,
);
