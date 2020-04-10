import React from "react";
import { connect } from "react-redux";

import "../login/login.scss";
import ImageCarousel from "../carousel/ImageCarousel";
import "../carousel/imageCarousel.scss";
import {
  fetchNowPlaying,
  fetchGenres,
  deleteSignOutSession,
  fetchAccountDetails,
} from "../../actions";
import history from "../../history";
import Loader from "../loader/Loader";

//login page
class Account extends React.Component {
  //need to fetch the data of genres and nowplaying movies
  componentDidMount() {
    this.props.fetchNowPlaying();
    this.props.fetchGenres();
    this.props.fetchAccountDetails();
  }

  onClickDeleteSession = () => {
    console.log("Signed Out!");

    //using the token create a user session
    this.props.deleteSignOutSession();
    history.push("/user/signin");
  };

  renderAccount() {
    if (this.props.account.id) {
      return (
        <div className="main-signin">
          <div className="main-signin-container">
            <header className="main-signin-header">
              <img
                className="main-signin-word-logo"
                src={`https://s.gravatar.com/avatar/${this.props.account.avatar.gravatar.hash}?s=600

            `}
                alt="User Profile Logo"
              />
              <h1>{this.props.account.username}</h1>
              <p>{this.props.account.name}</p>
            </header>
            <div className="main-signin-buttons">
              <div className="main-signin-content main-approval-content">
                <p>
                  You must approve this site for authorization if you have
                  denied authorization to this site on TMDB, your sign in will
                  not work!
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
    return <Loader />;
  }

  //login is reusing the imagecarousel component resized
  render() {
    console.log(this.props.account);
    return this.renderAccount();
  }
}

//getting the nowplaying movies and genres for each movie
const mapStateToProps = (state) => {
  return {
    nowPlaying: state.nowPlayingData.results,
    genres: state.genresData.genres,
    status: state.signOutSession.status_message,
    account: state.accountDetails,
  };
};

export default connect(mapStateToProps, {
  fetchNowPlaying,
  fetchGenres,
  deleteSignOutSession,
  fetchAccountDetails,
})(Account);
