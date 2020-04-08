import { FETCH_SHOW_CREDITS } from "../../actions/types";

//destructure type and payload from action object
export default (state = [], { type, payload }) => {
  switch (type) {
    case FETCH_SHOW_CREDITS:
      return payload;
    default:
      return state;
  }
};
