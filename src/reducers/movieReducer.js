export default (state = [], action) => {
  switch (action.type) {
    case "FETCH_MOVIES":
      return action.payload;
    //ToDo: add other cases in which we are fetching movie like trending & upcoming
    default:
      return state;
  }
};
