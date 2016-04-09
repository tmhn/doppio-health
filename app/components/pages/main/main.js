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
    AlertIOS,
    NavigatorIOS,
    Text,
    TextInput,
    TouchableHighlight,
    View,
 } = React;
 
var Main = React.createClass({
 	
 	componentWillMount(){
 		console.log(`>> Main.js - ComponentWillMount`)

 		userService.getUserSession((result)=> {
 			console.log(`user service - result`)
 			console.log(result)

 			if(!result == 0) {
 				console.log(`>> Main.js - User Logged In`)
 				this.setState({
 				  isLoggedIn: true,
 				});

 			} else {
 				console.log(`>> Main.js - Rendering Login view`)
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

	onLogin(currentUser){
		console.log(`>> Main.js - Current User: `)
		console.log(currentUser)
		let current = JSON.parse(currentUser)

		DB.user_session.add({
			userId: current._id,
			username: current.username,
			password: current.password,
			userPass: current.userPass,
			first_name: current.first_name,
			last_name: current.last_name,
			age: current.age,
			bloodGroup: current.bloodGroup,
			homeBio: current.homeBio

		}, function(added_data){
			console.log(`>> Main.js - Added User: `)
			console.log(added_data)
			this.setState ({
			  user: added_data,
			});

			console.log(`>> MainJS - successful user -`)
			console.log(this.state.user)
		});

		this.setState({
			isLoggedIn: true
		});
		
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
				<AppContainer data={this.state.user}/>
			);
		} else {
			return(
				<Login onLogin={this.onLogin} />
			);
		}
	}
 });

 module.exports = Main;
 