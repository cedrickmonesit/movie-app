import React from "react";
import "slick-carousel/slick/slick.scss";
import "slick-carousel/slick/slick-theme.scss";
import { connect } from "react-redux";

import { fetchTrending } from "../actions";

class Carousel extends React.Component {
  componentDidMount() {
    this.props.fetchTrending();
  }
  mapTrending() {
    if (this.props.trending) {
      return this.props.trending.map(movie => {
        return (
          //add slider props to this from redux
          <div key={movie.id}>
            <img
              className="slide-image"
              src={`http://image.tmdb.org/t/p/w185/${movie.poster_path}`}
              alt={movie.title}
            />
            <p>{movie.title}</p>
          </div>
        );
      });
    }
  }
  render() {
    //console.log(this.props, "trending component");
    return <React.Fragment> {this.mapTrending()}</React.Fragment>;
  }
}

//filter data from redux store to use in the component as a prop
const mapStateToProps = state => {
  return {
    trending: state.trendingData.results,
  };
};

export default connect(mapStateToProps, { fetchTrending })(Carousel);
