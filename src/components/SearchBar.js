import React from "react";

class SearchBar extends React.Component {
  onInputChange = event => {
    //onInputChange function from props
    this.props.onInputChange(event.target.value);
  };

  onFormSubmit = event => {
    event.preventDefault(); //Prevents page from refresh on submit of the form

    //reference MovieList Component for the props being used
    //fetchMovies function is from props
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
