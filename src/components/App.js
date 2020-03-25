import React from "react";
import { Router, Route, Switch } from "react-router-dom";

import Navigation from "./navigation/Navigation";
import SearchResults from "./searchresults/SearchResults";
import MovieDetails from "./moviedetails/MovieDetails";
import ActorDetails from "./actorDetails/ActorDetails";
import Home from "./home/Home";
import Footer from "./footer/Footer";
import history from "../history";

const App = () => {
  //these routes are from Router used to navigate the one page app
  //navigation is using history.push and Link tags to show components
  return (
    <Router history={history}>
      <Navigation />
      <div className="main">
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/details/movie/:id" exact component={MovieDetails} />
          <Route path="/details/actor/:id" exact component={ActorDetails} />
          <Route
            path="/list/search/movies/:movie"
            exact
            component={SearchResults}
          />
        </Switch>
      </div>
      <Footer />
    </Router>
  );
};

export default App;
