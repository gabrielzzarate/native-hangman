import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, Text, StyleSheet } from 'react-native';

class Letter extends Component {
	render(){
		const { data } = this.props;
		return <View className="letter">
			<View className="letter-text-wrapper">
				<Text>{data}</Text>
			</View>
		</View>
	}
}

function mapStateToProps(state){
	return {
		correct: state.correct,
	}
}

export default connect(mapStateToProps)(Letter);
