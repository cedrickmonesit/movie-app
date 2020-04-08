import { FETCH_SHOW_DETAILS } from "../../actions/types";

//destructure type and payload from action object
export default (state = {}, { type, payload }) => {
  switch (type) {
    case FETCH_SHOW_DETAILS:
      return payload;
    default:
      return state;
  }
};
