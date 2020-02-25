import React from "react";
import { connect } from "react-redux";

import SearchBar from "./SearchBar";
import { onInputChange, fetchMovies } from "../actions";

class MovieList extends React.Component {
  renderImage(movie) {
    if (movie.poster_path) {
      return `http://image.tmdb.org/t/p/w185/${movie.poster_path}`;
    }
    return "https://in.bmscdn.com/iedb/movies/images/website/poster/large/ela-cheppanu-et00016781-24-03-2017-18-31-40.jpg";
  }

  renderList() {
    if (this.props.movies) {
      return this.props.movies.map(movie => {
        return (
          <React.Fragment key={movie.id}>
            <img src={this.renderImage(movie)} alt={movie.title} />
            <p>{movie.title}</p>
          </React.Fragment>
        );
      });
    }
    return "Search Movies";
  }

  render() {
    return (
      <div>
        <SearchBar
          searchTerm={this.props.searchTerm}
          fetchMovies={this.props.fetchMovies}
          onInputChange={this.props.onInputChange}
        />
        {this.renderList()}
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
