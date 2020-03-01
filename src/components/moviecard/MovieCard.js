import React from "react";
import { connect } from "react-redux";

const MovieCard = props => {
  const renderCard = () => {
    //if movies from api hasn't been loaded will render nothing, prevents error
    if (props.movies) {
      //loop through movies foreach movie return jsx
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

//filter data from redux store to use in the component as a prop
const mapStateToProps = state => {
  return { movies: state.movieData.results };
};

//connect function from react-redux to access redux store and dispatch actions
export default connect(mapStateToProps)(MovieCard);
