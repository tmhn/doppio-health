// DoppioHealth - theme.js

'use strict';
var React = require('react-native');

module.exports = {

// 
// AppContainer -> TabBar for application
	appContainer: {
		flex: 1,
	    justifyContent: 'center',
	    alignItems: 'center',
	    backgroundColor: '#FFF',
	},
//	HomeFeed
//	DiaryFeed
	

// 	Profile
	profileContainer: {
		flex: 1,
		padding: 30,
		marginTop: 65,
		paddingBottom: 75,
		flexDirection: 'column',
		justifyContent: 'center',
		backgroundColor: '#FFF',
	},
//
	button: {
		height: 45,
		flexDirection: 'row',
		backgroundColor: 'white',
		borderColor: 'white',
		borderWidth: 1,
		borderRadius: 8,
		marginBottom: 10,
		marginTop: 10,
		alignSelf: 'stretch',
		justifyContent: 'center',
	},
	buttonText: {
		fontSize: 18,
		color: '#111',
		alignSelf: 'center',
		fontFamily: 'Avenir',
	},
  	container: {
  		flex: 1,
  		backgroundColor: '#48BBEC',
  		fontFamily: 'Avenir',
  	},
	mainContainer: {
		flex: 1,
		padding: 30,
		marginTop: 65,
		paddingBottom: 75,
		flexDirection: 'column',
		justifyContent: 'center',
		backgroundColor: '#498EE0',
	},
	title: {
		marginBottom: 20,
		fontSize: 25,
		textAlign: 'center',
		color: '#FFF',
		fontFamily: 'Avenir',
	},
// Logo
	logoNormalTitle:{
		marginBottom: 20,
		fontSize: 28,
		textAlign: 'center',
		color: '#FFF',
		fontFamily: 'Avenir', //Raleway
		fontWeight: '400',
	},
	logoLiteTitle: {
		marginBottom: 20,
		fontSize: 28,
		textAlign: 'center',
		color: '#FFF',
		fontFamily: 'Avenir', //Raleway
		fontWeight: '200',
	},
	normalText: {
		fontFamily: 'Avenir',
	},
	searchInput: {
		height: 50,
		padding: 4,
		marginRight: 5,
		fontSize: 23,
		borderWidth: 1,
		borderColor: 'white',
		borderRadius: 8,
		color: 'white',
		marginBottom: 5,
		fontFamily: 'Avenir',
	},
	separator: {
		height: 1,
		backgroundColor: '#E4E4E4',
		flex: 1,
		marginLeft: 15,
	},



	loginError:{
		color: 'red',
		paddingTop: 10,
		justifyContent: 'center',
		fontFamily: 'Avenir',
		alignSelf: 'stretch',
	}
};