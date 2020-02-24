import { combineReducers } from "redux";

import movieReducers from "./movieReducer"; //import reducer
import searchTermReducer from "./searchTermReducer";

//take reducer put it inside to combineReducers
export default combineReducers({
  //this will be named in the state
  movieData: movieReducers,
  searchTerm: searchTermReducer,
});
