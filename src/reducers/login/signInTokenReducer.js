import { CREATE_SIGN_IN_TOKEN } from "../../actions/types";

export default (state = {}, action) => {
  switch (action.type) {
    case CREATE_SIGN_IN_TOKEN:
      return action.payload;
    default:
      return state;
  }
};
