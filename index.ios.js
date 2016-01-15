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

//var DoppioHealth = require('./app/pages/main/main');

AppRegistry.registerComponent('DoppioHealth', () => DoppioHealth);
