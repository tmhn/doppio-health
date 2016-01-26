/* @flow */
'use strict';

import React from 'react-native';
import Theme from '../../../components/theme/theme';
import CompApi from '../../../api/components-api';

let {
	Component,
	Image,
	ListView,
  	Text,
  	View,
} = React;

module.exports = class Diet extends Component{
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

	renderTimeIcons(){
		// Loops over the times and returns an icon and time for each item
	}

	renderRow(rowData){
		return(
			<View style={Theme.diet_rowView}>
				<View style={Theme.diet_rowText}>
		        	<Text style={Theme.diet_rowTitle}>
		            	{rowData.name}
		          	</Text>
		          	<Text style={Theme.diet_rowBio}>
		           		{rowData.bio}
		          	</Text>
			        <Text style={Theme.diet_rowBio}>
			        	{rowData.frequencyText}
			        </Text>

		        </View>
			</View>
		);
	}

	render() {
		return (
			<View style={Theme.diet_container}>
				<ListView
					dataSource={this.state.dataSource}
					renderRow={this.renderRow.bind(this)} />
		  	</View>
		);
	}
};
