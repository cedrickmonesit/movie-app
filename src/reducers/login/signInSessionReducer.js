import { CREATE_SIGN_IN_SESSION } from "../../actions/types";

export default (state = {}, action) => {
  switch (action.type) {
    case CREATE_SIGN_IN_SESSION:
      return action.payload;
    default:
      return state;
  }
};
