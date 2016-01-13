'use strict';

var React = require('react-native');
var Theme = require('../components/theme/theme');

var {
  StyleSheet,
  Text,
  View,
} = React;

class Smoking extends React.Component{
  render() {
    return (
      <View style={Theme.mainContainer}>
      	<Text>Smoking Page</Text>
      </View>
    );
  }
};

module.exports = Smoking;