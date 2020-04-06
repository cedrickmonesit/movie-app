import React from "react";
import { connect } from "react-redux";

import "./login.scss";
import wordLogo from "../../images/word-logo.png";
import ImageCarousel from "../carousel/ImageCarousel";
import "../carousel/imageCarousel.scss";
import {
  fetchNowPlaying,
  fetchGenres,
  createSignInSession,
} from "../../actions";

//login page
class Login extends React.Component {
  //need to fetch the data of genres and nowplaying movies
  componentDidMount() {
    this.props.fetchNowPlaying();
    this.props.fetchGenres();
  }

  onClickSignIn = () => {
    console.log("sign in");
    this.props.createSignInSession();
  };

  //login is reusing the imagecarousel component resized
  render() {
    console.log(this.props);
    return (
      <div className="main-signin">
        <div className="main-signin-container">
          <header className="main-signin-header">
            <img
              className="main-signin-word-logo"
              src={wordLogo}
              alt="Film Flix Word Logo"
            />
            <h1>Sign In</h1>
            <p>Film Flix</p>
          </header>
          <div className="main-signin-buttons">
            <button className="main-signin-button" onClick={this.onClickSignIn}>
              Sign In
            </button>
            <button className="main-signin-button">Guest</button>
            <div className="main-signin-content">
              <p>
                Signing in will redirect you to the TMDB website to sign into
                your TMDB account or create an account through the TMDB website.
              </p>
            </div>
          </div>
        </div>

        <div className="main-signin-image-carousel">
          <ImageCarousel
            movies={this.props.nowPlaying}
            genres={this.props.genres}
            title="Now Playing"
          />
        </div>
      </div>
    );
  }
}

//getting the nowplaying movies and genres for each movie
const mapStateToProps = state => {
  return {
    nowPlaying: state.nowPlayingData.results,
    genres: state.genresData.genres,
    session: state.signInSession,
  };
};

export default connect(mapStateToProps, {
  fetchNowPlaying,
  fetchGenres,
  createSignInSession,
})(Login);
