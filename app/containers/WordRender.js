import React, { Component } from 'react';
import Letter from './Letter';
import { View, Text, StyleSheet } from 'react-native';
import { ltGray } from '../styles/common.js';

class WordRender extends Component {

	render(){
		const { correct, currentWord }  = this.props;
		let renderLetters;

		if(currentWord !== 0){
			//let findGuessed = undefined;
			renderLetters = currentWord.map(function(letter, i) {
				//console.log('looping', letter);+
				return (
					<View key={i} style={stylesWord.letterWrapper}>
						<Letter data={letter} />
					</View>
				);
			});
		}

		return ( <View style={stylesWord.container}>
			{/* <Text>{this.props.currentWord}</Text> */}
			{renderLetters}
		</View>);
	}
}

const stylesWord = StyleSheet.create({
	container: {
    	flexDirection: 'row',
    	flexWrap: 'wrap',
    	paddingTop: 20,
    	justifyContent: 'center',
    	//alignItems: 'center',
	},
	letterWrapper: {
		backgroundColor: ltGray,
		height: 40,
		width: 40,
		margin: 3,
		justifyContent: 'center',
		alignItems: 'center',
		borderRadius: 3,
	}
});

export default WordRender;
