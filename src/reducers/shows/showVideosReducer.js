import { FETCH_SHOW_VIDEOS } from "../../actions/types";

//destructure type and payload from action object
export default (state = [], { type, payload }) => {
  switch (type) {
    case FETCH_SHOW_VIDEOS:
      return payload;
    default:
      return state;
  }
};
