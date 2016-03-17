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
  	View,
} = React;

class Reminder extends Component{
  	constructor(props){
  		super(props);

  		this.state = {
  			reminderCount: 0,
  			userBoundary: this.props.data.max,
  		}
  	}

  	alertUser(){
  		return(
  			AlertIOS.alert(
  				'Reminder Limit',
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
		);
  	}

  	incrementCount(){
  		let currentCount = this.state.reminderCount;
  		let currentUserBoundary = this.state.userBoundary;

  		if(currentCount == (currentUserBoundary - 1)){
  			this.alertUser();
  			{
  				this.setState({
  				  reminderCount: this.state.reminderCount + 1,
  				});
  			}
  		} else {
  			this.setState({
  			  reminderCount: this.state.reminderCount + 1,
  			});
  		}
  	}

  	saveRecord(){
    // Save counter to AS
    // Notify it has been saved
    // Pop Navigator

	    AlertIOS.alert(
	        `${this.props.data.name}`,
	        `${this.props.data.name} saved!`,
	        [
	          {
	            text: 'OK'
	          }
	        ]
	      )    
	    this.props.navigator.pop();
	  }

  	decrementCount(){
  		if(this.state.reminderCount > 0){
  			this.setState({
  			  reminderCount: this.state.reminderCount - 1,
  			});
  		}
  	}

	render() {

	    let increment = "+";
    	let decrement = "-";
    	let save = "Save";

    	return (
      		<View style={Theme.bundle_page}>
		      	<Text style={Theme.bundle_header}>{this.props.data.name}</Text>
		      	<Text style={Theme.bundle_text}>{this.props.data.description}</Text>
		      	<Text style={Theme.bundle_text}>Count: {this.state.reminderCount}</Text>
		      	<Text style={Theme.bundle_text}>Time: {this.props.data.time}</Text>
		        {api.getButton(increment, this.incrementCount.bind(this))}
		        {api.getButton(decrement, this.decrementCount.bind(this))}
		        {api.getSaveButton(save, this.saveRecord.bind(this))}
	      	</View>
    	);
	}
};

module.exports = Reminder;

