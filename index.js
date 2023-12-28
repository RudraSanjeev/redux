const initialState = {
  noOfCakes: 10,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case BUY_CAKE:
      return {
        noOfCakes: state.noOfCakes - 1,
      };

    default:
      return state;
  }
};
