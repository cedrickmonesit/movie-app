import { combineReducers } from "redux";

import movieReducers from "./movieReducer"; //import reducer
import searchTermReducer from "./searchTermReducer";
import trendingReducer from "./trendingReducer";
import upcomingReducer from "./upcomingReducer";
import movieDetailsReducer from "./movieDetailsReducer";
import topRatedReducer from "./topRatedReducer";
import nowPlayingReducer from "./nowPlayingReducer";
import popularReducer from "./popularReducer";
import creditsReducer from "./creditsReducer";
import trailersReducer from "./trailersReducer";
import similarMoviesReducer from "./similarMoviesReducer";
import genresReducer from "./genresReducer";

//take reducer put it inside to combineReducers
export default combineReducers({
  //this will be named in the store
  movieData: movieReducers,
  searchTerm: searchTermReducer,
  trendingData: trendingReducer,
  upcomingData: upcomingReducer,
  movieDetails: movieDetailsReducer,
  topRatedData: topRatedReducer,
  nowPlayingData: nowPlayingReducer,
  popularData: popularReducer,
  creditsData: creditsReducer,
  trailersData: trailersReducer,
  similarMoviesData: similarMoviesReducer,
  genresData: genresReducer,
});
