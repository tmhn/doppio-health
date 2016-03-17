/* @flow */
/* 
	Data is passed from parent through 'props' and is assigned to feedItems
*/
'use strict';

import React from 'react-native';
import Theme from '../../assets/theme/theme';
import Reminder from './reminder';

let {
	Component,
	Image,
	ListView,
	StyleSheet,
	Text,
	TouchableHighlight,
  	View,
} = React;

class ReminderContainer extends Component{
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
		console.log(feedItems);
		
		this.setState({
			dataSource: this.state.dataSource.cloneWithRows(feedItems.apps)
		});
	}

	onPress(rowData){
		this.props.navigator.push({
			title: rowData.name,
			component: Reminder,
			passProps: {
				data: rowData
			}
		});
	}

	renderRow(rowData){
		return(
			<TouchableHighlight
				onPress={()=> this.onPress(rowData)}
				underlayColor= '#FFF' >
				<View style={Theme.reminder_rowView}>
					<View style={Theme.reminder_rowText}>
			          <Text style={Theme.reminder_rowTitle}>
			            {rowData.name}
			          </Text>
			          <Text style={Theme.reminder_rowBio}>
			          	{rowData.description}
			          </Text>
  			          <Text style={Theme.reminder_rowBio}>
			          	Max: {rowData.max}
			          </Text>
			          <View style={Theme.reminder_timesSection}>
			          	<Image
			          		source={require('../../assets/icons/clock_red.png')}
			          		style={Theme.reminder_timesIcon} />
			          		<View style={Theme.reminder_timesTextRow}>
				          		<Text style={Theme.reminder_timesText}>{rowData.time}</Text>
				          		<Text style={Theme.reminder_timesText}>{rowData.frequencyText2}</Text>
			          		</View>
			          </View>
		        	</View>
				</View>
			</TouchableHighlight>
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

module.exports = ReminderContainer;
