import {combineReducers} from 'redux';
import appSlice from './appSlice';

const rootReducer = combineReducers({
  appSlice,
});

export default rootReducer;
