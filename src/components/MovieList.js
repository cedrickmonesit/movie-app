import React from "react";
import { connect } from "react-redux";

import SearchBar from "./SearchBar";
import { onInputChange, fetchMovies } from "../actions";
import MovieCard from "./moviecard/MovieCard";

class MovieList extends React.Component {
  render() {
    return (
      <div>
        <SearchBar
          searchTerm={this.props.searchTerm}
          fetchMovies={this.props.fetchMovies}
          onInputChange={this.props.onInputChange}
        />
        <MovieCard />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { movies: state.movieData.results, searchTerm: state.searchTerm };
  //this is setting what you want to call the data from the api just to use the data
};

export default connect(mapStateToProps, { fetchMovies, onInputChange })(
  MovieList,
);
