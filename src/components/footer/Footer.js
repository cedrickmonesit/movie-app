import React from "react";

import "./footer.scss";
import TMDB from "../../images/TMDB.png";

const Footer = () => {
  return (
    <div className="main-footer">
      <section className="main-footer-top">
        <header className="main-footer-top-header">
          <h2>Film Flix</h2>
          <nav>Nav</nav>
        </header>
        <div className="main-footer-item">portfolio: cedrickmonesit.xyz</div>
        <div className="main-footer-item">phone number: 508-494-4306</div>
        <p className="main-footer-top-copyright">
          Copyright @2020 <br />
          Code and design by
          <a
            className="main-footer-copyright-name"
            href="https://github.com/cedrickmonesit"
            rel="noopener noreferrer"
            target="_blank"
          >
            Cedrick Monesit
          </a>
        </p>
      </section>
      <section className="main-footer-bottom">
        <div>
          <a
            href="https://www.themoviedb.org/"
            alt="TMDB anchor tag"
            rel="noopener noreferrer"
            target="_blank"
          >
            <img className="main-footer-tmdb-logo" src={TMDB} alt="TMDB Logo" />
          </a>
        </div>
        <div>Social Media</div>
      </section>
    </div>
  );
};

export default Footer;
