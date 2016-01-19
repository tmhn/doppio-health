'use strict';

var React = require('react-native');
var AsyncStorage = require('react-native').AsyncStorage;
var UserData = require('../data/user-data');
var _ = require('lodash');

var DB = require('../data/db.js');
var DBEvents = require('react-native-db-models').DBEvents


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
		DB.users.get({username: creds.username, password: creds.password}, 
			function(results){
				// Checking if results has object in
				if(!results.length == 0){
					return cb({
						badCredentials: false,
						showProgress: false,
						userAuthSuccess: true,
					});
				
				} else {
					return cb({
						badCredentials: true,
						showProgress: false,
						userAuthSuccess: false,
					});
				}
			})
	}
}


module.exports = new AuthService;