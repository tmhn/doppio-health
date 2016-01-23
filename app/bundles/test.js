'use strict';

import React from 'react-native';
import Record from './components/record/record';

var {
  Component
} = React;

class Test extends Component{
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

module.exports = Test; 