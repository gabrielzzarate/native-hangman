import React, { Component } from 'react';
import { Modal, Text, Button, TouchableHighlight, View } from 'react-native';
import { primaryColor, orange } from '../styles/common.js';

class GameModal extends Component {

  startGame(){
  	this.props.addWord();
  	this.props.hideModal();
  }

  render() {
    return (
      <View style={{ backgroundColor: orange,  opacity: .5, marginTop: 22}}>
        <Modal
          //animationType={"fade"}
          transparent={false}
          visible={this.props.active}
          onRequestClose={() => {alert("Modal has been closed.")}}
          >
         <View style={{marginTop: 45}}>
          <View style={{ alignItems: 'center' }}>
            <Text>Hello, Welcome to Native Hangman! Press the button below to start your game.</Text>

         	<Button
  			  onPress={() => this.startGame()}
  			  title="Start"
  			  color="#841584"
  			  accessibilityLabel="Start the game"
			   />
          </View>
         </View>
        </Modal>

      </View>
    );
  }
}

export default GameModal;
