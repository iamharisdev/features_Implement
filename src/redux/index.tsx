import {combineReducers} from 'redux';
import languageSlice from './Feature/languageSlice';

const rootReducer = combineReducers({
  languageSlice,
});

export default rootReducer;
