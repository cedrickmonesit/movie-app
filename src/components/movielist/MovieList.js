import React from "react";

import MovieCard from "../moviecard/MovieCard";
import "./movielist.scss";

class MovieList extends React.Component {
  render() {
    const searchTerm = this.props.match.params.movie;
    return (
      <div className="movie-list">
        <h1> Search Results For {searchTerm}</h1>
        <div className="movie-list-container">
          <MovieCard searchTerm={searchTerm} />
        </div>
      </div>
    );
  }
}

export default MovieList;
