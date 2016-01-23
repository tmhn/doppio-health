/* @flow */
'use strict';

import React from 'react-native';
import Theme from '../../../components/theme/theme';

let {
  Component,
	Image,
	ListView,
	NavigatorIOS,
	StyleSheet,
	Text,
	TouchableHighlight,
	View,
} = React;

module.exports = class Record extends Component{
  constructor(props){
    super(props);

    let ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 != r2
    });

    this.state = {
      dataSource: ds.cloneWithRows(['A', 'B', 'C'])
    };
  };

  componentDidMount(){
    this.fetchFeed();
  }

  fetchFeed(){
    let feedItems = this.props.data;
    
    this.setState({
      dataSource: this.state.dataSource.cloneWithRows(feedItems)
    });
  }

  decrementor(count){
    console.log('Decrementor pressed');
    console.log(count - 1);
  }

  incrementor(count, rowData){
    console.log(rowData.totalrows);
    console.log('Incrementer pressed');
    let incCount = (count + 1);
  }

  renderRow(rowData){
    return (
      <View style={Theme.record_rowView}>
        <View style={Theme.record_rowText}>
          <Text style={Theme.record_rowTitle}>
            {rowData.name}
          </Text>
          <Text style={Theme.record_rowBio}>
            {rowData.bio}
          </Text>

          <Text style={Theme.record_rowBio}>
            {rowData.frequencyText}
          </Text>

        </View>

        <View style={Theme.record_rowRightContainer}>
          <TouchableHighlight
            onPress={this.decrementor.bind(this, rowData.count)}
            underlayColor={'#FFF'}>
            <Image 
              source={require('../../../components/icons/minus_solid.png')}
              style={Theme.record_rowIcon} />
          </TouchableHighlight>

          <Text style={Theme.record_rowValue}>{rowData.count}</Text>

          <TouchableHighlight
            onPress={this.incrementor.bind(this, rowData.count, rowData)}
            underlayColor={'#FFF'}>
            <Image 
              source={require('../../../components/icons/plus_solid.png')}
              style={Theme.record_rowIcon} />
          </TouchableHighlight>
        </View>
      </View>
    );
  }

  render() {
    return (
      <View style={Theme.record_container}>
        <ListView
          dataSource={this.state.dataSource}
          renderRow={this.renderRow.bind(this)} />
      </View>
    );
  }
};
