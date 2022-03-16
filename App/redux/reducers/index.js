import {combineReducers} from 'redux';
import userReducer from './userReducer';
import usersReducer from './usersReducer';
import reposReducer from './reposReducer';
import sliderReducer from './sliderReducer';

const rootReducer = combineReducers({
  usersList: usersReducer,
  userDetail: userReducer,
  userRepos: reposReducer,
  sliderData: sliderReducer,
});
export default rootReducer;
