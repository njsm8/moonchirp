import { combineReducers } from '@reduxjs/toolkit';
import userReducer from './user';

const rootReducer = combineReducers({
  userReducer,
});

export default rootReducer;
