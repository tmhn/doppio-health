/* @flow */
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

class Diet extends Component{
	constructor(props){
		super(props);

		this.state = {
			dietCount: 0,
			userBoundary: this.props.data.goal
		}
	}

	alertUser(){
		return(
			AlertIOS.alert(
        		'Reached Goal',
        		`You've beaten your goal for ${this.props.data.name}. Well Done!`,
        		[{
            		text: 'OK'
          		},
          		{
            		text: 'Cancel'
          		}]
      			)
      	)
	}

	incrementCount(){
		let currentCount = this.state.dietCount;
		let currentUserBoundary = this.state.userBoundary;

		if(currentCount == currentUserBoundary){

			this.alertUser();
			this.setState({
			  dietCount: this.state.dietCount + 1,
			});

		} else {
			this.setState({
			  dietCount: this.state.dietCount + 1
			});
		}
	}

	decrementCount(){
		if(this.state.dietCount > 0){
			this.setState({
			  dietCount: this.state.dietCount - 1,
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


  	render() {
	    let increment = "+";
	    let decrement = "-";
	    let save = "Save";

	    return (
	      <View style={Theme.bundle_page}>
	      	<Text style={Theme.bundle_header}>{this.props.data.name}</Text>
	      	<Text style={Theme.bundle_text}>{this.props.data.description}</Text>
	      	<Text style={Theme.bundle_text}>Count: {this.state.dietCount}</Text>
	        {api.getButton(increment, this.incrementCount.bind(this))}
	        {api.getButton(decrement, this.decrementCount.bind(this))}
	        {api.getSaveButton(save, this.saveRecord.bind(this))}
	      </View>
	    );
  	}
};

module.exports = Diet;
