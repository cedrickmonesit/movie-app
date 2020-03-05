import React from "react";
import { connect } from "react-redux";

import { fetchMovieDetails, fetchCredits } from "../../actions";
import "./movieDetails.scss";
import PeopleCarousel from "./peoplecarousel/PeopleCarousel";

class MovieDetails extends React.Component {
  componentDidMount() {
    const id = this.props.match.params.id;
    this.props.fetchMovieDetails(id);
    this.props.fetchCredits(id);
    console.log(id);
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
          >
            <div className="movie-details-header-info-container"></div>
          </header>
          <main className="movie-details-main">
            <div className="movie-details-summary">
              <h2>Summary</h2>
              <p>{this.props.movie.overview}</p>
            </div>
            <PeopleCarousel credits={this.props.credits} />
          </main>
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
  return { movie: state.movieDetails, credits: state.creditsData.cast };
};

export default connect(mapStateToProps, { fetchMovieDetails, fetchCredits })(
  MovieDetails,
);
