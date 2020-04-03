import React from "react";

import MovieCard from "../moviecard/MovieCard";
import "./movielist.scss";

class MovieList extends React.Component {
  //if this.props.match exists which means not falsey return jsx else return nothing
  //this.props.match is from Router provides movie name that the user searched
  //must pass in movies prop or it will return null
  renderSearchList() {
    if (this.props.movies) {
      return (
        <React.Fragment>
          <div className="movie-list-container">
            <MovieCard movies={this.props.movies} />
          </div>
        </React.Fragment>
      );
    }

    return null;
  }

  render() {
    return <div className="movie-list">{this.renderSearchList()}</div>;
  }
}

export default MovieList;
