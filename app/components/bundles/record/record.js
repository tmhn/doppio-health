// Render component - Specific Page for Record Item
// Will allow users to
'use strict';

import React from 'react-native';
import Theme from '../../assets/theme/theme';
import api from '../api';

let {
  AlertIOS,
  Component,
  StyleSheet,
  Text,
  TouchableHighlight,
  View,
} = React;


class Record extends Component {
  constructor(props){
    super(props);

    this.state = {
      recordCount: 0,
      userBoundary: 5,
    }
  }

  alertUser(){
    return (
      AlertIOS.alert(
        'Record Limit',
        `You have reached your limit for ${this.props.data.name}`,
        [
          {
            text: 'OK'
          },
          {
            text: 'Cancel'
          },
        ]
      )

      )
  }

  incrementCount(){
    let currentCount = this.state.recordCount;
    let currentUserBoundary = this.state.userBoundary;

    if(currentCount == currentUserBoundary){
      this.alertUser();
      this.setState({
        recordCount: this.state.recordCount + 1,
      });
      
    } else {
      this.setState({
        recordCount: this.state.recordCount + 1,
      });
    }
  }

  decrementCount(){
    if(this.state.recordCount > 0){
        this.setState({
          recordCount: this.state.recordCount - 1,
    });
    }
  }

  saveRecord(){
    // Save counter to AS
    // Notify it has been saved
    // Pop Navigator

    AlertIOS.alert(
        `${this.props.data.name}`,
        `You have reached your limit for ${this.props.data.name}`,
        [
          {
            text: 'OK'
          }
        ]
      )    
    this.props.navigator.pop();
  }

  renderRecordCounter(){

  }

  render() {
    let increment = "+";
    let decrement = "-";
    let save = "Save";

    return (
      <View style={Theme.bundle_page}>
      	<Text style={Theme.bundle_header}>{this.props.data.name}</Text>
      	<Text style={Theme.bundle_text}>Count: {this.state.recordCount}</Text>
        {api.getButton(increment, this.incrementCount.bind(this))}
        {api.getButton(decrement, this.decrementCount.bind(this))}
        {api.getSaveButton(save, this.saveRecord.bind(this))}
      </View>
    );
  }
};

module.exports = Record;
