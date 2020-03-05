import React from "react";

import "./footer.scss";

const Footer = () => {
  return (
    <div className="main-footer">
      <section className="main-footer-top">
        <header className="main-footer-top-header">
          <h2>Title</h2>
          <nav>Nav</nav>
        </header>
        <div className="main-footer-item">portfolio: cedrickmonesit.com</div>
        <div className="main-footer-item">phone number: 000-000-0000</div>
        <p className="main-footer-top-copyright">
          Copyright @2020 <br />
          Code and design by <a href="/"> Cedrick Monesit</a>
        </p>
      </section>
      <section className="main-footer-bottom">
        <div>TMDB Logo</div>
        <div>Social Media</div>
      </section>
    </div>
  );
};

export default Footer;
