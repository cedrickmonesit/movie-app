import React from "react";
import { Link } from "react-router-dom";
import { FaStar } from "react-icons/fa";

import "./card.scss";

//you must say if the shows props is true so if you are passing an array of shows shows={true}
const Card = (props) => {
  const renderCard = (items) => {
    //if movies or shows from api hasn't been loaded will render nothing, prevents error
    if (items) {
      //loop through movies or shows foreach movie return jsx
      return items.map((item) => {
        if (props.type === "shows" || item.media_type === "tv") {
          if (item.poster_path) {
            return (
              <div key={item.id} className="movie-card">
                <Link to={`/details/show/${item.id}`}>
                  <div className="movie-card-image-container">
                    <img
                      className="movie-card-image"
                      src={`http://image.tmdb.org/t/p/w500/${item.poster_path}`}
                      alt={item.title}
                    />
                    <div className="movie-card-rating ">
                      <FaStar className="movie-card-star-rating" />
                      <p>{item.vote_average}</p>
                    </div>
                  </div>
                  <p className="movie-card-title">{item.name}</p>
                </Link>
              </div>
            );
          }
        }
        if (item.poster_path) {
          return (
            <div key={item.id} className="movie-card">
              <Link to={`/details/movie/${item.id}`}>
                <div className="movie-card-image-container">
                  <img
                    className="movie-card-image"
                    src={`http://image.tmdb.org/t/p/w500/${item.poster_path}`}
                    alt={item.title}
                  />
                  <div className="movie-card-rating ">
                    <FaStar className="movie-card-star-rating" />
                    <p>{item.vote_average}</p>
                  </div>
                </div>
                <p className="movie-card-title">{item.title}</p>
              </Link>
            </div>
          );
        }
        return null;
      });
    }
    return null;
  };
  return renderCard(props.items);
};

export default Card;
