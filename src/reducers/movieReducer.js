export default (state = [], action) => {
  switch (action.type) {
    case "FETCH_MOVIES":
      return action.payload;
    default:
      return state;
  }
};

/*
export default () => {
    return null; //this can be null and would not be an error
  };

  
  export default () => {
    return undefined; //this cannot be undefined this will throw an error or if there is no return statement in the function it will be an error 
  };
  */
