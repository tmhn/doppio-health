/* @flow */
/* 
  Data is passed from parent through 'props' and is assigned to feedItems
*/
'use strict';

import React from 'react-native';
import Theme from '../../assets/theme/theme';
import Record from './record';

let {
  Component,
  Image,
  ListView,
  Text,
  TouchableHighlight,
  View,
} = React;

module.exports = class RecordContainer extends Component{
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
      dataSource: this.state.dataSource.cloneWithRows(feedItems.apps)
    });
  }

  onPress(rowData){
    this.props.navigator.push({
      title: rowData.name,
      component: Record,
      passProps: {
        data: rowData
      }
    });
  }

  renderRow(rowData){
    console.log(`>> record-container: ${JSON.stringify(rowData)}`)
    return (
      <TouchableHighlight
        onPress={()=> this.onPress(rowData)}
        underlayColor= '#FFF' >
        <View style={Theme.record_rowView}>
          <View style={Theme.record_rowText}>
            <Text style={Theme.record_rowTitle}>
              {rowData.name}
            </Text>
            <Text style={Theme.record_rowBio}>
              {rowData.description}
            </Text>
          </View>
        </View>
      </TouchableHighlight>
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
