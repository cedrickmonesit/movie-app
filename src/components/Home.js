import React from "react";
import "slick-carousel/slick/slick.scss";
import "slick-carousel/slick/slick-theme.scss";
import { connect } from "react-redux";
import Carousel from "./carousel/Carousel";

import { fetchTrending, fetchUpcoming } from "../actions";

class Home extends React.Component {
  //lifecycle method
  //when Home component mounts it will invoke these actions that fetch data from TMDB API
  componentDidMount() {
    this.props.fetchTrending();
    this.props.fetchUpcoming();
  }
  render() {
    console.log(this.props, "trending component");
    return (
      <React.Fragment>
        <div>
          <h1>Upcoming</h1>
        </div>
        <Carousel movies={this.props.upcoming} />
        <div>
          <h1>Trending</h1>
        </div>
        <Carousel movies={this.props.trending} />
      </React.Fragment>
    );
  }
}

//filter the data from the redux store to the Home component's props for passing onto the Carousel component as a prop
const mapStateToProps = state => {
  return {
    trending: state.trendingData.results,
    upcoming: state.upcomingData.results,
  };
};

//connect function from react-redux to access redux store and dispatch actions
export default connect(mapStateToProps, { fetchTrending, fetchUpcoming })(Home);
