import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import Carousel from "../carousel/Carousel";
import ImageCarousel from "../carousel/ImageCarousel";
//import action creators
import {
  fetchGenres,
  fetchTvPopular,
  fetchTvTopRated,
  fetchTvAiringToday,
  fetchTvOnAir,
  fetchTvTrending,
} from "../../actions";

class Shows extends React.Component {
  componentDidMount() {
    //shows
    this.props.fetchGenres();
    this.props.fetchTvPopular();
    this.props.fetchTvTopRated();
    this.props.fetchTvOnAir();
    this.props.fetchTvAiringToday();
    this.props.fetchTvTrending();
  }

  render() {
    const { shows, genres } = this.props;
    return (
      <div className="home-container">
        <div className="home-container-image-carousel">
          <ImageCarousel
            shows={shows.airingToday}
            genres={genres}
            title="Airing Today"
          />
        </div>

        <div className="home-container-movie-show-buttons">
          <Link className="home-container-movies-button" to="/">
            Movies
          </Link>
          <Link className="home-container-shows-button" to="/shows">
            Shows
          </Link>
        </div>

        <div className="home-container-carousel">
          <h1 className="home-container-genre">Popular</h1>
          <Carousel shows={shows.popular} />
          <hr className="home-container-coursel__separator" />
        </div>

        <div className="home-container-carousel">
          <h1 className="home-container-genre">Trending</h1>
          <Carousel shows={shows.trending} />
          <hr className="home-container-coursel__separator" />
        </div>

        <div className="home-container-carousel">
          <h1 className="home-container-genre">On Air</h1>
          <Carousel shows={shows.onAir} />
          <hr className="home-container-coursel__separator" />
        </div>

        <div className="home-container-carousel">
          <h1 className="home-container-genre">Top Rated</h1>
          <Carousel shows={shows.topRated} />
        </div>
      </div>
    );
  }
}

//filter the data from the redux store to the Home component's props for passing onto the Carousel component as props
const mapStateToProps = state => {
  return {
    shows: {
      trending: state.tvTrending.results,
      popular: state.tvPopularData.results,
      topRated: state.tvTopRatedData.results,
      airingToday: state.tvAiringToday.results,
      onAir: state.tvOnAir.results,
    },

    genres: state.genresData.genres,
  };
};

//connect function from react-redux to access redux store and dispatch actions
export default connect(mapStateToProps, {
  fetchGenres,
  fetchTvPopular,
  fetchTvTopRated,
  fetchTvAiringToday,
  fetchTvOnAir,
  fetchTvTrending,
})(Shows);
