import React from "react";
import { FaSearch } from "react-icons/fa";

import "./searchbar.scss";

//reference MovieList Component, for the props being used
class SearchBar extends React.Component {
  onInputChange = event => {
    //onInputChange function from props
    //onInputChange is an action creator
    this.props.onInputChange(event.target.value);
  };

  onFormSubmit = event => {
    event.preventDefault(); //Prevents page from refresh on submit of the form

    //fetchMovies function is from props
    //fetchMovies is an action creator
    //searchTerm value is from props
    if (this.props.searchTerm) {
      this.props.fetchMovies(this.props.searchTerm);
    }
    return "";
  };

  render() {
    //onInputChange is from props
    return (
      <form onSubmit={this.onFormSubmit} className="searchbar">
        <input
          className="searchbar-input"
          placeholder="search..."
          type="text"
          value={this.props.searchTerm}
          onChange={this.onInputChange}
        />
        <button type="submit">
          <FaSearch className="icon-search" />
        </button>
      </form>
    );
  }
}

export default SearchBar;
