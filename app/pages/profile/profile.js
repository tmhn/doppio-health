// DoppioHealth - profile.js

'use strict';

import React from 'react-native';
import Theme from '../../components/theme/theme';

let {
  Component,
  Image,
  Text,
  TouchableHighlight,
  View,
} = React;

module.exports = class Profile extends Component{

  render() {
    return (
      <View style={Theme.profileContainer}>
      	<View style={Theme.profile_imageRow}>
      		<Image
      			source={require('../../components/icons/personProfile.png')}
      			style={Theme.profile_profileImage} />
			<View style={Theme.profile_textRow}>
				<Text style={Theme.profile_profileName}>Tom</Text>
				<Text style={Theme.profile_profileName}>Hanson</Text>
			</View>
		</View>
		<View style={Theme.profile_detailsText}>
				<Text style={Theme.profile_profileDetails}>
					Name: <Text style={Theme.profile_profileDetailsLite}>Tom Hanson</Text>
				</Text>
				<Text style={Theme.profile_profileDetails}>
					Username: <Text style={Theme.profile_profileDetailsLite}>Tom</Text>
				</Text>
				<Text style={Theme.profile_profileDetails}>
					Website: <Text style={Theme.profile_profileDetailsLite}>tmhn.io</Text>
				</Text>
				<Text style={Theme.profile_profileDetails}>
					Email: <Text style={Theme.profile_profileDetailsLite}>tom@tmhn.io</Text>
				</Text>
				<Text style={Theme.profile_profileDetails}>
					Gender: <Text style={Theme.profile_profileDetailsLite}>Male</Text>
				</Text>
			</View>
      </View>

    );
  }
};