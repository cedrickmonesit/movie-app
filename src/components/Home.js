import React from "react";
import "slick-carousel/slick/slick.scss";
import "slick-carousel/slick/slick-theme.scss";
import { connect } from "react-redux";
import Carousel from "./carousel/Carousel";

import { fetchTrending, fetchUpcoming } from "../actions";

class Home extends React.Component {
  componentDidMount() {
    this.props.fetchTrending();
    this.props.fetchUpcoming();
  }
  render() {
    console.log(this.props, "trending component");
    return (
      <div>
        <div>
          <h1>Trending</h1>
        </div>
        <Carousel movies={this.props.trending} />
        <div>
          <h1>Upcoming</h1>
        </div>
        <Carousel movies={this.props.upcoming} />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    trending: state.trendingData.results,
    upcoming: state.upcomingData.results,
  };
};

export default connect(mapStateToProps, { fetchTrending, fetchUpcoming })(Home);
