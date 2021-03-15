import counterReducer from './counter';
import { combineReducers } from 'redux';

const allReducers = combineReducers({
    count: counterReducer,
});

export default allReducers;
