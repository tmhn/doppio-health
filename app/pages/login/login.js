// DoppioHealth - login.js
'use strict';

var React = require('react-native');
var ComponentsApi = require('../../api/components-api');
var authService = require('../../helpers/AuthService');
var Theme = require('../../components/theme/theme');

var {
	ActivityIndicatorIOS,
	Image,
  	StyleSheet,
  	Text,
  	TextInput,
  	TouchableHighlight,
  	View,
} = React;

class Login extends React.Component{

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
		<View style={ComponentsApi.getHeaderStyle()}>

			<Image
				source={require('../../components/icons/logo_white.png')}
				style={{width: 265, height: 40, alignSelf: 'center', marginBottom: 25}} />
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

module.exports = Login;




