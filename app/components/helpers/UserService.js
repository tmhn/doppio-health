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
		})
	}

	deleteUserSession(cb){
		DB.user_session.erase_db(function(removed_data){
			cb(removed_data);
		});
	}

	deleteUserDiary(cb){
		DB.diary.erase_db(function(removed_data){
			db(removed_data);
		})
	}

	// Clean function to allow successful login
	getUserSession(cb){
			DB.user_session.get_all(function(result){
			var getAllResults = result;
			cb(getAllResults.totalrows);
		});
	}

	// Modified getUserSessionAuth function
	getUserSessionData(cb){

		DB.user_session.get_all(function(result){
			
			var getAllResults = result;
			let tempUser = JSON.stringify(getAllResults);
			let str = tempUser.slice(42, (tempUser.length)-3);

			let jsonStr = `{${str}}`;
			let tempjson = JSON.parse(jsonStr)			
			cb(tempjson);
		});
	}

	getDiaryFeed(cb){
		DB.diary.get_all(function(result){
			//console.log(result)
			cb(result);
		})
	}

	createDiaryItem(item){
		let diaryItem = JSON.parse(item);

		DB.diary.add({
			name: item.name,
			description: item.description,
			count: item.count
		}, function(added_data){
			console.log(`>> UserService DiaryFeed - added data`)
			console.log(added_data)
		})
	}

}

module.exports = new UserService;