// DoppioHealth - main.js

'use strict';
 var React = require('react-native');
 var AppContainer = require('../app-container/app-container');
 var Login = require('../login/login');
 var AuthService = require('../../helpers/AuthService');
 var Theme = require('../../components/theme/theme');
 
 var {
    ActivityIndicatorIOS,
    NavigatorIOS,
    Text,
    TextInput,
    TouchableHighlight,
    View,
 } = React;
 
 var Main = React.createClass({
 	/*componentDidMount(){
 		AuthService.getAuthInfo((err, authInfo)=> {
 			this.setState({
 			  checkingAuth: false,
 			  isLoggedIn: authInfo != null
 			});
 		});
 	},*/

	getInitialState(){
		return{
			isLoggedIn: false,
			//checkingAuth: true,
		}
	},

	onLogin(){
		this.setState({
			isLoggedIn: true,
		});
	},

	render(){
		if(this.state.checkingAuth){
			return(
				<View style={Theme.mainContainer}>
					<ActivityIndicatorIOS
					  animating={true}
					  color={'#808080'}
					  size={'large'} />
					
				</View>
			);
		}

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
 