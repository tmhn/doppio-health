/* @flow */
'use strict';

import React from 'react-native';
import Theme from '../../assets/theme/theme';

let {
	Component,
	Image,
	StyleSheet,
	Text,
  	View,
} = React;

class Intro extends Component{
  
  render() {
    
    return (
      <View style={Theme.introContainer}>
      	<Text style={Theme.introHeader}>DoppioHealth iOS</Text>
      	<View style={{padding: 35}}>

      		<View style={{paddingBottom: 20, flexDirection: 'row'}}>
      			<Image
      				source={require('../../assets/icons/list-white.png')}
      				style={{height: 50, width: 50}} />
				<View style={{flex: 1, flexDirection: 'column'}}>
  					<Text style={Theme.introSubheading}>Feed</Text>
  					<Text style={Theme.introText}>HealthBits are created by your healthcare professional</Text>
				</View>
      		</View>

      		<View style={{paddingBottom: 20, flexDirection: 'row'}}>
      			<Image
      				source={require('../../assets/icons/diary-white.png')}
      				style={{height: 50, width: 50}} />
  				<View style={{flex: 1, flexDirection: 'column'}}>
  					<Text style={Theme.introSubheading}>Diary</Text>
  					<Text style={Theme.introText}>Diary lets you view your activities for specific time periods easily</Text>
				</View>
      		</View>

      		<View style={{paddingBottom: 20, flexDirection: 'row'}}>
      			<Image
      				source={require('../../assets/icons/person-white.png')}
      				style={{height: 50, width: 50}} />
  				<View style={{flex: 1, flexDirection: 'column'}}>
  					<Text style={Theme.introSubheading}>Profile</Text>
  					<Text style={Theme.introText}>Profile is a snapshot of you where you can see your details</Text>
				</View>
      		</View>
      	</View>
      </View>
    );
  }
};



module.exports = Intro;
