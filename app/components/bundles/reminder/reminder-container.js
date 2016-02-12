/* @flow */
/* 
	Data is passed from parent through 'props' and is assigned to feedItems
*/
'use strict';

import React from 'react-native';
import Theme from '../../assets/theme/theme';

let {
	Component,
	Image,
	ListView,
	StyleSheet,
	Text,
  	View,
} = React;

module.exports = class Reminder extends Component{
	constructor(props){
		super(props);

		let ds = new ListView.DataSource({
			rowHasChanged: (r1, r2) => r1 != r2
		});

		this.state = {
			dataSource: ds.cloneWithRows(['A', 'B', 'C'])
		};
	}

	componentDidMount(){
		this.fetchFeed();
	}

	fetchFeed(){
		let feedItems = this.props.data;
		console.log(feedItems.cats.length);
		
		this.setState({
			dataSource: this.state.dataSource.cloneWithRows(feedItems.cats)
		});
	}

	renderReminderSection(rowData){
		//console.log(rowData.frequency);
	}

	renderRow(rowData){
		return(
			<View style={Theme.reminder_rowView}>
				<View style={Theme.reminder_rowText}>
		          <Text style={Theme.reminder_rowTitle}>
		            {rowData.name}
		          </Text>
		          <Text style={Theme.reminder_rowBio}>
		            {rowData.bio}
		          </Text>

		          <View style={Theme.reminder_timesSection}>
		          	<Image
		          		source={require('../../assets/icons/clock_red.png')}
		          		style={Theme.reminder_timesIcon} />
		          		<View style={Theme.reminder_timesTextRow}>
			          		<Text style={Theme.reminder_timesText}>{rowData.frequencyText1}</Text>
			          		<Text style={Theme.reminder_timesText}>{rowData.frequencyText2}</Text>

			          		{this.renderReminderSection(rowData)}
		          		</View>
		          </View>


		        </View>
			</View>
		);
	}

	render() {
		return (
		  <View style={Theme.reminder_container}>
		  	<ListView
	          dataSource={this.state.dataSource}
	          renderRow={this.renderRow.bind(this)} />
		  </View>
		);
	}
};
