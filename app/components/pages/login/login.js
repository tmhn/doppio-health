// DoppioHealth - login.js
'use strict';

import React from 'react-native';
import ComponentsApi from '../../api/components-api';
import authService from '../../helpers/AuthService';
import Theme from '../../assets/theme/theme';

let {
	ActivityIndicatorIOS,
	Component,
	Image,
  	StyleSheet,
  	Text,
  	TextInput,
  	TouchableHighlight,
  	View,
} = React;

module.exports = class Login extends Component{

	constructor(props){
		super(props);
		this.state = {
			showProgress: false
		}
	}

	onLoginPressed() {
		console.log(`Attempting to log in with username: ${this.state.username}`);
		this.setState({showProgress: true});

		authService.login({
			username: this.state.username,
			password: this.state.password
		}, (results)=> {
			this.setState(Object.assign({
				showProgress: false
				}, results));

				if(results.userAuthSuccess && this.props.onLogin){
					this.props.onLogin();
				}
			});
		
		};


  	render() {

  		var errorCtrl = <View />
	  	if(this.state.badCredentials == true){
	  		errorCtrl = <Text style={Theme.loginError}> Incorrect Credentials</Text>
	  	}else{
	  		errorCtrl = <View />
	  	}

	  	var userSuccess = <View/>
	  	if(this.state.userAuthSuccess){
	  		userSuccess = <Text style={Theme.loginSuccess}>Success!</Text>
	  	}

    return (
		<View style={Theme.mainContainer}>

			<Image
				source={require('../../assets/icons/logo_white.png')}
				style={{width: 260, height: 37, alignSelf: 'center', marginBottom: 25}} />
			<TextInput
				onChangeText={(text)=> this.setState({username: text})}
				style={Theme.searchInput}
				placeholder="Username" />

			<TextInput
				onChangeText={(text)=> this.setState({password: text})}
				style={Theme.searchInput}
				placeholder="Password"
				secureTextEntry={ true } />


			{ComponentsApi.getButton('Login', this.onLoginPressed.bind(this))}

			<ActivityIndicatorIOS
			  animating={this.state.showProgress}
			  color={'#808080'}
			  size={'small'} />

			{errorCtrl}
			{userSuccess}
		</View>


    );
  }
};




