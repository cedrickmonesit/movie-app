import React from "react";

import MovieList from "./MovieList";
import Carousel from "./carousel/Carousel";
import Trending from "./Trending";

const App = () => {
  return (
    <React.Fragment>
      <MovieList />
      <Carousel></Carousel> <Trending />
    </React.Fragment>
  );
};

export default App;
