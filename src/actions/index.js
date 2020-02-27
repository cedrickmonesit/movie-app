import TMDB, { KEY } from "../apis/TMDB"; //Import API & API Key

//action creator
//Applying redux-thunk to action creator that is async await to request API
export const fetchMovies = searchTerm => async dispatch => {
  const response = await TMDB.get(
    `/search/movie?api_key=${KEY}&query=${searchTerm}`,
  );

  dispatch({ type: "FETCH_MOVIES", payload: response.data });
};

//action creator
//searchBar action
export const onSearchSubmit = searchTerm => {
  return {
    type: "CURRENT_TERM",
    payload: searchTerm,
  };
};

//action creator
//onInputChange action
export const onInputChange = searchTerm => {
  return {
    type: "ON_INPUT_CHANGE",
    payload: searchTerm,
  };
};

//action creator
//Trending Movies action
export const fetchTrending = () => async dispatch => {
  const response = await TMDB.get(
    `https://api.themoviedb.org/3/trending/movie/week?api_key=${KEY}`,
  );

  dispatch({ type: "FETCH_TRENDING", payload: response.data });
};

//action creator
//Upcoming Movies action
export const fetchUpcoming = () => async dispatch => {
  const response = await TMDB.get(
    `https://api.themoviedb.org/3/movie/upcoming?api_key=${KEY}`,
  );

  dispatch({ type: "FETCH_UPCOMING", payload: response.data });
};
