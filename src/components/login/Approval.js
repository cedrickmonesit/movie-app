import React from "react";
import { connect } from "react-redux";

import "./login.scss";
import "./approval.scss";
import wordLogo from "../../images/word-logo.png";
import ImageCarousel from "../carousel/ImageCarousel";
import "../carousel/imageCarousel.scss";
import {
  fetchNowPlaying,
  fetchGenres,
  createSignInSession,
} from "../../actions";

//login page
class Approval extends React.Component {
  //need to fetch the data of genres and nowplaying movies
  componentDidMount() {
    this.props.fetchNowPlaying();
    this.props.fetchGenres();
  }

  onClickCreateSession = () => {
    console.log("Session Created!");

    //using the token create a user session
    this.props.createSignInSession();
  };

  //login is reusing the imagecarousel component resized
  render() {
    console.log(this.props.store);
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
            <div className="main-signin-content main-approval-content">
              <p>
                You must approve this site for authorization if you have denied
                authorization to this site on TMDB, your sign in will not work!
              </p>
            </div>
            <button
              className="main-signin-button"
              onClick={this.onClickCreateSession}
            >
              Sign In
            </button>
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
const mapStateToProps = (state) => {
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
})(Approval);
