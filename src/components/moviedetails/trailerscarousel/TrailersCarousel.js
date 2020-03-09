import React from "react";
import Carousel from "@brainhubeu/react-carousel";
import "@brainhubeu/react-carousel/lib/style.css";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

import "./trailerscarousel.scss";

class TrailerCarousel extends React.Component {
  mapMovies() {
    if (this.props.trailers) {
      //loops through movies foreach movie returns jsx
      return this.props.trailers.map(trailer => {
        if (trailer.key) {
          return (
            <div key={trailer.id} className=" trailer-slide">
              <iframe
                title="1"
                src={`https://www.youtube.com/embed/${trailer.key}`}
                allowFullScreen
              ></iframe>
            </div>
          );
        }
        return "";
      });
    }
    return "";
  }

  render() {
    const settings = {
      slidesPerPage: 3,
      slidesPerScroll: 3,
      infinite: true,
      animationSpeed: 500,
      arrows: true,
      breakpoints: {
        1150: {
          slidesPerPage: 2,
          slidesPerScroll: 2,
        },
        900: {
          slidesPerPage: 1,
          slidesPerScroll: 1,
        },
      },
    };

    return (
      <Carousel
        className="trailer-carousel"
        {...settings}
        arrowLeft={<FaChevronLeft className="carousel-arrow-left" />}
        arrowRight={<FaChevronRight className="carousel-arrow-right" />}
        addArrowClickHandler
      >
        {this.mapMovies()}
      </Carousel>
    );
  }
}

export default TrailerCarousel;
