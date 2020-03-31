import React from "react";
import Carousel from "@brainhubeu/react-carousel";
import "@brainhubeu/react-carousel/lib/style.css";
import { Link } from "react-router-dom";
import { FaChevronLeft, FaChevronRight, FaStar } from "react-icons/fa";

import "./carousel.scss";

class MovieShowCarousel extends React.Component {
  //render the ratings for this movie
  renderRating(movie) {
    if (movie.vote_average) {
      return (
        <div className="slide-movie-rating">
          <FaStar className="carousel-star-rating" />
          <p>{movie.vote_average}</p>
        </div>
      );
    }
    return;
  }

  renderMovies() {
    if (this.props.movies) {
      //loops through movies foreach movie returns jsx
      return this.props.movies.map(movie => {
        return (
          <div key={movie.id} className="slide">
            <Link to={`/details/movie/${movie.id}`}>
              <div className="carousel-image-container">
                <img
                  className="slide-image"
                  src={`http://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                  alt={movie.title}
                />
                {this.renderRating(movie)}
              </div>

              <div className="slide-title">
                <p>{movie.title}</p>
              </div>
            </Link>
          </div>
        );
      });
    }
  }

  renderShows() {
    if (this.props.shows) {
      //loops through movies foreach movie returns jsx
      return this.props.shows.map(show => {
        return (
          <div key={show.id} className="slide">
            <Link to={`/details/movie/${show.id}`}>
              <div className="carousel-image-container">
                <img
                  className="slide-image"
                  src={`http://image.tmdb.org/t/p/w500/${show.poster_path}`}
                  alt={show.name}
                />
                {this.renderRating(show)}
              </div>

              <div className="slide-title">
                <p>{show.name}</p>
              </div>
            </Link>
          </div>
        );
      });
    }
  }

  render() {
    //settings for this carousel
    const settings = {
      slidesPerPage: 6,
      slidesPerScroll: 6,
      infinite: true,
      animationSpeed: 500,
      arrows: true,
      breakpoints: {
        1150: {
          slidesPerPage: 5,
          slidesPerScroll: 5,
        },
        980: {
          slidesPerPage: 4,
          slidesPerScroll: 4,
        },
        850: {
          slidesPerPage: 3,
          slidesPerScroll: 3,
        },
        350: {
          slidesPerPage: 2,
          slidesPerScroll: 2,
        },
        200: {
          slidesPerPage: 1,
          slidesPerScroll: 1,
        },
      },
    };
    if (this.props.movies) {
      return (
        <Carousel
          {...settings}
          arrowLeft={<FaChevronLeft className="carousel-arrow-left" />}
          arrowRight={<FaChevronRight className="carousel-arrow-right" />}
          addArrowClickHandler
        >
          {this.renderMovies()}
        </Carousel>
      );
    } else if (this.props.shows) {
      return (
        <Carousel
          {...settings}
          arrowLeft={<FaChevronLeft className="carousel-arrow-left" />}
          arrowRight={<FaChevronRight className="carousel-arrow-right" />}
          addArrowClickHandler
        >
          {this.renderShows()}
        </Carousel>
      );
    }
    return null;
  }
}

export default MovieShowCarousel;
