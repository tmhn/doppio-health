'use strict';

var React = require('react-native');
var AsyncStorage = require('react-native').AsyncStorage;
var UserData = require('../data/user-data');

class AuthService{

	login(creds, cb){
		var foundUser = UserData.filter((user) => {
			return user.username === creds.username && user.password === creds.password
		})[0]

		if(foundUser){
			return cb({
				badCredentials: false,
				showProgress: false,
				userAuthSuccess: true,
				
			})
		}else{
			return cb({
				badCredentials: true,
				showProgress: false,
				userAuthSuccess: false,
			});
		}
	}
}


module.exports = new AuthService;