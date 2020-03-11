import React from "react";
import { connect } from "react-redux";
import { FaStar, FaRegStar } from "react-icons/fa";
import Rating from "react-rating";

import {
  fetchMovieDetails,
  fetchCredits,
  fetchTrailers,
  fetchSimilarMovies,
  fetchGenres,
} from "../../actions";
import "./movieDetails.scss";
import TrailersCarousel from "./trailerscarousel/TrailersCarousel.js";
import PeopleCarousel from "./peoplecarousel/PeopleCarousel";
import Carousel from "../carousel/Carousel";

class MovieDetails extends React.Component {
  componentDidMount() {
    this.fetchData();
  }

  componentDidUpdate(prevProps) {
    if (prevProps.match.params.id !== this.props.match.params.id) {
      this.fetchData();
    }
    window.scrollTo(0, 0);
  }

  fetchData() {
    const id = this.props.match.params.id;
    this.props.fetchMovieDetails(id);
    this.props.fetchCredits(id);
    this.props.fetchTrailers(id);
    this.props.fetchSimilarMovies(id);
    this.props.fetchGenres();
    console.log(id);
  }

  renderSimilarMovies(similarMovies) {
    if (similarMovies === undefined || similarMovies.length === 0) {
      return "";
    }
    return (
      <div className="movie-details-carousel-container">
        <h1 className="movie-details-main-genre">Similar Movies</h1>
        <Carousel movies={similarMovies} />
      </div>
    );
  }

  renderTrailers(trailers) {
    if (trailers === undefined || trailers.length === 0) {
      return "";
    }
    return (
      <div className="movie-details-carousel-container">
        <h1 className="movie-details-main-genre">Trailers</h1>
        <TrailersCarousel trailers={trailers} />
      </div>
    );
  }

  renderCredits(credits) {
    if (credits === undefined || credits.length === 0) {
      return "";
    }
    return (
      <div className="movie-details-carousel-container">
        <h1 className="movie-details-main-genre">Cast</h1>
        <PeopleCarousel credits={credits} />
      </div>
    );
  }

  //filter the genres that the movie has compare it to the genres in the api request
  renderMovieGenres(movieGenres) {
    if (movieGenres && this.props.genres) {
      return movieGenres.map(movieGenre => {
        return this.props.genres.map(genre => {
          if (movieGenre.id === genre.id) {
            return `${genre.name} | `;
          }
          return null;
        });
      });
    }
    return null;
  }

  renderDetails = () => {
    if (this.props.movie) {
      return (
        <div className="movie-details">
          <header
            className="movie-details-header"
            style={{
              background: `linear-gradient(0deg, rgb(0, 0, 0) 5%, rgba(0, 0, 0, 0.45) 92%), url(https://image.tmdb.org/t/p/original/${this.props.movie.backdrop_path}) center/cover no-repeat border-box, rgb(255, 255, 255)`,
            }}
          >
            <div className="movie-details-header-info-container">
              <img
                className="movie-details-poster"
                src={`http://image.tmdb.org/t/p/w500/${this.props.movie.poster_path}`}
                alt={this.props.movie.title}
              />
              <div className="movie-details-title">
                <h1>{this.props.movie.title}</h1>
                <Rating
                  emptySymbol={
                    <FaRegStar className="movie-details-star-rating" />
                  }
                  fullSymbol={<FaStar className="movie-details-star-rating" />}
                  initialRating={this.props.movie.vote_average / 2}
                  readonly
                />
                <p>
                  {`${this.props.movie.status} |
                  ${this.props.movie.original_language}`}
                </p>
                <p className="movie-details-summary-genres">
                  {this.renderMovieGenres(this.props.movie.genres)}
                </p>
              </div>
            </div>
          </header>
          <main className="movie-details-main">
            <div className="movie-details-summary">
              <h2>Summary</h2>
              <p>{this.props.movie.overview}</p>
            </div>

            {this.renderTrailers(this.props.trailers)}

            {this.renderCredits(this.props.credits)}

            {this.renderSimilarMovies(this.props.similarMovies)}
          </main>
        </div>
      );
    }
    return;
  };
  render() {
    console.log(this.props);
    return <div> {this.renderDetails()}</div>;
  }
}

const mapStateToProps = state => {
  return {
    movie: state.movieDetails,
    credits: state.creditsData.cast,
    trailers: state.trailersData.results,
    similarMovies: state.similarMoviesData.results,
    genres: state.genresData.genres,
  };
};

export default connect(mapStateToProps, {
  fetchMovieDetails,
  fetchCredits,
  fetchTrailers,
  fetchSimilarMovies,
  fetchGenres,
})(MovieDetails);
