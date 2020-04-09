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
import actorReducer from "./actorReducer";
import actorMoviesReducer from "./actorMoviesReducer";

//shows reducer
import tvPopularReducer from "./shows/tvPopularReducer";
import tvTopRatedReducer from "./shows/tvTopRatedReducer";
import tvOnAir from "./shows/tvOnAir";
import tvAiringToday from "./shows/tvAiringToday";
import tvTrending from "./shows/tvTrending";
import showDetailsReducer from "./shows/showDetailsReducer";
import showVideosReducer from "./shows/showVideosReducer";
import showCreditsReducer from "./shows/showCreditsReducer";
import showSimilarReducer from "./shows/showSimilarReducer";

//sign in
import signInTokenReducer from "./login/signInTokenReducer";
import signInSessionReducer from "./login/signInSessionReducer";
import signOutSessionReducer from "./login/signOutSessionReducer";

//account
import accountDetailsReducer from "./account/accountDetailsReducer";

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
  actorData: actorReducer,
  actorMoviesData: actorMoviesReducer,

  //shows
  tvPopularData: tvPopularReducer,
  tvTopRatedData: tvTopRatedReducer,
  tvOnAir: tvOnAir,
  tvAiringToday: tvAiringToday,
  tvTrending: tvTrending,
  showDetails: showDetailsReducer,
  showVideos: showVideosReducer,
  showCredits: showCreditsReducer,
  showSimilar: showSimilarReducer,

  //sign in
  signInToken: signInTokenReducer,
  signInSession: signInSessionReducer,
  signOutSession: signOutSessionReducer,

  //account
  accountDetails: accountDetailsReducer,
});
