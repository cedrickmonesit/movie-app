import { FETCH_FAVORITE_MOVIES } from "../../actions/types";

export default (state = [], action) => {
  switch (action.type) {
    case FETCH_FAVORITE_MOVIES:
      return action.payload;
    default:
      return state;
  }
};
