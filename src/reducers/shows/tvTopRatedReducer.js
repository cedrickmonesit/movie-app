import { FETCH_TV_TOP_RATED } from "../../actions/types";

export default (state = [], { type, payload }) => {
  switch (type) {
    case FETCH_TV_TOP_RATED:
      return payload;
    default:
      return state;
  }
};
