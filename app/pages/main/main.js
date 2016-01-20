// DoppioHealth - main.js

'use strict';
 var React = require('react-native');
 var AppContainer = require('../app-container/app-container');
 var Login = require('../login/login');

 var userService = require('../../helpers/UserService');
 var Theme = require('../../components/theme/theme');
 var _ = require('lodash');

 var {
    ActivityIndicatorIOS,
    NavigatorIOS,
    Text,
    TextInput,
    TouchableHighlight,
    View,
 } = React;
 
 const certUserSession = 'cert';
 const vetoUserSession = 'veto';

 var Main = React.createClass({
 	
 	componentDidMount(){

 		userService.getUserSession((result)=> {
 			if(!result == 0) {
 				console.log(`-- User Session Row Count: ${result}`);

 				this.setState({
 				  isLoggedIn: true,
 				});

 			} else {
 				console.log(`-- Else Method: ${result}`);
 				this.setState({
 				  isLoggedIn: false,
 				});
 			}
 		});


 	},

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
 