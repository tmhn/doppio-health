// DoppioHealth - profile.js

'use strict';

var React = require('react-native');
var Theme = require('../../components/theme/theme');

var {
  Image,
  StyleSheet,
  Text,
  TouchableHighlight,
  View,
} = React;

class Profile extends React.Component{

  render() {
    return (
      <View style={Theme.profileContainer}>
      	<View style={styles.imageRow}>
      		<Image
      			source={require('../../components/icons/personProfile.png')}
      			style={styles.profileImage} />
			<View style={styles.textRow}>
				<Text style={styles.profileName}>Tom</Text>
				<Text style={styles.profileName}>Hanson</Text>
			</View>
		</View>
		<View style={styles.detailsText}>
				<Text style={styles.profileDetails}>
					Name: <Text style={styles.profileDetailsLite}>Tom Hanson</Text>
				</Text>
				<Text style={styles.profileDetails}>
					Username: <Text style={styles.profileDetailsLite}>Tom</Text>
				</Text>
				<Text style={styles.profileDetails}>
					Website: <Text style={styles.profileDetailsLite}>tmhn.io</Text>
				</Text>
				<Text style={styles.profileDetails}>
					Email: <Text style={styles.profileDetailsLite}>tom@tmhn.io</Text>
				</Text>
				<Text style={styles.profileDetails}>
					Gender: <Text style={styles.profileDetailsLite}>Male</Text>
				</Text>
			</View>
      </View>

    );
  }
};

var styles = StyleSheet.create({
	profileImage: {
		height: 85,
		width: 85,
	},
	imageRow: {
		flexDirection: 'row',
		//flex: 1,
		justifyContent: 'center',
		marginBottom: 30,
	},
	profileName: {
		fontFamily: 'Avenir',
		fontSize: 25,
		color: '#000',
		fontWeight: '600',
	},
	profileDetails: {
		fontFamily: 'Avenir',
		fontSize: 18,
		color: '#000',
		fontWeight: '600',
		padding: 5,
	},
	profileDetailsLite: {
		fontWeight: '300',
	},
	textRow: {
		paddingTop: 5,
		marginLeft: 25,

	},
	detailsText: {
		paddingTop: 5,
		alignItems: 'center',
	},
});

module.exports = Profile;