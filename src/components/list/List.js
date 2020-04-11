import React from "react";

import Card from "../card/Card";
import "./list.scss";

class List extends React.Component {
  //if this.props.match exists which means not falsey return jsx else return nothing
  //this.props.match is from Router provides movie name that the user searched
  //must pass in movies prop or it will return null
  renderSearchList() {
    if (this.props.items) {
      return (
        <React.Fragment>
          <div className="movie-list-container">
            <Card type={this.props.type} items={this.props.items} />
          </div>
        </React.Fragment>
      );
    }

    return null;
  }

  render() {
    return <div className="movie-list">{this.renderSearchList()}</div>;
  }
}

export default List;
