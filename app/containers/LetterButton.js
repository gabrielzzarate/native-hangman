import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, Text, StyleSheet, TouchableHighlight } from 'react-native';
import { keyPressed, evalCorrect, evalIncorrect } from '../actions/words';
import { primaryColor, dkGreen } from '../styles/common.js';

class LetterButton extends Component {

	letterButtonPress(keyCode){
		let keyPromise = new Promise((resolve, reject) => {
			this.props.keyPressed(keyCode);
			setTimeout(function(){
				resolve("Success!");
			}, 250);
		});

		keyPromise.then((successMessage) => {
			const currentWord = this.props.currentWord;
			const keysPressed = this.props.keysPressed;
			this.props.evalCorrect(currentWord, keysPressed);
			this.props.evalIncorrect(currentWord, keysPressed);
		});
	}

	render(){
		const { data, correct } = this.props;
		return <TouchableHighlight onPress={() => this.letterButtonPress(data.keyCode)} style={[ stylesButton.button, correct == true ? stylesButton.buttonCorrect : stylesButton.buttonInitial  ]} activeOpacity={10} underlayColor="white">
				<Text style={stylesButton.buttonText}>{data.letter}</Text>
		</TouchableHighlight>
	}
}

function mapStateToProps(state){
	return {
		keysPressed: state.keysPressed,
		currentWord: state.currentWord
	}
}

const mapDispatchToProps = (dispatch) => ({
    keyPressed(keyCode) {
    	dispatch(keyPressed(keyCode));
    },
    evalCorrect(listA, listB) {
    	dispatch(evalCorrect(listA, listB));
    },
    evalIncorrect(listA, listB) {
    	dispatch(evalIncorrect(listA, listB));
    },
});

const stylesButton = StyleSheet.create({
  button: {
    width: 25,
    height: 20,
    margin: 12,
    alignItems: 'center',
    borderRadius: 50,
  },
  buttonInitial: {
    backgroundColor: primaryColor
  },
  buttonCorrect: {
  	backgroundColor: dkGreen
  },
  buttonText: {
  	//padding: 12,
  	color: 'white',
  //	fontFamily: 'Aller',
  },

});

export default connect(mapStateToProps, mapDispatchToProps)(LetterButton);
