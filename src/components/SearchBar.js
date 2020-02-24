import React from "react";
import { connect } from "react-redux";

import { onInputChange, fetchMovies } from "../actions";

class SearchBar extends React.Component {
  //This sets the state to the input
  onInputChange = event => {
    this.props.onInputChange(event.target.value);
  };

  //This will send the input to App component for the API request
  onFormSubmit = event => {
    event.preventDefault(); //Prevents page from refresh entering return key

    //TODO: make sure to call callback from parent APP component
    this.props.fetchMovies(this.props.searchTerm);
    console.log(this.props);
  };

  render() {
    return (
      <div>
        <form onSubmit={this.onFormSubmit}>
          <div>
            <label>Video Search</label>
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

const mapStateToProps = state => {
  return { searchTerm: state.searchTerm };
};

export default connect(mapStateToProps, { fetchMovies, onInputChange })(
  SearchBar,
);
