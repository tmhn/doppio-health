// DoppioHealth - theme.js

// Base Red : #ff5a5f
// Base Blue: #498EE0

module.exports = {

// Login
	loginError:{
		color: 'red',
		paddingTop: 10,
		justifyContent: 'center',
		fontFamily: 'Avenir',
		alignSelf: 'stretch',
	},

// AppContainer -> TabBar for application
	appContainer: {
		flex: 1,
	    justifyContent: 'center',
	    alignItems: 'center',
	    backgroundColor: '#FFF',
	},
// ------ Bundle Components ------
// Bundle
	bundle_button: {
		height: 45,
		flexDirection: 'row',
		backgroundColor: '#498EE0',
		borderColor: 'white',
		borderWidth: 1,
		borderRadius: 8,
		marginBottom: 10,
		marginTop: 10,
		alignSelf: 'stretch',
		justifyContent: 'center',
	},
	bundle_page: {
		flex: 1,
		padding: 25,
		paddingBottom: 95,
		flexDirection: 'column',
		justifyContent: 'center',
		backgroundColor: '#FFF',
	},
	bundle_header: {
		marginBottom: 20,
		fontSize: 25,
		textAlign: 'center',
		color: '#498EE0',
		fontFamily: 'Avenir',
	},
	bundle_save: {
		height: 45,
		flexDirection: 'row',
		backgroundColor: '#5cb85c',
		borderColor: 'white',
		borderWidth: 1,
		borderRadius: 8,
		marginBottom: 10,
		marginTop: 10,
		alignSelf: 'stretch',
		justifyContent: 'center',
	},
	bundle_text:{
		marginBottom: 20,
		fontSize: 17,
		textAlign: 'center',
		fontFamily: 'Avenir',
	},
// Diet
	diet_container: {
		flex: 1,
		justifyContent: 'flex-start',
		backgroundColor: '#FFF',
	},
	diet_rowView: {
		flex: 1,
	    flexDirection: 'row',
	    padding: 20,
	    paddingTop: 30,
	    paddingBottom: 30,
	    alignItems: 'center',
	    borderColor: '#D7D7D7',
	    borderBottomWidth: 1,
	},
	diet_rowText: {
		paddingLeft: 20,
	},
	diet_rowTitle: {
		backgroundColor: '#FFF', 
	    fontWeight: '700',
	    fontFamily: 'Avenir',
	    fontSize: 20,
	    color: '#498EE0',
	},
	diet_rowBio: {
		backgroundColor: '#FFF',
    	fontFamily: 'Avenir',
	},
	diet_rowTimes: {
		paddingTop: 15,
		paddingBottom: 5,
	},
	diet_rowTimesIcon: {
		height: 35,
	    width: 35,
	},

// Record
	record_container: {
		flex: 1,
    	justifyContent: 'flex-start',
    	backgroundColor: '#FFF',
	},
	record_rowView: {
		flex: 1,
	    flexDirection: 'row',
	    padding: 20,
	    paddingTop: 30,
	    paddingBottom: 30,
	    alignItems: 'center',
	    borderColor: '#D7D7D7',
	    borderBottomWidth: 1,
	},
	record_rowText: {
		paddingLeft: 20,
	},
	record_rowTitle: {
		backgroundColor: '#FFF', 
	    fontWeight: '700',
	    fontFamily: 'Avenir',
	    fontSize: 20,
	    color: '#498EE0',
	},
	record_rowBio: {
		backgroundColor: '#FFF',
    	fontFamily: 'Avenir',
	},
	record_rowRightContainer: {
		flex: 1,
	    flexDirection: 'row',
	    justifyContent: 'flex-end',
	    paddingRight: 15,
	},
	record_rowValue: {
		paddingTop: 8,
	},
	record_rowIcon: {
		height: 39,
	    width: 39,
	    marginRight: 15,
	    marginLeft: 15,
	},

// Reminder
	reminder_container: {
		flex: 1,
		justifyContent: 'flex-start',
		backgroundColor: '#FFF',
	},
	reminder_rowView: {
		flex: 1,
	    flexDirection: 'row',
	    padding: 20,
	    paddingTop: 20,
	    paddingBottom: 20,
	    alignItems: 'center',
	    borderColor: '#D7D7D7',
	    borderBottomWidth: 1,
	},
	reminder_rowText: {
		paddingLeft: 20,
	},
	reminder_rowTitle: {
		backgroundColor: '#FFF', 
	    fontWeight: '700',
	    fontFamily: 'Avenir',
	    fontSize: 20,
	    color: '#498EE0',
	},
	reminder_rowBio: {
		backgroundColor: '#FFF',
    	fontFamily: 'Avenir',
    	//paddingBottom: 5,
	},
	reminder_timesSection: {
		flexDirection: 'row',
		//paddingTop: 15,
	},
	reminder_timesTextClock: {
		paddingLeft: 15,
		marginBottom: 20,
		fontSize: 17,
		textAlign: 'center',
		fontFamily: 'Avenir',
	},
	reminder_times: {
		flexDirection: 'row',
		justifyContent: 'center'
	},
	reminder_timesIcon: {
		height: 28,
	    width: 28,
	},
	reminder_timesTextRow: {
		paddingTop: 5,
		paddingLeft: 10,
	},
	reminder_timesText: {
		paddingBottom: 4,
	},
// Tips

// Guidance 

// -------------------------------
// ------------ Feeds ------------
// -------------------------------
//	HomeFeed
	homefeed_container: {
		flex: 1,
		justifyContent: 'flex-start',
    	backgroundColor: '#FFF',
    	paddingTop: 70
	},
	homefeed_row: {
		flex: 1,
    	flexDirection: 'row',
    	padding: 20,
    	alignItems: 'center',
    	borderColor: '#D7D7D7',
    	borderBottomWidth: 1,
	},
	homefeed_rowText: {
		paddingLeft: 20,
	},
	homefeed_rowTitle: {
		backgroundColor: '#FFF',
    	color: '#498EE0', 
    	fontWeight: '700',
    	fontFamily: 'Avenir',
    	fontSize: 22,
	},
	homefeed_rowBio: {
		backgroundColor: '#FFF',
    	fontFamily: 'Avenir',
	},
	homefeed_header: {
		backgroundColor: '#ff5a5f',
      	height: 210,
      	flex: 1,
      	alignItems: 'center',
      	flex: 1,
	},
	homefeed_headerTitle: {
		color: '#fff',
		fontFamily: 'Avenir',
		fontSize: 32,
		paddingTop: 65,
	},
	homefeed_headerText: {
		color: '#fff',
		fontFamily: 'Avenir',
		
	},
//	DiaryFeed
	diary_container: {
		flex: 1,
		justifyContent: 'flex-start',
    	backgroundColor: '#FFF',
    	paddingTop: 60
	},
	diary_row: {
		flex: 1,
    	flexDirection: 'row',
    	padding: 17,
    	alignItems: 'center',
    	borderColor: '#D7D7D7',
    	borderBottomWidth: 1,
    	paddingRight: 10
	},
	diary_rowText: {
		paddingLeft: 20,
		paddingRight: 30
	},
	diary_count: {
		right: 5
	},
	diary_rowCount: {
		//paddingLeft: 110
		alignSelf: 'flex-end'
	},
	diary_rowTitle: {
		backgroundColor: '#FFF',
    	color: '#498EE0', 
    	fontWeight: '700',
    	fontFamily: 'Avenir',
    	fontSize: 20,
	},
	diary_rowBio: {
		backgroundColor: '#FFF',
    	fontFamily: 'Avenir',
	},
	diaryfeed_header: {
		backgroundColor: '#498EE0',
      	height: 100,
      	flex: 1,
      	alignItems: 'center',
      	paddingLeft: 20,
      	paddingRight: 20
	},
	homefeed_headerTitle: {
		color: '#fff',
		fontFamily: 'Avenir',
		fontSize: 20,
		paddingTop: 40,
	},

// ------ Pages ------

// 	App-Container
	// inline styles used

//	Intro
	introContainer: {
		flex: 1,
		padding: 25,
		//marginTop: 65,
		paddingBottom: 95,
		flexDirection: 'column',
		justifyContent: 'center',
		backgroundColor: '#ff5a5f',
		paddingTop: 95
	},
	introHeader: {
		marginBottom: 15,
		fontSize: 25,
		textAlign: 'center',
		color: '#FFF',
		fontFamily: 'Avenir',
		paddingTop: 20
	},
	introText: {
		marginBottom: 20,
		fontSize: 13,
		color: '#FFF',
		fontFamily: 'Avenir',
		paddingLeft: 25
	},
	introSubheading: {
		color: '#FFF',
		fontFamily: 'Avenir',
		fontSize: 25,
		paddingTop: 5,
		paddingLeft: 25
	},
// 	Login
	// inline styles used

// 	Main
	// mainContainer

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
	profile_imageRow: {
		flexDirection: 'row',
		justifyContent: 'center',
		marginBottom: 30,
	},
	profile_profileImage: {
		height: 85,
		width: 85,
	},
	profile_profileName: {
		fontFamily: 'Avenir',
		fontSize: 25,
		color: '#000',
		fontWeight: '600',
	},
	profile_profileDetails: {
		fontFamily: 'Avenir',
		fontSize: 18,
		color: '#000',
		fontWeight: '600',
		padding: 5,
	},
	profile_profileDetailsLite: {
		fontWeight: '300',
	},
	profile_textRow: {
		paddingTop: 5,
		marginLeft: 25,
	},
	profile_detailsText: {
		paddingTop: 5,
		alignItems: 'center',
	},
//
//
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
	diary_button: {
		height: 45,
		flexDirection: 'row',
		backgroundColor: 'white',
		borderColor: 'white',
		borderWidth: 1,
		borderRadius: 8,
		marginBottom: 10,
		marginTop: 30,
		alignSelf: 'stretch',
		justifyContent: 'center'
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
		padding: 25,
		//marginTop: 65,
		paddingBottom: 95,
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

// ------ Utils ------
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

// Misc
	searchInput: {
		height: 50,
		padding: 4,
		paddingLeft: 25,
		marginRight: 5,
		fontSize: 23,
		borderWidth: 1,
		borderColor: 'white',
		borderRadius: 8,
		backgroundColor: 'white',
		color: '#498EE0',
		marginBottom: 5,
		fontFamily: 'Avenir',
	},
	separator: {
		height: 1,
		backgroundColor: '#E4E4E4',
		flex: 1,
		marginLeft: 15,
	},
};