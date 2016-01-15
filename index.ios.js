// DoppioHealth - index.ios.js
'use strict';

var React = require('react-native');
var Main = require('./app/pages/main/main');
var Theme = require('./app/components/theme/theme');

var {
  AppRegistry,
  NavigatorIOS,
  StyleSheet,
  Text,
  View,
} = React;

class DoppioHealth extends React.Component{
  render() {
    return (
      <NavigatorIOS
        style={Theme.container}
        initialRoute={{
          title: 'Home',
          component: Main
        }} />
    );
  }
};

AppRegistry.registerComponent('DoppioHealth', () => DoppioHealth);
