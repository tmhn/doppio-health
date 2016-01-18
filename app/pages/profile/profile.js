// DoppioHealth - profile.js

'use strict';

var React = require('react-native');
var Theme = require('../../components/theme/theme');
var AuthService = require('../../helpers/AuthService');

var {
  StyleSheet,
  Text,
  TouchableHighlight,
  View,
} = React;

class Profile extends React.Component{
	logout(){
		AuthService.logout();
	}

  render() {
    return (
      <View style={Theme.profileContainer}>
      	<TouchableHighlight
      		onPress={this.logout.bind(this)}
      		style={Theme.button}>
      		<Text style={Theme.buttonText}>
      			Logout
  			</Text>
		</TouchableHighlight>
      </View>

    );
  }
};

module.exports = Profile;