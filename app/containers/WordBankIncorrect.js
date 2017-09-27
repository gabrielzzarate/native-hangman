import React, { Component } from 'react';
import { connect } from 'react-redux';
import _ from 'underscore';
import { View, Text, StyleSheet } from 'react-native';
import Letter from './Letter';
import * as data from '../data';
import { ltGray } from '../styles/common.js';

class WordBankIncorrect extends Component {
	render(){
		const { pressed, correct, incorrect } = this.props;
		let incorrectItems;

		if ( incorrect.length !== 0){

			incorrectItems = incorrect.map(function(incorrectItem, i){
				return <Letter key={i} data={incorrectItem}>{incorrectItem} </Letter>
			});
		}
		return <View style={ stylesWordBank.container }>
			<Text>You Missed:</Text>
			{incorrectItems}
		</View>
	}
}

function mapStateToProps(state){
	return {
		incorrect: state.incorrect
	}
}

const stylesWordBank = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    //alignItems: 'flex-end',
    paddingTop: 5,
    marginTop: 40,
    //alignItems: 'flex-start',
    width: 250,
    height: 80,
    borderRadius: 3,
    flexWrap: 'wrap',
    justifyContent: 'center',
    backgroundColor: ltGray,
  },
});

export default connect(mapStateToProps, null)(WordBankIncorrect);

