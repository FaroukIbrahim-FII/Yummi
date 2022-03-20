const GET_MENU_LIST = 'GET_MENU_LIST';

const menuListReducer = (state = [], action) => {
  switch (action.type) {
    case GET_MENU_LIST:
      const newState = action.payload;
      return newState;
    default:
      return state;
  }
};
export default menuListReducer;
