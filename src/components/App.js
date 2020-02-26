import React from "react";

import MovieList from "./MovieList";
import Carousel from "./carousel/Carousel";

const App = () => {
  return (
    <React.Fragment>
      <MovieList />
      <Carousel />
    </React.Fragment>
  );
};

export default App;
