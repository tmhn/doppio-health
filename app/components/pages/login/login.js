// DoppioHealth - login.js
'use strict';

import React from 'react-native';
import ComponentsApi from '../../api/components-api';
import authService from '../../helpers/AuthService';
import UserService from '../../helpers/UserService';
import Theme from '../../assets/theme/theme';

let {
	ActivityIndicatorIOS,
	AlertIOS,
	Component,
	Image,
  	StyleSheet,
  	Text,
  	TextInput,
  	TouchableHighlight,
  	View,
} = React;

class Login extends Component{

	componentDidMount(){

	}

	constructor(props){
		super(props);
		this.state = {
			showProgress: false,
			loggedUser: "temp"
		}
	}

	onLoginPressed() {
		this.setState({showProgress: true});
		let temp = `${this.state.username}${this.state.password}`;
		let userPass = temp.toLowerCase();
		let dbResults;
		let tempUserId;
		let stringUserId;

		authService.userLogin({
			userPass: userPass
		}, (results) => {
		 	this.setState(Object.assign({
		 		showProgress: false,
		 		currentUser: results.user
		 		}, results));
		 	let currentUser = this.state.currentUser;

		 	console.log(`>> LoginJS: CurrentUser: ${currentUser}`)

		 	if(results.success && this.props.onLogin){

				this.props.onLogin(currentUser);

				UserService.deleteUserDiary();
 				
 				 AlertIOS.alert(
			       'Safety Notice',
			       'This application should not replace the advice of your healthcare professional.\n\n If at any time you feel unwell, consult your healthcare professional fully.\n\n Thank you.',
			       [
			         {
			           text: 'OK'
			         }
			       ]
			     )

		 	} else {
		 		AlertIOS.alert(
		 			'Error',
		 			'Username and Password Incorrect',
		 			[{
                      text: 'Cancel',
                      onPress: () => console.log('Incorrect U/P alert cancelled.'),
                    },]
                );
		 	}
		})		

	}

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
				autoCapitalize="none"
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


module.exports = Login;


