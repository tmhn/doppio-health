'use strict';

import React from 'react-native';
import Theme from '../components/theme/theme';

let {
  Component,
  Text,
  View,
} = React;

module.exports = class Optician extends Component{
  render() {
    return (
      <View style={Theme.mainContainer}>
      	<Text style={Theme.title}>Optician Page</Text>
      </View>
    );
  }
};
