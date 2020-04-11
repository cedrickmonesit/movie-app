import { FETCH_FAVORITE_SHOWS } from "../../actions/types";

export default (state = [], action) => {
  switch (action.type) {
    case FETCH_FAVORITE_SHOWS:
      return action.payload;
    default:
      return state;
  }
};
