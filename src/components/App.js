import React from "react";
import { Router, Route, Switch } from "react-router-dom";

import Navigation from "./navigation/Navigation";
import SearchResults from "./searchresults/SearchResults";
import MovieDetails from "./moviedetails/MovieDetails";
import ActorDetails from "./actorDetails/ActorDetails";
import Shows from "./home/Shows";
import Home from "./home/Home";
import Login from "./login/Login";
import Approval from "./login/Approval";
import Account from "./account/Account";
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
          <Route path="/user/signin" exact component={Login} />
          <Route path="/user/approval" exact component={Approval} />
          <Route path="/user/account" exact component={Account} />
          <Route path="/details/movie/:id" exact component={MovieDetails} />
          <Route path="/details/actor/:id" exact component={ActorDetails} />
          <Route
            path="/list/search/results/:searchterm"
            exact
            component={SearchResults}
          />
          <Route path="/shows" exact component={Shows} />
        </Switch>
      </div>
      <Footer />
    </Router>
  );
};

export default App;
