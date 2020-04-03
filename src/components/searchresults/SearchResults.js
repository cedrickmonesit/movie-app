import React from "react";
import { connect } from "react-redux";

import { fetchMovies } from "../../actions";
import MovieList from "../movielist/MovieList";
import "./searchResults.scss";

class MovieCard extends React.Component {
  componentDidMount() {
    this.fetchData();
  }

  componentDidUpdate(prevProps) {
    if (
      prevProps.match.params.searchterm !== this.props.match.params.searchterm
    ) {
      this.fetchData();
    }
    window.scrollTo(0, 0);
  }

  fetchData() {
    //this makes sure that if the document is refreshed the component can fetch the data by itself according to the URL searchterm variable using Router
    if (this.props.match) {
      this.props.fetchMovies(this.props.match.params.searchterm);
    }
  }

  renderSearchTerm() {
    if (this.props.match) {
      return this.props.match.params.movie;
    }
  }

  render() {
    console.log(this.props);
    return (
      <div className="main-search-results">
        <h1>Search Results For {this.renderSearchTerm()}</h1>
        <MovieList movies={this.props.movies} />
      </div>
    );
  }
}

//filter data from redux store to use in the component as a prop
const mapStateToProps = state => {
  return { movies: state.movieData.results };
};

//connect function from react-redux to access redux store and dispatch actions
export default connect(mapStateToProps, { fetchMovies })(MovieCard);
