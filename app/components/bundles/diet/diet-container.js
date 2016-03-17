/* @flow */
/* 
	Data is passed from parent through 'props' and is assigned to feedItems
*/

'use strict';

import React from 'react-native';
import Theme from '../../assets/theme/theme';
import CompApi from '../../api/components-api';
import Diet from './diet';

let {
	Component,
	Image,
	ListView,
  	Text,
  	TouchableHighlight,
  	View,
} = React;

module.exports = class DietContainer extends Component{
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
			dataSource: this.state.dataSource.cloneWithRows(feedItems.apps)
		});
	}

	onPress(rowData){
	    this.props.navigator.push({
      		title: rowData.name,
      		component: Diet,
      		passProps: {
        		data: rowData
      		}
    	});
	}

	renderRow(rowData){
		return(
			<TouchableHighlight
				onPress={()=> this.onPress(rowData)}
				underlayColor='#FFF'>
				<View style={Theme.diet_rowView}>
					<View style={Theme.diet_rowText}>
			        	<Text style={Theme.diet_rowTitle}>
			            	{rowData.name}
			          	</Text>
          	            <Text style={Theme.diet_rowBio}>
              				{rowData.description}
            			</Text>
      	            	<Text style={Theme.diet_rowBio}>
              				Goal: {rowData.goal}
            			</Text>
			        </View>
				</View>
			</TouchableHighlight>
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
