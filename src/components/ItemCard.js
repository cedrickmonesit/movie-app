import React from "react";

//items prop for list of items
//item prop for one item in list of items
const ItemCard = props => {
  if (props.movies) {
    return props.movies.map(movie => {
      return (
        <React.Fragment key={movie.id}>
          <img src={this.renderImage(movie)} alt={movie.title} />
          <p>{movie.title}</p>
        </React.Fragment>
      );
    });
  }
  return "Search Movies";
};

export default ItemCard;
