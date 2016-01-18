'use strict';

var React = require('react-native');
var Theme = require('../components/theme/theme');

var {
  StyleSheet,
  Text,
  View,
} = React;

class Optician extends React.Component{
  render() {
    return (
      <View style={Theme.mainContainer}>
      	<Text style={Theme.title}>Optician Page</Text>
      </View>
    );
  }
};

module.exports = Optician;