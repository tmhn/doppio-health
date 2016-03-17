'use strict';
import React from 'react-native';
import Theme from '../assets/theme/theme';

let {
	AlertIOS,
	StyleSheet,
	Text,
	TouchableHighlight,
	View
} = React;

let Api = {
  getButton(title, fn){
  	return (
		<TouchableHighlight
			style={Theme.bundle_button}
			onPress={fn}
			underlayColor="#5f9ce4" >
			<Text style={Theme.buttonText}>
				{title}
			</Text>
		</TouchableHighlight>
	);
  },

  getSaveButton(title, fn){
  	return (
		<TouchableHighlight
			style={Theme.bundle_save}
			onPress={fn}
			underlayColor="#2ecc71" >
			<Text style={Theme.buttonText}>
				{title}
			</Text>
		</TouchableHighlight>
	);
  },
}

module.exports = Api;