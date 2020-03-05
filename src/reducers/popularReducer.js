export default (state = [], action) => {
  switch (action.type) {
    case "FETCH_POPULAR":
      return action.payload;
    default:
      return state;
  }
};
