import { FETCH_ACCOUNT_DETAILS } from "../../actions/types";

export default (state = {}, action) => {
  switch (action.type) {
    case FETCH_ACCOUNT_DETAILS:
      return action.payload;
    default:
      return state;
  }
};
