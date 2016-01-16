// DoppioHealth - main.js

'use strict';
 var React = require('react-native');
 var AppContainer = require('../app-container/app-container');
 var Login = require('../login/login');
 
 var {
    ActivityIndicatorIOS,
    NavigatorIOS,
    Text,
    TextInput,
    TouchableHighlight,
    View,
 } = React;
 
 var Main = React.createClass({
	getInitialState(){
		return{
			isLoggedIn: false,
		}
	},

	onLogin(){
		this.setState({
			isLoggedIn: true,
		});
	},

	render(){
		if(this.state.isLoggedIn){
			return(
				<AppContainer />
			);
		}else{
			return(
				<Login onLogin={this.onLogin} />
			);
		}
	}
 });
 
 module.exports = Main;
 