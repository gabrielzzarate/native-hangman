import React, { Component } from 'react';
import { connect } from 'react-redux';
import _ from 'underscore';
import { View, Text, StyleSheet } from 'react-native';
import Letter from './Letter';
import * as data from '../data';


class WordBankIncorrect extends Component {
	render(){
		//console.log('wordbank', this.props);
		const { pressed, correct, incorrect } = this.props;

		console.log('incorrect', incorrect);

		let incorrectItems;

		if ( incorrect.length !== 0){

			incorrectItems = incorrect.map(function(incorrectItem, i){
				return <Letter key={i} data={incorrectItem}>{incorrectItem} </Letter>
			});

		}
		return <View className="word-bank-incorrect-wrapper">
			{incorrectItems}
		</View>
	}
}

function mapStateToProps(state){
	return {
		incorrect: state.incorrect
	}
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     flexDirection: 'row',
//     flexWrap: 'wrap',
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: '#53555d',
//   },
// });
export default connect(mapStateToProps, null)(WordBankIncorrect);

