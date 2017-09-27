import * as types from './types';

export function showModal(){
	return {
		type: types.SHOW_MODAL,
	}
}

export function hideModal(){
	return {
		type: types.HIDE_MODAL,
	}
}
