'use strict';

var React = require('react-native');
var Theme = require('../components/theme/theme');

var {
  StyleSheet,
  Text,
  View,
} = React;

class Test extends React.Component{
  render() {
    return (
      <View style={Theme.mainContainer}>
      	<Text>Test page</Text>
      </View>
    );
  }
};

module.exports = Test;