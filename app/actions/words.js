import * as types from './types';
import * as data from '../data';
//import Api from '../lib/api';

export function addWord(){
	const rand = data.wordBank[Math.floor(Math.random() * data.wordBank.length)];
	return {
		type: types.ADD_WORD,
		word: rand,
	}
}

export function showModal(){
	return {
		type: types.SHOW_MODAL,
	}
}

export function keyPressed(keyCode){
	return {
		type: types.KEY_PRESSED,
		code: keyCode,
	}
}

export function evalCorrect(listA, listB){
	return {
		type: types.EVAL_CORRECT,
		currentWord: listA,
		keysPressed: listB,
	}
}

export function evalIncorrect(listA, listB){
	return {
		type: types.EVAL_INCORRECT,
		currentWord: listA,
		keysPressed: listB,
	}
}

