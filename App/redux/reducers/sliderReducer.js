const GET_SLIDER_DATA = 'GET_SLIDER_DATA';

const sliderReducer = (state = [], action) => {
  switch (action.type) {
    case GET_SLIDER_DATA:
      const newState = action.payload;
      return newState;
    default:
      return state;
  }
};
export default sliderReducer;
