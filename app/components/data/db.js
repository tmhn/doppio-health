var RNDBModel = require('react-native-db-models')
 
var DB = {
    "app": new RNDBModel.create_db('app'),
    "users": new RNDBModel.create_db('users'),
    "user_session": new RNDBModel.create_db('user_session'),
}
 
module.exports = DB