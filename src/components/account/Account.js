import React from "react";
import { connect } from "react-redux";

import "../login/login.scss";
import wordLogo from "../../images/word-logo.png";
import ImageCarousel from "../carousel/ImageCarousel";
import "../carousel/imageCarousel.scss";
import {
  fetchNowPlaying,
  fetchGenres,
  deleteSignOutSession,
} from "../../actions";
import history from "../../history";

//login page
class Account extends React.Component {
  //need to fetch the data of genres and nowplaying movies
  componentDidMount() {
    this.props.fetchNowPlaying();
    this.props.fetchGenres();
  }

  onClickDeleteSession = () => {
    console.log("Signed Out!");

    //using the token create a user session
    this.props.deleteSignOutSession(this.props.session);
    //history.push("/user/signin");
  };

  //login is reusing the imagecarousel component resized
  render() {
    console.log(this.props.session);
    return (
      <div className="main-signin">
        <div className="main-signin-container">
          <header className="main-signin-header">
            <img
              className="main-signin-word-logo"
              src={wordLogo}
              alt="Film Flix Word Logo"
            />
            <h1>Account</h1>
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
              onClick={this.onClickDeleteSession}
            >
              Sign Out
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
const mapStateToProps = state => {
  return {
    nowPlaying: state.nowPlayingData.results,
    genres: state.genresData.genres,
    status: state.signOutSession.status_message,
    session: state.signInSession,
  };
};

export default connect(mapStateToProps, {
  fetchNowPlaying,
  fetchGenres,
  deleteSignOutSession,
})(Account);
