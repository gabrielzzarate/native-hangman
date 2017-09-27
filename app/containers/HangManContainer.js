import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, Text, Image, StyleSheet } from 'react-native';
import LetterButton from './LetterButton';
import * as data from '../data';
import { ltGray } from '../styles/common.js';

class HangManContainer extends Component {

	render(){
		return <View style={styles.container}>
			<View style={styles.containerInner}>
				<Image
					style={styles.hangman}
					source={ require('../../assets/hangman.png') }
				/>
			</View>
		</View>
	}
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    paddingTop: 30,
    justifyContent: 'center',
    //alignItems: 'center',
    backgroundColor: ltGray,
    borderRadius: 3,
    //
    overflow: 'hidden',
  },
  containerInner: {
	backgroundColor: ltGray,
	height: 400,
	//justifyContent: 'center',
	alignItems: 'flex-start',

  },
  hangman: {
  	resizeMode: 'contain',
  	//width: 300,
  	height: 150,
  	marginLeft: -215,

  }
});

export default HangManContainer;
