import React from "react";
import { connect } from "react-redux";
import { FaStar, FaRegStar } from "react-icons/fa";
import Rating from "react-rating";

import {
  fetchShowDetails,
  fetchShowVideos,
  fetchShowCredits,
  fetchShowSimilar,
  fetchGenres,
} from "../../../actions";
import "../movieDetails.scss";
import TrailersCarousel from "../trailerscarousel/TrailersCarousel";
import PeopleCarousel from "../peoplecarousel/PeopleCarousel";
import Carousel from "../../carousel/Carousel";
import renderMovieGenres from "../../renderMovieGenres";

class ShowDetails extends React.Component {
  componentDidMount() {
    this.fetchData();
  }

  //checks if props changed compares it to previous props
  //checks if id is the same as previous id
  //the props being changed is the id in the URL to make the request to the api using id
  //scroll to the top
  componentDidUpdate(prevProps) {
    if (prevProps.match.params.id !== this.props.match.params.id) {
      this.fetchData();
    }
    window.scrollTo(0, 0);
  }

  //make api request using action creators
  fetchData() {
    const id = this.props.match.params.id;
    this.props.fetchShowDetails(id);
    this.props.fetchShowVideos(id);
    this.props.fetchShowCredits(id);
    this.props.fetchShowSimilar(id);
    this.props.fetchGenres();
    console.log(id);
  }

  renderSimilarShows(similar) {
    if (similar === undefined || similar.length === 0) {
      return null;
    }
    return (
      <div className="movie-details-carousel-container">
        <h1 className="movie-details-main-genre">Similar Shows</h1>
        <Carousel shows={similar} />
      </div>
    );
  }

  renderVideos(videos) {
    if (videos === undefined || videos.length === 0) {
      return null;
    }
    return (
      <div className="movie-details-carousel-container">
        <h1 className="movie-details-main-genre">Videos</h1>
        <TrailersCarousel trailers={videos} />
      </div>
    );
  }

  //if credits data have not loaded return nothing
  renderCredits(credits) {
    if (credits === undefined || credits.length === 0) {
      return null;
    }
    return (
      <div className="movie-details-carousel-container">
        <h1 className="movie-details-main-genre">Cast</h1>
        <PeopleCarousel credits={credits} />
      </div>
    );
  }

  //filter year/month/day from release date
  renderDate(releaseDate) {
    if (releaseDate) {
      const date = releaseDate.split("-");
      const year = date[0];
      return year;
    }
    return null;
  }

  renderDetails = () => {
    if (this.props.show) {
      return (
        <div className="movie-details">
          <header
            className="movie-details-header"
            style={{
              background: `linear-gradient(0deg, rgb(0, 0, 0) 5%, rgba(0, 0, 0, 0.45) 92%), url(https://image.tmdb.org/t/p/original/${this.props.show.backdrop_path}) center/cover no-repeat border-box, rgb(255, 255, 255)`,
            }}
          >
            <div className="movie-details-header-info-container">
              <img
                className="movie-details-poster"
                src={`http://image.tmdb.org/t/p/w500/${this.props.show.poster_path}`}
                alt={this.props.show.title}
              />
              <div className="movie-details-title">
                <h1>{this.props.show.title}</h1>
                <Rating
                  emptySymbol={
                    <FaRegStar className="movie-details-star-rating" />
                  }
                  fullSymbol={<FaStar className="movie-details-star-rating" />}
                  initialRating={this.props.show.vote_average / 2}
                  readonly
                />
                <p>
                  {`${this.props.show.status} | ${this.renderDate(
                    this.props.show.first_air_date,
                  )} |
                  ${this.props.show.original_language}`}
                </p>
                <p className="movie-details-summary-genres">
                  {renderMovieGenres(this.props.show.genres, this.props.genres)}
                </p>
              </div>
            </div>
          </header>
          <main className="movie-details-main">
            <div className="movie-details-summary">
              <h2>Summary</h2>
              <p>{this.props.show.overview}</p>
            </div>

            {this.renderVideos(this.props.videos)}

            {this.renderCredits(this.props.credits)}

            {this.renderSimilarShows(this.props.similar)}
          </main>
        </div>
      );
    }
    return;
  };
  render() {
    console.log(this.props);
    return <React.Fragment> {this.renderDetails()}</React.Fragment>;
  }
}

const mapStateToProps = (state) => {
  return {
    show: state.showDetails,
    credits: state.showCredits.cast,
    videos: state.showVideos.results,
    similar: state.showSimilar.results,
    genres: state.genresData.genres,
  };
};

export default connect(mapStateToProps, {
  fetchShowDetails,
  fetchShowVideos,
  fetchShowCredits,
  fetchShowSimilar,
  fetchGenres,
})(ShowDetails);
