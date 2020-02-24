import React from "react";

class SearchBar extends React.Component {
  onInputChange = event => {
    //onInputChange function from props
    this.props.onInputChange(event.target.value);
  };

  onFormSubmit = event => {
    event.preventDefault(); //Prevents page from refresh on submit of form

    //reference MovieList Component for the props
    //fetchMovies function from props
    //searchTerm value from props
    this.props.fetchMovies(this.props.searchTerm);
    console.log(this.props);
  };

  render() {
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
