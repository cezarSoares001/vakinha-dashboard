import { combineReducers } from 'redux';
import error from './error/reducer';

const rootReducer = combineReducers({
  error,
});

export default rootReducer;
