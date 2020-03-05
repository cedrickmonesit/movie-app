export default (state = [], action) => {
  switch (action.type) {
    case "FETCH_TRAILERS":
      return action.payload;
    default:
      return state;
  }
};
