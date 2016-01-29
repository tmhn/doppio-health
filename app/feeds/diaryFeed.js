'use strict';

import React from 'react-native';
import Theme from '../components/theme/theme';
import Data from '../data/data';

let {
  Component,
  ListView,
  StyleSheet,
  Text,
  View,
} = React;

module.exports = class DiaryFeed extends Component{
  constructor(props){
    super(props);

    let ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 != r2
    });

    this.state = {
      dataSource: ds.cloneWithRows(['A', 'B', 'C']),
    };
  }

  componentDidMount(){
    this.fetchFeed();
  }

  fetchFeed(){
    let feedItems = Data;

    this.setState({
      dataSource: this.state.dataSource.cloneWithRows(feedItems.apps[0].cats[0]),
    });
  }

  renderHeader(rowData){

  }

  renderRow(rowData){
    return(
      <View style={Theme.diary_row}>
        <View style={Theme.diary_rowText}>
          <Text style={Theme.diary_rowTitle}>
            {rowData.name}
          </Text>
          <Text style={Theme.diary_rowBio}>
            {rowData.name}
          </Text>
        </View>
      </View>
    );
  }

  render() {
    return (
      <View style={Theme.diaryContainer}>
        <ListView
          dataSource={this.state.dataSource}
          renderRow={this.renderRow.bind(this)} />
      </View>
    );
  }
};
