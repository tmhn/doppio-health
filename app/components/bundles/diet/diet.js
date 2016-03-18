/* @flow */
'use strict';

import React from 'react-native';
import Theme from '../../assets/theme/theme';
import api from '../api';

import DB from '../../data/db';

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
			count: 0,
			userBoundary: this.props.data.goal,
			name: this.props.data.name,
			description: this.props.data.description,
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
		let currentCount = this.state.count;
		let currentUserBoundary = this.state.userBoundary;

		if(currentCount == currentUserBoundary){

			this.alertUser();
			this.setState({
			  count: this.state.count + 1,
			});

		} else {
			this.setState({
			  count: this.state.count + 1
			});
		}
	}

	decrementCount(){
		if(this.state.count > 0){
			this.setState({
			  count: this.state.count - 1,
			});
		}
	}

	saveItem(){
		let name = this.state.name;
		let description = this.state.description;
		let count = this.state.count;

	    DB.diary.add({
	      name: name,
	      description: description,
	      count: count
	    }, function(added_data){
	      console.log(`>> Record - Added Data`)
	      console.log(added_data)
	    })

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


  	render() {
	    let increment = "+";
	    let decrement = "-";
	    let save = "Save";

	    return (
	      <View style={Theme.bundle_page}>
	      	<Text style={Theme.bundle_header}>{this.props.data.name}</Text>
	      	<Text style={Theme.bundle_text}>{this.props.data.description}</Text>
	      	<Text style={Theme.bundle_text}>Count: {this.state.count}</Text>
	        {api.getButton(increment, this.incrementCount.bind(this))}
	        {api.getButton(decrement, this.decrementCount.bind(this))}
	        {api.getSaveButton(save, this.saveItem.bind(this))}
	      </View>
	    );
  	}
};

module.exports = Diet;
