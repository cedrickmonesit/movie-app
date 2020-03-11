import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { FaStar } from "react-icons/fa";

import { fetchMovies } from "../../actions";
import "./movieCard.scss";

class MovieCard extends React.Component {
  componentDidMount() {
    this.props.fetchMovies(this.props.searchTerm);
    console.log(this.props, "moviecard");
  }

  renderCard() {
    //if movies from api hasn't been loaded will render nothing, prevents error
    if (this.props.movies) {
      //loop through movies foreach movie return jsx
      return this.props.movies.map(movie => {
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
                <p>{movie.title}</p>
              </Link>
            </div>
          );
        }
        return " ";
      });
    }
    return " ";
  }
  render() {
    return this.renderCard();
  }
}

//filter data from redux store to use in the component as a prop
const mapStateToProps = state => {
  return { movies: state.movieData.results };
};

//connect function from react-redux to access redux store and dispatch actions
export default connect(mapStateToProps, { fetchMovies })(MovieCard);
