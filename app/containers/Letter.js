import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, Text, StyleSheet } from 'react-native';

class Letter extends Component {
	render(){
		const { data } = this.props;
		return <View className="letter">
			<View style={stylesLetterButton.buttonWrapper} className="letter-text-wrapper">
				<Text style={{ color: 'white'}}>{data}</Text>
			</View>
		</View>
	}
}


function mapStateToProps(state){
	return {
		correct: state.correct,
	}
}

const stylesLetterButton = StyleSheet.create({
  buttonWrapper: {
    //width: 25,
    //height: ,
    margin: 3,
    alignItems: 'center',
    //backgroundColor: '#2196F3'
  },
  buttonText: {
  	//padding: 12,
  	color: 'white',
  },
});

export default connect(mapStateToProps)(Letter);
