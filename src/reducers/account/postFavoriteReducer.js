import { POST_FAVORITE } from "../../actions/types";

export default (state = {}, action) => {
  switch (action.type) {
    case POST_FAVORITE:
      return action.payload;
    default:
      return state;
  }
};
