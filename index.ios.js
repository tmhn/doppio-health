// DoppioHealth - index.ios.js
'use strict';

var React = require('react-native');
var Main = require('./app/components/pages/main/main');

var {
  AppRegistry,
} = React;

class DoppioHealth extends React.Component{
  render() {
  		console.log(`>> Welcome to DoppioHealth`)
    return (
      <Main />
    );
  }
};


AppRegistry.registerComponent('DoppioHealth', () => DoppioHealth);
