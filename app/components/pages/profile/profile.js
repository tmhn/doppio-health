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

class Profile extends Component{
	constructor(props){
		super(props);

		this.state = {
			currentUser : this.props.data
		}
	}

	componentDidMount(){
		//this.fetchData();
	}

	fetchData(){

	}

	render(){
		let tempUser = this.state.currentUser;
		let user = JSON.parse(tempUser);
		console.log(user);

		return (
		  <View style={Theme.profileContainer}>
		  	<View style={Theme.profile_imageRow}>
		  		<Image
		  			source={require('../../assets/icons/personProfile.png')}
		  			style={Theme.profile_profileImage} />
				<View style={Theme.profile_textRow}>
					<Text style={Theme.profile_profileName}>{user.first_name}</Text>
					<Text style={Theme.profile_profileName}>{user.last_name}</Text>
				</View>
			</View>
			<View style={Theme.profile_detailsText}>
					<Text style={Theme.profile_profileDetails}>
						Name: <Text style={Theme.profile_profileDetailsLite}>{`${user.first_name} ${user.last_name}`}</Text>
					</Text>
					<Text style={Theme.profile_profileDetails}>
						Username: <Text style={Theme.profile_profileDetailsLite}>{user.username}</Text>
					</Text>
					<Text style={Theme.profile_profileDetails}>
						Age: <Text style={Theme.profile_profileDetailsLite}>{user.age}</Text>
					</Text>
					<Text style={Theme.profile_profileDetails}>
						Blood Group: <Text style={Theme.profile_profileDetailsLite}>{user.bloodGroup}</Text>
					</Text>
					<Text style={Theme.profile_profileDetails}>
						Allergies: <Text style={Theme.profile_profileDetailsLite}>{user.allergies}</Text>
					</Text>
				</View>
		  </View>

		);
	}
};

module.exports = Profile;