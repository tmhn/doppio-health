'use strict';

import React from 'react-native';
import Theme from '../components/theme/theme';
import Record from './components/record/record';

var {
  Image,
  NavigatorIOS,
  ListView,
  StyleSheet,
  View,
} = React;

class Test extends React.Component{
  render() {

    var feedItems = [
    {'id': '1', 'name': 'Paracetamol', 'bio': 'Extra strength', 'count': 3, 'frequencyText': '3x daily'}, 
    {'id': '2', 'name': 'Ibuprofen', 'bio': 'Normal', 'count': 8, 'frequencyText': '3x daily'}, 
    {'id': '3', 'name': 'Codeine', 'bio': 'Hospital strength', 'count': 2, 'frequencyText': '3x daily'}, 
    {'id': '4', 'name': 'Fluclox', 'bio': 'Hospital strength', 'count': 6}
  ];

    return (
        <Record data={feedItems}/>
    );
  }
};

var styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    backgroundColor: '#FFF',
  },
});

module.exports = Test; 