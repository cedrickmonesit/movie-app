import { DELETE_SIGN_OUT_SESSION } from "../../actions/types";

export default (state = {}, action) => {
  switch (action.type) {
    case DELETE_SIGN_OUT_SESSION:
      return action.payload;
    default:
      return state;
  }
};
