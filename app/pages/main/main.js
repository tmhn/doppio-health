// DoppioHealth - main.js
// ES5 - Due to AppRegistry

'use strict';
 import React from 'react-native';
 import AppContainer from '../app-container/app-container';
 import Login from '../login/login';

 import userService from '../../helpers/UserService';
 import Theme from '../../components/theme/theme';

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
				<AppContainer/>
			);
		}else{
			return(
				<Login onLogin={this.onLogin} />
			);
		}
	}
 });

 module.exports = Main;
 