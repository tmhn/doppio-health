'use strict';

var React = require('react-native');
var AsyncStorage = require('react-native').AsyncStorage;
var UserData = require('../data/user-data');
var _ = require('lodash');

const authKey = 'auth';
const userKey = 'user';

class AuthService{

	getAuthInfo(cb){
		AsyncStorage.multiGet([authKey, userKey], (err, val)=> {
			if(err){
				return cb(err);
			}

			if(!val){
				return cb();
			}

			var zippedObj = _.zipObject(val);

			if(!zippedObj[authKey]){
				return cb()
			}

			var authInfo = [authKey];

			return cb(null, authInfo);
		});
	}

	login(creds, cb){
		var userLogin = creds.username + ':' + creds.password;

		var foundUser = UserData.filter((user) => {
			return user.username === creds.username && user.password === creds.password
		})[0]

		// Variable for successful users
		var userResults = {
			badCredentials: false,
			showProgress: false,
			userAuthSuccess: true,
		}

		if(foundUser){
			return cb({
				badCredentials: false,
				showProgress: false,
				userAuthSuccess: true,
				
			});
			AsyncStorage.multiSet([
				[authKey, userLogin],
				[userKey, JSON.stringify(userResults)]
			], (err)=> {
				if(err){
					throw err;
				}
			})
		} else {
			return cb({
				badCredentials: true,
				showProgress: false,
				userAuthSuccess: false,
			});
		}
	}
}


module.exports = new AuthService;