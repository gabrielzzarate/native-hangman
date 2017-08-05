import { combineReducers } from 'redux';
import * as wordsReducer from './words';

export default combineReducers(Object.assign(
	wordsReducer,
));
