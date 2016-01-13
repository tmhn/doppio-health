// DoppioHealth - profile.js

'use strict';

var React = require('react-native');
var Theme = require('../components/theme/theme');

var {
  StyleSheet,
  View,
} = React;

class Profile extends React.Component{
  render() {
    return (
      <View style={Theme.profileContainer}>
      </View>
    );
  }
};

module.exports = Profile;