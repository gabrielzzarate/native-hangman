import { combineReducers } from 'redux';
import * as wordsReducer from './words';
import * as uiReducer from './ui-elements';

export default combineReducers(Object.assign(
	wordsReducer,
	uiReducer,
));
