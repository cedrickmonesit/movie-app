import React from "react";
import { Router, Route, Switch } from "react-router-dom";

import MovieList from "./MovieList";
import MovieDetails from "./MovieDetails";
import Home from "./Home";
import history from "../history";

const App = () => {
  return (
    <Router history={history}>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/moviedetails/:id" exact component={MovieDetails} />
        <Route path="/movielist" exact component={MovieList} />
      </Switch>
    </Router>
  );
};

export default App;
