// DoppioHealth - theme.js

'use strict';
var React = require('react-native');

module.exports = {
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

// Profile

	profileContainer: {
		flex: 1,
		paddingTop: 150,
		paddingBottom: 150,
	},

// Dashboard
	dashboardContainer: {
  		backgroundColor: '#FFF',
  		flex: 1,
  	},
	dashboardDescription: {
		fontSize: 14,
		paddingBottom: 5,
	},
	rowContainer: {
		flexDirection: 'column',
		flex: 1,
		padding: 20,
	},
	name: {
		color: '#111',
		fontSize: 18,
		paddingBottom: 5,
	},
	loginError:{
		color: 'red',
		paddingTop: 10,
		justifyContent: 'center',
		fontFamily: 'Avenir',
		alignSelf: 'stretch',
	}
};