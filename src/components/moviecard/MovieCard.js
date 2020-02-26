import React from "react";
import { connect } from "react-redux";

//items prop for list of items
const MovieCard = props => {
  const renderCard = () => {
    if (props.movies) {
      return props.movies.map(movie => {
        if (movie.poster_path) {
          return (
            <div key={movie.id}>
              <img
                src={`http://image.tmdb.org/t/p/w185/${movie.poster_path}`}
                alt={movie.title}
              />
              <p>{movie.title}</p>
            </div>
          );
        }
        return " ";
      });
    }
    return " ";
  };
  return renderCard();
};

const mapStateToProps = state => {
  return { movies: state.movieData.results };
};

export default connect(mapStateToProps)(MovieCard);
