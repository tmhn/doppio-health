'use strict';

var React = require('react-native');
var Theme = require('../components/theme/theme');

var {
  StyleSheet,
  Text,
  View,
} = React;

class DiaryFeed extends React.Component{
  render() {
    return (
      <View style={Theme.mainContainer}>
      	<Text>Diary Feed</Text>
      </View>
    );
  }
};

module.exports = DiaryFeed;