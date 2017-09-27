import React, { Component } from 'react';
import { connect } from 'react-redux';
import WordRender from './WordRender';
import LetterButtonContainer from './LetterButtonContainer';
import WordBankIncorrect from './WordBankIncorrect';
import HangManContainer from './HangManContainer';
import GameModal from './GameModal';
import { View, Text, TouchableHighlight, Button } from 'react-native';
import { dkBlue } from '../styles/common.js';

class Home extends Component {
	componentWillMount() {
		this.props.showModal();
	}
	render(){
		return <View style={{ flex: 1, backgroundColor: dkBlue }}>

			<View style={{flex: 3, alignItems: 'center', paddingTop: 45 }}>
				<HangManContainer />
			</View>

			<View style={{flex: 1}}>
				<WordRender correct={this.props.correct} currentWord={this.props.currentWord} />
			</View>

			{/*	<View style={{flex: 2, alignItems: 'center', }}>
				<WordBankIncorrect correct={this.props.correct} pressed={this.props.keysPressed} />
			</View> */}

			<View style={{flex: 3}}>
				<LetterButtonContainer currentWord={this.props.currentWord} correct={this.props.correct}  />
			</View>

			<GameModal active={this.props.modalActive} addWord={this.props.addWord} hideModal={this.props.hideModal} />
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
		modalActive: state.modalActive,
	}
}

export default connect(mapStateToProps)(Home);
