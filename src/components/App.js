import React from "react";
import { Router, Route, Switch } from "react-router-dom";

import Navigation from "./navigation/Navigation";
import MovieList from "./MovieList";
import MovieDetails from "./moviedetails/MovieDetails";
import Home from "./Home";
import history from "../history";

const App = () => {
  return (
    <Router history={history}>
      <Navigation />
      <div className="main">
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/moviedetails/:id" exact component={MovieDetails} />
          <Route path="/movielist" exact component={MovieList} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
