import React from "react";

import "./login.scss";
import wordLogo from "../../images/word-logo.png";

class Login extends React.Component {
  render() {
    return (
      <div className="main-signin">
        <header className="main-signin-header">
          <img className="main-signin-word-logo" src={wordLogo} />
          <h1>Sign In</h1>
          <p>Film Flix</p>
        </header>
        <div className="main-signin-container">
          <button className="main-signin-button">Sign In</button>
          <button className="main-signin-button">Guest</button>
          <div className="main-signin-content">
            <p>
              Signing in will redirect you to the TMDB website to sign into your
              TMDB account or create an account through the TMDB website.
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;
