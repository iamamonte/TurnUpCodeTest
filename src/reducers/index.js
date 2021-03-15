import {combineReducers} from 'redux';
import countReducer from './counter.js';
const allReducers= combineReducers({
  count: countReducer,
});
export default allReducers;
