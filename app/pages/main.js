// DoppioHealth - main.js

'use strict';
var React = require('react-native');
 var Dashboard = require('./dashboard');
 var Theme = require('../components/theme/theme');
 var ComponentsApi = require('../api/components-api');
 var UserData = require('../data/user-data');
 
 var {
    ActivityIndicatorIOS,
    Text,
    TextInput,
    TouchableHighlight,
    View,
 } = React;
 
 class Main extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			error: false,
		}
	}

	handleLogin(){
		this.setState({
			isLoading: false,
		});

		var foundUser = UserData.filter((user) => {
			return user.username === this.state.username && user.password === this.state.password
		})[0]

		if (foundUser) {
			this.props.navigator.push({
				component: Dashboard,
				title: "Apps",
			});
			this.setState({
			  badCredentials: false,
			});
				
		} else {
			this.setState({
			  badCredentials: true,
			});
		}
	}


   render() {
   	var errorCtrl = <View/>
   	if(this.state.badCredentials){
   		errorCtrl = <Text style={Theme.loginError}>Incorrect Username & Password</Text>
   	}

     return (
       <View style={ComponentsApi.getHeaderStyle()}>
       		{ComponentsApi.getLogoTitle("Doppio", "Health")}
       		<TextInput
   				onChangeText={(text)=> this.setState({username: text})}
				style={Theme.searchInput}
				placeholder="Username" />

			<TextInput
				onChangeText={(text)=> this.setState({password: text})}
				style={Theme.searchInput}
				placeholder="Password"
				secureTextEntry="true" />


			{ComponentsApi.getButton('Login', this.handleLogin.bind(this))}

			{errorCtrl}
       </View>
     );
   }
 };
 
 module.exports = Main;
 