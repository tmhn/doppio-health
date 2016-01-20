// DoppioHealth - main.js

'use strict';
 var React = require('react-native');
 var AppContainer = require('../app-container/app-container');
 var Login = require('../login/login');

 var userService = require('../../helpers/UserService');
 var Theme = require('../../components/theme/theme');
 var _ = require('lodash');

var DB = require('../../data/db');
var DBEvents = require('react-native-db-models').DBEvents

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

 		/*DB.users.get_all(function(result){
        	console.log(result);
    	})*/

 /*DB.users.update({first_name: "Tom"}, {password: "tom"}, function(updated_table){
    console.log(updated_table);
})*/

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
 