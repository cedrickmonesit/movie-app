import React from "react";

import MovieList from "./MovieList";
import Home from "./Home";

const App = () => {
  return (
    //Fragment does not create a div around Home component
    <React.Fragment>
      <Home />
      <MovieList />
    </React.Fragment>
  );
};

export default App;
