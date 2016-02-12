// DoppioHealth - profile.js

'use strict';

import React from 'react-native';
import Theme from '../../assets/theme/theme';

let {
  Component,
  Image,
  Text,
  TouchableHighlight,
  View,
} = React;

module.exports = class Profile extends Component{

	componentDidMount(){
		this.fetchData();
	}

	fetchData(){
		
	}

	render() {
		let feedData = this.props.data.userInfo;

		return (
		  <View style={Theme.profileContainer}>
		  	<View style={Theme.profile_imageRow}>
		  		<Image
		  			source={require('../../assets/icons/personProfile.png')}
		  			style={Theme.profile_profileImage} />
				<View style={Theme.profile_textRow}>
					<Text style={Theme.profile_profileName}>{feedData.firstName}</Text>
					<Text style={Theme.profile_profileName}>{feedData.lastName}</Text>
				</View>
			</View>
			<View style={Theme.profile_detailsText}>
					<Text style={Theme.profile_profileDetails}>
						Name: <Text style={Theme.profile_profileDetailsLite}>{`${feedData.firstName} ${feedData.lastName}`}</Text>
					</Text>
					<Text style={Theme.profile_profileDetails}>
						Username: <Text style={Theme.profile_profileDetailsLite}>{feedData.username}</Text>
					</Text>
					<Text style={Theme.profile_profileDetails}>
						Age: <Text style={Theme.profile_profileDetailsLite}>{feedData.age}</Text>
					</Text>
					<Text style={Theme.profile_profileDetails}>
						Blood Group: <Text style={Theme.profile_profileDetailsLite}>{feedData.bloodGroup}</Text>
					</Text>
					<Text style={Theme.profile_profileDetails}>
						Allergies: <Text style={Theme.profile_profileDetailsLite}>{feedData.allergies}</Text>
					</Text>
				</View>
		  </View>

		);
	}
};