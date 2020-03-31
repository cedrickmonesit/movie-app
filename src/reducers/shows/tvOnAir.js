import { FETCH_TV_ON_AIR } from "../../actions/types";

//destructure type and payload from action object
export default (state = [], { type, payload }) => {
  switch (type) {
    case FETCH_TV_ON_AIR:
      return payload;
    default:
      return state;
  }
};
