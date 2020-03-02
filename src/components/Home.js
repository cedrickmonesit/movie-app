import React from "react";
import "slick-carousel/slick/slick.scss";
import "slick-carousel/slick/slick-theme.scss";
import { connect } from "react-redux";
import Carousel from "./carousel/Carousel";
import ImageCarousel from "./carousel/ImageCarousel";

import {
  fetchTrending,
  fetchUpcoming,
  fetchTopRated,
  fetchNowPlaying,
} from "../actions";

class Home extends React.Component {
  //lifecycle method
  //when Home component mounts it will invoke these actions that fetch data from TMDB API
  componentDidMount() {
    this.props.fetchTrending();
    this.props.fetchUpcoming();
    this.props.fetchTopRated();
    this.props.fetchNowPlaying();
  }
  render() {
    console.log(this.props, "trending component");
    return (
      <div className="home-container">
        <ImageCarousel movies={this.props.nowPlaying} />

        <div>
          <h1>Upcoming</h1>
          <Carousel movies={this.props.upcoming} />
        </div>

        <div>
          <h1>Trending</h1>
          <Carousel movies={this.props.trending} />
        </div>

        <div>
          <h1>Top Rated</h1>
          <Carousel movies={this.props.topRated} />
        </div>
      </div>
    );
  }
}

//filter the data from the redux store to the Home component's props for passing onto the Carousel component as a prop
const mapStateToProps = state => {
  return {
    trending: state.trendingData.results,
    upcoming: state.upcomingData.results,
    topRated: state.topRatedData.results,
    nowPlaying: state.nowPlayingData.results,
  };
};

//connect function from react-redux to access redux store and dispatch actions
export default connect(mapStateToProps, {
  fetchTrending,
  fetchUpcoming,
  fetchTopRated,
  fetchNowPlaying,
})(Home);
