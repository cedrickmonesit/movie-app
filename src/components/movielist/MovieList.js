import React from "react";

import MovieCard from "../moviecard/MovieCard";

class MovieList extends React.Component {
  render() {
    return (
      <div className="Movie-List-Container">
        <MovieCard />
      </div>
    );
  }
}

export default MovieList;
