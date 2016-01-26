'use strict';

import React from 'react-native';
import Theme from '../components/theme/theme';
import Record from './components/record/record';

let {
  Component,
  StyleSheet,
  Text,
  View,
} = React;

module.exports = class Smoking extends Component{
  render() {

    var feedItems = [
      {'id': '1', 'name': 'Marlboro', 'bio': 'Lights', 'count': 3, 'frequencyText': ''}, 
      {'id': '2', 'name': 'Pipe', 'bio': 'Smoking pipe', 'count': 8, 'frequencyText': '3x daily'},
      {'id': '3', 'name': 'E-Cig', 'bio': 'Menthol flavour', 'count': 8, 'frequencyText': '5x daily'},  
    ];

    return (
      <Record data={feedItems} />
    );
  }
};