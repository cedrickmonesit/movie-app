import { FETCH_TV_TRENDING } from "../../actions/types";

export default (state = [], { type, payload }) => {
  switch (type) {
    case FETCH_TV_TRENDING:
      return payload;
    default:
      return state;
  }
};
