/* @flow */
'use strict';

import React from 'react-native';
import Theme from '../../assets/theme/theme';

let {
	Component,
	StyleSheet,
	Text,
  	View,
} = React;

class Intro extends Component{
  
  render() {
    
    return (
      <View style={Theme.introContainer}>
      	<Text style={Theme.title}>Welcome to DoppioHealth</Text>
      </View>
    );
  }
};



module.exports = Intro;
