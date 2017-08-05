import createReducer from '../lib/createReducer';
import * as types from '../actions/types';
import { getLetter } from '../data';


export const currentWord = createReducer(0, {
	[types.ADD_WORD](state, action){
		return action.word.split("");
	}
});

export function keysPressed(state = [], action){
	switch (action.type){
		case 'KEY_PRESSED' :
			const i = action.code;
			const newState = [ ...state, getLetter(i)];

			return newState;
		default:
			return state;
	}
}

export function correct(state = [], action){
	switch (action.type){
		case 'EVAL_CORRECT' :
			const correct = [];
			const { currentWord } = action;

			const findCorrect = action.keysPressed.filter(function(letter){
			 	action.currentWord.indexOf(letter) > -1 ? correct.push(letter.toString()) : '';
			 	//const loopCurrentWord = currentWord.map(function(i, l){
			 		//console.log('cur', [action.currentWord]);
			 		//return l === letter ? correct.push(l.toString()) : "";
			 	//});
			 	//correct.push(loopCurrentWord.toString());
			});


			return correct;
		default:
			return state;
	}
}

export function incorrect(state = [], action){
	switch (action.type){
		case 'EVAL_INCORRECT' :
			const incorrect = [];
			const findIncorrect = action.keysPressed.filter(function(letter){
				action.currentWord.indexOf(letter) > -1 ? '' : incorrect.push(letter);
			});

			return incorrect;
		default:
			return state;
	}
}
