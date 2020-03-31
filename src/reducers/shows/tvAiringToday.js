import { FETCH_TV_AIRING_TODAY } from "../../actions/types";

//destructure type and payload from action object
export default (state = [], { type, payload }) => {
  switch (type) {
    case FETCH_TV_AIRING_TODAY:
      return payload;
    default:
      return state;
  }
};
