import React from "react";
import Carousel from "@brainhubeu/react-carousel";
import "@brainhubeu/react-carousel/lib/style.css";
import { Link } from "react-router-dom";

import "./imageCarousel.scss";

class MovieCarousel extends React.Component {
  mapMovies() {
    if (this.props.movies) {
      //loops through movies foreach movie returns jsx
      return this.props.movies.map(movie => {
        return (
          <div key={movie.id} className="img-slide">
            <Link to={`/moviedetails/${movie.id}`}>
              <div
                className="img-slide-image"
                style={{
                  background: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(http://image.tmdb.org/t/p/original/${movie.backdrop_path}) center/cover no-repeat border-box, rgb(255, 255, 255)`,
                }}
              >
                <div>
                  <p className="swiper-slide__category">Now Playing</p>
                  <h2 className="swiper-slide__title"> {movie.title}</h2>
                  <p className="swiper-slide__genre">Genre</p>
                </div>
              </div>
            </Link>
          </div>
        );
      });
    }
  }

  render() {
    const settings = {
      autoPlay: 4000,
      slidesPerPage: 1,
      slidesPerScroll: 1,
      infinite: true,
      animationSpeed: 500,
      arrows: false,
    };
    return <Carousel {...settings}>{this.mapMovies()}</Carousel>;
  }
}

export default MovieCarousel;
