import { FETCH_TV_POPULAR } from "../../actions/types";

//destructure type and payload from action object
export default (state = [], { type, payload }) => {
  switch (type) {
    case FETCH_TV_POPULAR:
      return payload;
    default:
      return state;
  }
};
