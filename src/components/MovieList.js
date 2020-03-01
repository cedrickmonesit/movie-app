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

//filter data from redux store to use in the component as a prop
const mapStateToProps = state => {
  console.log(state, "state");
  return { movies: state.movieData.results, searchTerm: state.searchTerm };
  //this is setting what you want to call the data from the api just to use the data
};

//connect function from react-redux to access redux store and dispatch actions
export default connect(mapStateToProps, { fetchMovies, onInputChange })(
  MovieList,
);
