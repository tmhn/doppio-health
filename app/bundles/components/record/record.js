/* @flow */
'use strict';

import React from 'react-native';
import Theme from '../../../components/theme/theme';

let {
  Component,
  StyleSheet,
  Text,
  View,
} = React;

module.exports = class Record extends Component{
  render() {
    return (
      <View style={Theme.mainContainer}>
      	<Text style={Theme.title}>{this.props.data.name}</Text>
      	<Text style={Theme.title}>{this.props.data.bio}</Text>
      	<Text style={Theme.title}>{this.props.data.count}</Text>
      </View>
    );
  }
};
