/* @flow */
'use strict';

import React from 'react-native';
import Theme from '../../../components/theme/theme';

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

		this.setState({
			dataSource: this.state.dataSource.cloneWithRows(feedItems)
		});
	}

	renderReminderSection(rowData){
		return(
			<Text style={Theme.reminder_timesText}>{rowData.frequency}</Text>
		);
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
		          		source={require('../../../components/icons/clock.png')}
		          		style={Theme.reminder_timesIcon} />
		          		<View style={Theme.reminder_timesTextRow}>
			          		<Text style={Theme.reminder_timesText}>7AM - 9AM</Text>
			          		<Text style={Theme.reminder_timesText}>10AM - 12PM</Text>
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
