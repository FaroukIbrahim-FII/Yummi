import {combineReducers} from 'redux';
import sliderReducer from './sliderReducer';
import popularListReducer from './popularMenuReducer';
import menuListReducer from './menuListReducer';
import resturantReducer from './resturantReducers';

const rootReducer = combineReducers({
  sliderData: sliderReducer,
  popularList: popularListReducer,
  menuList: menuListReducer,
  resturantDetails: resturantReducer,
});

export default rootReducer;
