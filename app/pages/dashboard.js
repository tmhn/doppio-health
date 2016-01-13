// DoppioHealth - dashboard.js

'use strict';

var React = require('react-native');
var Theme = require('../components/theme/theme');
var api = require('../api/api');
var componentsApi = require('../api/components-api');
var data = require('../data/data');
var Profile = require('./profile');

var componentsRegistry = {
	/*
	mSmoking: require('./Apps/mSmoking'),
	mPills: require('./Apps/mPills'),
	mFluJab: require('./Apps/mFluJab'),
	mOptician: require('./Apps/mOptician'),
	mTest: require('./Apps/mTest'),
	*/
};

var {
	NavigatorIOS,
	Text,
	TouchableHighlight,
	TouchableOpacity,
	ScrollView,
	View,

} = React;

class Dashboard extends React.Component{
	openComponent(component){
		this.props.navigator.push({
			component: componentsRegistry[component],
			title: component
		});
	}

	render(){

		var list = Object.keys(data).map((key, index) => {
			var item = data[key];
			var bio = item.bio ? <Text style={Theme.dashboardDescription}> {item.bio} </Text> : <View/>;
			return(
				<View key={index}>
					<View style={Theme.rowContainer}>
						{componentsApi.getRowButton(item.title, this.openComponent.bind(this, item.component))}
						{bio}
					</View>
					{componentsApi.getSeparator()}
				</View>
			)
		})


		return (
			<ScrollView
			  style={Theme.dashboardContainer}>
		  		{list}
			</ScrollView>
		)
	}
};

module.exports = Dashboard;