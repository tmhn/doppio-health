var RNDBModel = require('react-native-db-models')
 
var DB = {
    "app": new RNDBModel.create_db('app'),
    "apps": new RNDBModel.create_db('apps'),
    "diary": new RNDBModel.create_db('diary'),
    "users": new RNDBModel.create_db('users'),
    "user_session": new RNDBModel.create_db('user_session'),
}
 
module.exports = DB