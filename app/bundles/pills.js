'use strict';

import React from 'react-native';
import Reminder from './components/reminder/reminder';

let {
  Component
} = React;

module.exports = class Pills extends Component{
  render() {

    var feedItems = [
      {'id': '1', 'name': 'Paracetamol', 'bio': 'Extra strength', 'count': 3, 'frequency': ['7AM - 9AM', '12PM - 2PM']}, 
      {'id': '2', 'name': 'Ibuprofen', 'bio': 'Normal', 'count': 8, 'frequency': '3x daily'}, 
      {'id': '3', 'name': 'Codeine', 'bio': 'Hospital strength', 'count': 2, 'frequency': '3x daily'}, 
      {'id': '4', 'name': 'Fluclox', 'bio': 'Hospital strength', 'count': 6}
    ];

    return (
        <Reminder data={feedItems}/>
    );
  }
};