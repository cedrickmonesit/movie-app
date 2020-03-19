export default (state = [], action) => {
  switch (action.type) {
    case "FETCH_ACTOR_MOVIES":
      return action.payload;
    default:
      return state;
  }
};
