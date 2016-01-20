'use strict';

var UserData = require('../data/user-data');
var DB = require('../data/db');
var DBEvents = require('react-native-db-models').DBEvents

class UserService{

	deleteUserSessionRows(cb){
		DB.user_session.erase_db(function(removed_data){
			console.log(`Deleted data: ${removed_data}`);
			cb(removed_data);
		});
	}

	getUserSession(cb){

		DB.user_session.get_all(function(result){
			var getAllResults = result;
			console.log(`User Session Row Count: ${getAllResults.totalrows}`);
			cb(getAllResults.totalrows);
		});
	}
}

module.exports = new UserService;