import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, Text, StyleSheet } from 'react-native';
import LetterButton from './LetterButton';
import * as data from '../data';

class LetterButtonContainer extends Component {
	componentWillUpdate(){
		const { currentWord, correct } = this.props;

		this.letterButtons = data.alphabet.map(function(data, i){

			let correctData = false;
			const loopCorrect = correct.map(function(correctItem, i){
				 if (correctItem == data.letter ){
				 	correctData = true;
				} else {
					correctData= false;
				}
			});
			return <LetterButton key={i} data={data} correct={correctData} />
		});
	}
	componentWillMount() {
		const { currentWord, correct } = this.props;

		this.letterButtons = data.alphabet.map(function(data, i){

			let correctData = false;
			const loopCorrect = correct.map(function(correctItem, i){
				 if (correctItem == data.letter ){
				 	correctData = true;
				} else {
					correctData= false;
				}
			});
			return <LetterButton key={i} data={data} correct={correctData} />
		});
	}
	render(){
		return <View style={styles.container} className="letter-button">
				{this.letterButtons}
		</View>
	}
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    paddingTop: 200,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#53555d',
  },
});

export default LetterButtonContainer;


