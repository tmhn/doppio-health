'use strict';

 var React = require('react-native');
 var Theme = require('../components/theme/theme');

 var {
	Text,
	TextInput,
 	View,
 	TouchableHighlight,
 	TouchableOpacity,
 } = React;

 var ComponentsApi = {
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
/*
getTextInput(changeText, changeType underlayColor, placeholder){
	return (
		<TextInput
			onChangeText={(text)=> this.setState({username: text})}
			style={Theme.searchInput}
			placeholder="Username"
			secureTextEntry="true" />
);
},

*/
 	getTextInput(changeText, changeType, underlayColor, placeholder, secureEntry){
 		return (
 			<TextInput
 				onChangeText={(changeType)=> this.setState({changeText: changeType})}
 				style={Theme.searchInput}
 				placeholder= {placeholder}
 				secureTextEntry= {secureEntry} />
		);
 	},

 	getSeparator(){
 		return (
 			<View style={Theme.separator} />
		);
 	},

 };

 module.exports = ComponentsApi;