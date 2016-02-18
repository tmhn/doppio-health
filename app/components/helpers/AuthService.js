'use strict';

var React = require('react-native');
var AsyncStorage = require('react-native').AsyncStorage;
var UserData = require('../data/user-data');
var _ = require('lodash');

var DB = require('../data/db.js');
var DBEvents = require('react-native-db-models').DBEvents


class AuthService{

	initialLogin(creds, cb){

	}

	login(creds, cb){
		DB.users.get({username: creds.username, password: creds.password}, 
			function(results){
				// Checking if results has object in
				if(!results.length == 0){
					console.log(`Successfully logged in: ${creds.username}`);

					DB.user_session.add({username: creds.username}, function(added_data){
						console.log(`Record added to User Session- username: ${creds.username}`);
					});

					return cb({
						badCredentials: false,
						showProgress: false,
						userAuthSuccess: true,
					});
				
				} else {
					console.log(`Unsuccessful log in: ${creds.username}`);
					return cb({
						badCredentials: true,
						showProgress: false,
						userAuthSuccess: false,
					});
				}
			}
		)
	}
}


module.exports = new AuthService;