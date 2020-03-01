import React from "react";

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
    this.props.fetchMovies(this.props.searchTerm);
    console.log(this.props);
  };

  render() {
    //onInputChange is from props
    return (
      <div>
        <form onSubmit={this.onFormSubmit}>
          <div>
            <label>Search</label>
            <input
              type="text"
              value={this.props.searchTerm}
              onChange={this.onInputChange}
            />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
