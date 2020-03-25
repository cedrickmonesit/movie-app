import React from "react";
import { Link } from "react-router-dom";
import { FaStar } from "react-icons/fa";

import "./movieCard.scss";

const MovieCard = props => {
  const renderCard = movies => {
    //if movies from api hasn't been loaded will render nothing, prevents error
    if (movies) {
      //loop through movies foreach movie return jsx
      return movies.map(movie => {
        if (movie.poster_path) {
          return (
            <div key={movie.id} className="movie-card">
              <Link to={`/details/movie/${movie.id}`}>
                <div className="movie-card-image-container">
                  <img
                    className="movie-card-image"
                    src={`http://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                    alt={movie.title}
                  />
                  <div className="movie-card-rating ">
                    <FaStar className="movie-card-star-rating" />
                    <p>{movie.vote_average}</p>
                  </div>
                </div>
                <p className="movie-card-title">{movie.title}</p>
              </Link>
            </div>
          );
        }
        return null;
      });
    }
    return null;
  };

  return renderCard(props.movies);
};

export default MovieCard;
