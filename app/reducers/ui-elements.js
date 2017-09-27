import createReducer from '../lib/createReducer';
import * as types from '../actions/types';


export function modalActive(state, action){
	switch (action.type){
		case 'SHOW_MODAL' :
			let modalVisible = true;

			return modalVisible;
		case 'HIDE_MODAL' :
			modalVisible = false;

			return modalVisible;
		default:
			return false;
	}
}
