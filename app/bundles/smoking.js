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
      {'id': '1', 'type': 'Cigarette', 'bio': 'Filter', 'numbercount': 3, 'frequencyText': ''}  
    ];

    return (
      <Record data={feedItems} />
    );
  }
};