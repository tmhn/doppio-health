'use strict';

var UserData = require('../data/user-data');
var DB = require('../data/db');
var DBEvents = require('react-native-db-models').DBEvents

class UserService{

	createUserSession(creds){
		let user = JSON.parse(creds)
		console.log(`>> UserService: Create User Session`)

		DB.user_session.add({
			userId: user._id,
			username: user.username,
			password: user.password,
			userPass: user.userPass,
			first_name: user.first_name,
			last_name: user.last_name,
			age: user.age,
			bloodGroup: user.bloodGroup,
			homeBio: user.homeBio,


		}, function(added_data){
			let addedUser = JSON.stringify(added_data);
			
			console.log(`>> User Session: Added - ${addedUser}`);
		})
	}

	deleteUserSession(cb){
		DB.user_session.erase_db(function(removed_data){
			console.log(`Deleted data: ${removed_data}`);
			cb(removed_data);
		});
	}


	// Clean function to allow successful login
	getUserSession(cb){
			DB.user_session.get_all(function(result){
			
			var getAllResults = result;
			console.log(`User Session Row Count: ${getAllResults.totalrows}`);
			cb(getAllResults.totalrows);
		});
	}

	// Modified getUserSessionAuth function
	getUserSessionData(cb){

		DB.user_session.get_all(function(result){
			console.log(`>> UserService: get_all result ${JSON.stringify(result)}`)
			var getAllResults = result;

			let tempUser = JSON.stringify(getAllResults);
			let str = tempUser.slice(42, (tempUser.length)-3);

			console.log(`>> UserService: JSON PARSED STR`)
			console.log(str);

			let jsonStr = `{${str}}`;

			console.log(`jsonStr`);
			console.log(jsonStr);
			
			let tempjson = JSON.parse(jsonStr)

			console.log(`>> UserService: Clean User Details: `)
			console.log(tempjson)
			
			cb(tempjson);
		});
	}

}

module.exports = new UserService;