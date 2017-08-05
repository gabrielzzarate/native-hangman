import React, { Component } from 'react';
import Letter from './Letter';
import { View, Text, TouchableHighlight } from 'react-native';

class WordRender extends Component {

	render(){
		const { correct, currentWord }  = this.props;
		let renderLetters;

		if(currentWord !== 0){
			let findGuessed = undefined;
			renderLetters = currentWord.map(function(letter, i) {
				if (correct.length !== 0){
					findGuessed = correct.filter(function(correctLetter, i){
						return correctLetter === letter;
					});
				}
				return <Letter key={i} letter={letter} guessed={findGuessed} />;
			});
		}

		return ( <View className="word-rendered-container">
			<Text>{this.props.currentWord}</Text>
				<View style={{flex: 1, flexDirection: 'row' }}>
					{renderLetters}
				</View>
		</View>);
	}
}

export default WordRender;
