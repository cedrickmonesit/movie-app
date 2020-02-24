import React from "react";
import { connect } from "react-redux";

class MovieList extends React.Component {
  //TODO: on search submit fetch movies with search term
  /*componentDidMount() {
    this.props.fetchMovies(this.props.searchTerm); 
    //use action creator
  }*/

  renderImage(movie) {
    if (movie.poster_path) {
      return `http://image.tmdb.org/t/p/w185/${movie.poster_path}`;
    }
    return "https://in.bmscdn.com/iedb/movies/images/website/poster/large/ela-cheppanu-et00016781-24-03-2017-18-31-40.jpg";
  }

  //used for logic to render in render()
  //Having multiple posts auto generated
  renderList() {
    if (this.props.movies) {
      return this.props.movies.map(movie => {
        return (
          <React.Fragment key={movie.id}>
            <img src={this.renderImage(movie)} alt={movie.title} />
            <p>{movie.title}</p>
          </React.Fragment>
        );
      });
    }
    return "Search Movies";
  }

  render() {
    console.log(this.props);
    return <div>{this.renderList()}</div>; //render posts
  }
}

const mapStateToProps = state => {
  return { movies: state.movieData.results };
  //this is setting what you want to call the data from the api just to use the data
};

export default connect(mapStateToProps)(MovieList);
