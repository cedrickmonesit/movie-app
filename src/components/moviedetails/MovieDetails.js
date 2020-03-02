import React from "react";
import { connect } from "react-redux";

import { fetchMovieDetails } from "../../actions";
import "./movieDetails.scss";

class MovieDetails extends React.Component {
  componentDidMount() {
    this.props.fetchMovieDetails(this.props.match.params.id);
    console.log(this.props.match.params.id);
  }

  renderDetails = () => {
    if (this.props.movie.backdrop_path) {
      return (
        <div className="movie-details">
          <header
            className="movie-details-header"
            style={{
              background: `linear-gradient(0deg, rgb(0, 0, 0) 5%, rgba(0, 0, 0, 0.45) 92%), url(https://image.tmdb.org/t/p/original/${this.props.movie.backdrop_path}) center/cover no-repeat border-box, rgb(255, 255, 255)`,
            }}
          ></header>

          <h1>{this.props.movie.title}</h1>
          <p>{this.props.movie.overview}</p>
        </div>
      );
    }
    return "";
  };
  render() {
    console.log(this.props);
    return <div> {this.renderDetails()}</div>;
  }
}

const mapStateToProps = state => {
  return { movie: state.movieDetails };
};

export default connect(mapStateToProps, { fetchMovieDetails })(MovieDetails);
