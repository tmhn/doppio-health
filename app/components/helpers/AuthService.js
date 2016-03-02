'use strict';

var React = require('react-native');
var AsyncStorage = require('react-native').AsyncStorage;
var UserData = require('../data/user-data');
var _ = require('lodash');

var DB = require('../data/db.js');
var DBEvents = require('react-native-db-models').DBEvents
var userService = require('../helpers/UserService');


class AuthService{

	userLogin(creds, cb){
		let jsonResultBody

		fetch(`http://localhost:8080/api/app/user/${creds.userPass}`)
		.then((response) => {

			jsonResultBody = response._bodyInit
			console.log("-------- RESPONSE BODY -------")
			console.log(jsonResultBody)

			if(jsonResultBody == 'null'){
				console.log(`>> UserDB response null for ${creds.userPass}. Error results returned.`);
				return cb({
 					success: false,
 					user: ''
				});

			} else {
				console.log(`>> UserDB response successful for ${creds.userPass}! Success results returned!`);

				// DBModels set user
				// userService.createUserSession(jsonResultBody);

				return cb({	
 					success: true,
 					user: jsonResultBody
				});
			}

		});
	}

	loadSandbox(creds, cb){

		fetch(`http://localhost:8080/api/app/${creds.userId}`)
		.then((response) => {
			return cb(response)
		})
	}

	// Deprecated

	// login(creds, cb){
	// 	DB.users.get({username: creds.username, password: creds.password}, 
	// 		function(results){
	// 			// Checking if results has object in
	// 			if(!results.length == 0){
	// 				console.log(`Successfully logged in: ${creds.username}`);

	// 				DB.user_session.add({username: creds.username}, function(added_data){
	// 					console.log(`Record added to User Session- username: ${creds.username}`);
	// 				});

	// 				return cb({
	// 					badCredentials: false,
	// 					showProgress: false,
	// 					userAuthSuccess: true,
	// 				});
				
	// 			} else {
	// 				console.log(`Unsuccessful log in: ${creds.username}`);
	// 				return cb({
	// 					badCredentials: true,
	// 					showProgress: false,
	// 					userAuthSuccess: false,
	// 				});
	// 			}
	// 		}
	// 	)
	// }

	// // Test
	// apiLogin(creds, cb){
	// let jsonResult; 

	// 	console.log("apiLogin function")
	// 	fetch(`http://localhost:8080/api/app/${creds.userId}`)
	// 	.then((response)=> {
 //            //return cb(response.json());
 //            //console.log("------ RESPONSE JSON------");
 //            //console.log(response);
            
 //            jsonResult = response._bodyInit;
 //            //console.log("------ RESPONSE RESULT JSON------");
 //            console.log(jsonResult);
 //        });
	// }

	
}


module.exports = new AuthService;