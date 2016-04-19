// DoppioHealth - profile.js

'use strict';

import React from 'react-native';
import Theme from '../../assets/theme/theme';

import UserService from '../../helpers/UserService';

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

		 }
	}

	componentWillMount(){
		this.fetchData();
	}

	fetchData(){
		UserService.getUserSessionData((result) => {
			let firstName = result.first_name;
			let lastName = result.last_name;
			let username = result.username;
			let userPass = result.userPass;
			let age = result.age;
			let bloodGroup = result.bloodGroup;
			let allergies = result.allergies;

			/*
			this.setState({
			  FirstName: firstName,
			  LastName: lastName,
			  Username: username,
			  UserPass: userPass,
			  Age: age,
			  BloodGroup: bloodGroup,
			  Allergies: allergies
			});
			*/

			this.setState({
			  FirstName: "Mick",
			  LastName: "Colborn",
			  Username: "mick_colborn",
			  UserPass: "apple",
			  Age: 22,
			  BloodGroup: "O+",
			  Allergies: allergies
			});

			console.log(`>> ProfilePage: User -----`)
			console.log(`>> ${this.state.FirstName}`)
			console.log(`>> ${this.state.LastName}`)
			console.log(`>> ${this.state.Username}`)
			console.log(`>> ${this.state.UserPass}`)
			console.log(`>> ${this.state.Age}`)
			console.log(`>> ${this.state.BloodGroup}`)
			console.log(`>> ${this.state.Allergies}`)
		})
	}

	render(){

		return (
		  <View style={Theme.profileContainer}>
		  	<View style={Theme.profile_imageRow}>
		  		<Image
		  			source={require('../../assets/icons/personProfile.png')}
		  			style={Theme.profile_profileImage} />
				<View style={Theme.profile_textRow}>
					<Text style={Theme.profile_profileName}>{this.state.FirstName}</Text>
					<Text style={Theme.profile_profileName}>{this.state.LastName}</Text>
				</View>
			</View>
			<View style={Theme.profile_detailsText}>
					<Text style={Theme.profile_profileDetails}>
						Name: <Text style={Theme.profile_profileDetailsLite}>{`${this.state.FirstName} ${this.state.LastName}`}</Text>
					</Text>
					<Text style={Theme.profile_profileDetails}>
						Username: <Text style={Theme.profile_profileDetailsLite}>{this.state.Username}</Text>
					</Text>
					<Text style={Theme.profile_profileDetails}>
						Age: <Text style={Theme.profile_profileDetailsLite}>{this.state.Age}</Text>
					</Text>
					<Text style={Theme.profile_profileDetails}>
						Blood Group: <Text style={Theme.profile_profileDetailsLite}>{this.state.BloodGroup}</Text>
					</Text>
				</View>
		  </View>

		);
	}
};

module.exports = Profile;