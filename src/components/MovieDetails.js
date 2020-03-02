import React from "react";
import { connect } from "react-redux";

import { fetchMovieDetails } from "../actions";

//reference MovieList Component, for the props being used
class MovieDetails extends React.Component {
  componentDidMount() {
    this.props.fetchMovieDetails(this.props.match.params.id);
    console.log(this.props.match.params.id);
  }
  render() {
    console.log(this.props);
    return (
      <div>
        <img
          src={`https://image.tmdb.org/t/p/original/${this.props.movie.backdrop_path}`}
        />
        <h1>{this.props.movie.title}</h1>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { movie: state.movieDetails };
};

export default connect(mapStateToProps, { fetchMovieDetails })(MovieDetails);
