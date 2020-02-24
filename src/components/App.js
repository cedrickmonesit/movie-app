import React from "react";
import MovieList from "./MovieList";
import SearchBar from "./SearchBar";

const App = () => {
  return (
    <div className="ui container">
      <SearchBar />
      <MovieList />
    </div>
  );
};

export default App;
