import React from "react";

import "./loader.scss";

//lazyload prop option
const Loader = (props) => {
  const loader = document.querySelector(".loader");

  const lazyload = () => {
    setTimeout(() => {
      loader.style.opacity = "0";
      setTimeout(() => {
        loader.classList.add("loader-hide");
      }, 2500);
    }, 2000);
  };

  //if lazyload is true the loader will become a lazyloader
  if (props.lazyload === true) {
    if (loader) {
      lazyload();
    }
  }
  return (
    <div className="loader">
      <div className="lds-ripple">
        <div></div>
        <div></div>
      </div>
    </div>
  );
};

export default Loader;
