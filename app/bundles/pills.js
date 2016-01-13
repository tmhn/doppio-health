'use strict';

var React = require('react-native');
var Theme = require('../components/theme/theme');

var {
  StyleSheet,
  Text,
  View,
} = React;

class Pills extends React.Component{
  render() {
    return (
      <View style={Theme.mainContainer}>
      	<Text>Pills page</Text>
      </View>
    );
  }
};

module.exports = Pills;