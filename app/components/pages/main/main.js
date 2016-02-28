// DoppioHealth - main.js
// ES5 - Due to AppRegistry

'use strict';
 import React from 'react-native';
 import AppContainer from '../app-container/app-container';
 import Login from '../login/login';

 import userService from '../../helpers/UserService';
 import Theme from '../../assets/theme/theme';

import DB from '../../data/db';
import DBEvents from 'react-native-db-models';

 let {
    ActivityIndicatorIOS,
    NavigatorIOS,
    Text,
    TextInput,
    TouchableHighlight,
    View,
 } = React;
 
var Main = React.createClass({
 	
 	componentDidMount(){
 		userService.getUserSession((result)=> {
 			if(!result == 0) {
 				this.setState({
 				  isLoggedIn: true,
 				});

 			} else {
 				this.setState({
 				  isLoggedIn: false,
 				});
 			}
 		});

//UserLogin hack

 		/*DB.users.add({username: "Tom", password: "tom"}, function(added_data){
    		console.log(added_data); 
		});*/
//--------------
 	},

	getInitialState(){
		return{
			isLoggedIn: false,
			//checkingAuth: true,
		}
	},

	onLogin(currentUser){
		this.setState({
			isLoggedIn: true,
			user: currentUser
		});

		console.log(`>> DB - Main.js Logged in user ${this.state.user}`);
	},

	render(){
		let currentUser = this.state.user;

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
				<AppContainer/>
			);
		} else {
			return(
				<Login onLogin={this.onLogin} />
			);
		}
	}
 });

 module.exports = Main;
 