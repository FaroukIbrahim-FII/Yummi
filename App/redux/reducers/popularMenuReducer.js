const GET_POPULAR_MENU = 'GET_POPULAR_MENU';

const popularListReducer = (state = [], action) => {
  switch (action.type) {
    case GET_POPULAR_MENU:
      const newState = action.payload;
      return newState;
    default:
      return state;
  }
};
export default popularListReducer;
