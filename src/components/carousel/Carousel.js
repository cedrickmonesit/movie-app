import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.scss";
import "slick-carousel/slick/slick-theme.scss";
import { connect } from "react-redux";

import "./carousel.scss";
import { fetchTrending } from "../../actions";

class Carousel extends React.Component {
  componentDidMount() {
    this.props.fetchTrending();
  }
  mapTrending() {
    if (this.props.trending) {
      return this.props.trending.map(movie => {
        return (
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
    console.log(this.props.trending);
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 4,
      className: "slides",
    };

    return (
      <div className="slider-container">
        <Slider {...settings}>{this.mapTrending()}</Slider>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { trending: state.trendingData.results };
};

export default connect(mapStateToProps, { fetchTrending })(Carousel);
