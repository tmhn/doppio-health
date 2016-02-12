'use strict';

 import React from 'react-native';
 import Theme from '../assets/theme/theme';

 let {
	Text,
	TextInput,
 	View,
 	TouchableHighlight,
 	TouchableOpacity,
 } = React;

 let ComponentsApi = {
 	getButton(title, fn){
 		return (
 			<TouchableHighlight
 				style={Theme.button}
 				onPress={fn}
 				underlayColor="white" >
				<Text style={Theme.buttonText}>
					{title}
				</Text>
			</TouchableHighlight>
		);
 	},

 	getRowButton(title, fn){
 		return(
 			<TouchableHighlight
				underlayColor='transparent'
				onPress={fn}>
					<Text style={Theme.name}>{title}</Text>
			</TouchableHighlight>
		);
 	},

 	getHeaderStyle(){
 		return Theme.mainContainer;
 	},

 	getTitle(title){
 		return (
 			<Text style={Theme.title}>
 				{title}	
			</Text>
		);
 	},
 	getLogoTitle(title1, title2){
 		return(
 			<Text style={Theme.logoNormalTitle}>{title1}<Text style={Theme.logoLiteTitle}>{title2}</Text></Text>
		);
 	},

 	getSeparator(){
 		return (
 			<View style={Theme.separator} />
		);
 	},

 };

 module.exports = ComponentsApi;