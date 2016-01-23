'use strict';

import React from 'react-native';
import Theme from '../components/theme/theme';

let {
  Component,
  StyleSheet,
  Text,
  View,
} = React;

module.exports = class Flujab extends Component{
  render() {
    return (
      <View style={Theme.mainContainer}>
      	<Text style={Theme.title}>Flujab</Text>
      </View>
    );
  }
};
