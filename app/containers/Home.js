import React, { Component } from 'react';
import { connect } from 'react-redux';
import WordRender from './WordRender';
import LetterButtonContainer from './LetterButtonContainer';
import WordBankIncorrect from './WordBankIncorrect';
import { View, Text, TouchableHighlight, Button } from 'react-native';
import { dkBlue } from '../styles/common.js';

class Home extends Component {
	addWord(){
		this.props.addWord();
	}
	render(){
		return <View style={{ backgroundColor: dkBlue }} className="game-container">
			<Text>{this.props.wordCount}</Text>
			<Button
			  onPress={() => this.addWord()}
			  title="Start"
			  color="#841584"
			  accessibilityLabel="Start the game"
			/>

			<WordRender correct={this.props.correct} currentWord={this.props.currentWord} />

			<View>
				<WordBankIncorrect correct={this.props.correct} pressed={this.props.keysPressed} />
			</View>

			<View className="letter-buttons-wrapper">
				<LetterButtonContainer currentWord={this.props.currentWord} correct={this.props.correct}  />
			</View>
		</View>
	}
}

function mapStateToProps(state){
	return {
		wordCount: state.wordCount,
		currentWord: state.currentWord,
		keysPressed: state.keysPressed,
		correct: state.correct,
		incorrect: state.incorrect,
	}
}

export default connect(mapStateToProps)(Home);
