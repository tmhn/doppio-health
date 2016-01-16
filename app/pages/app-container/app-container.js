// DoppioHealth - app-container.js
'use strict';

var React = require('react-native');
var Dashboard = require('../dashboard/dashboard');

var {
	NavigatorIOS,
  StyleSheet,
  View,
} = React;

class AppContainer extends React.Component{
  render() {
    return (
    	<NavigatorIOS
    	  style={styles.container}
    	  initialRoute={{
    	    title: 'Home',
    	    component: Dashboard
    	  }} />
    	
    );
  }
};


var styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#111111'
  },
});


module.exports = AppContainer;
