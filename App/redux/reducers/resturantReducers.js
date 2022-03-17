const GET_RESTURANT_DETAILS = 'GET_RESTURANT_DETAILS';

const resturantReducer = (state = [], action) => {
  switch (action.type) {
    case GET_RESTURANT_DETAILS:
      const newState = action.payload;
      return newState;
    default:
      return state;
  }
};
export default resturantReducer;
