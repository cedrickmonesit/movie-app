import React from "react";
import Carousel from "@brainhubeu/react-carousel";
import "@brainhubeu/react-carousel/lib/style.css";
import { Link } from "react-router-dom";

import "./carousel.scss";

class MovieCarousel extends React.Component {
  mapMovies() {
    if (this.props.movies) {
      //loops through movies foreach movie returns jsx
      return this.props.movies.map(movie => {
        return (
          <div key={movie.id} className="slide">
            <Link to={`/moviedetails/${movie.id}`}>
              <img
                className="slide-image"
                src={`http://image.tmdb.org/t/p/w185/${movie.poster_path}`}
                alt={movie.title}
              />
              <div className="slide-title">
                <p>{movie.title}</p>
              </div>
            </Link>
          </div>
        );
      });
    }
  }

  render() {
    const settings = {
      slidesPerPage: 6,
      slidesPerScroll: 6,
      infinite: true,
      animationSpeed: 500,
      arrows: true,
      breakpoints: {
        1000: {
          slidesPerPage: 5,
          slidesPerScroll: 5,
        },
        800: {
          slidesPerPage: 4,
          slidesPerScroll: 4,
        },
        650: {
          slidesPerPage: 3,
          slidesPerScroll: 3,
        },
      },
    };
    return <Carousel {...settings}>{this.mapMovies()}</Carousel>;
  }
}

export default MovieCarousel;
