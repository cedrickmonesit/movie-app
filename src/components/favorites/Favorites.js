import React from "react";
import { connect } from "react-redux";

import { fetchFavoriteMovies, fetchFavoriteShows } from "../../actions";
import MovieList from "../list/List";
import "./favorites.scss";

//login page
class Favorites extends React.Component {
  //need to fetch the data of genres and nowplaying movies
  componentDidMount() {
    this.props.fetchFavoriteMovies();
    this.props.fetchFavoriteShows();
  }

  renderFavorites() {
    return (
      <React.Fragment>
        <h1>Movies</h1>
        <MovieList items={this.props.movies} />
        <h1>Shows</h1>
        <MovieList items={this.props.shows} type="shows" />
      </React.Fragment>
    );
  }

  //login is reusing the imagecarousel component resized
  render() {
    console.log(this.props);

    return (
      <div className="main-favorites">
        <h1>Favorites</h1>
        {this.renderFavorites()}
      </div>
    );
  }
}

//getting the nowplaying movies and genres for each movie
const mapStateToProps = (state) => {
  return {
    movies: state.favoriteMovies,
    shows: state.favoriteShows,
  };
};

export default connect(mapStateToProps, {
  fetchFavoriteMovies,
  fetchFavoriteShows,
})(Favorites);
