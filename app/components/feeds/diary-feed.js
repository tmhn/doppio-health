'use strict';

import React from 'react-native';
import Theme from '../assets/theme/theme';
import Data from '../data/data';

let {
  Component,
  ListView,
  StyleSheet,
  Text,
  View,
} = React;

let diaryItems = {
    "diaryFeed": [
        {
            "title": "Apple",
            "bio": "Pink Lady",
            "ref": "fruit",
            "timeStamp": "yesterday",
            "bundle": "record",
            "component": "Fruit"
        },
        {
            "title": "Banana",
            "bio": "Candy Banana",
            "ref": "fruit",
            "timeStamp": "yesterday",
            "bundle": "record",
            "component": "Fruit"
        },
        {
            "title": "Apple",
            "bio": "Pink Lady TODAY",
            "ref": "fruit",
            "timeStamp": "today",
            "bundle": "record",
            "component": "Fruit"
        },
        {
            "title": "Banana",
            "bio": "Candy Banana TODAY",
            "ref": "fruit",
            "timeStamp": "today",
            "bundle": "record",
            "component": "Fruit"
        }
    ]
};

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
    let feedItems = diaryItems;

    this.setState({
      dataSource: this.state.dataSource.cloneWithRows(feedItems.diaryFeed),
    });
  }

  renderHeader(rowData){

  }

  renderRow(rowData){
    return(
      <View style={Theme.diary_row}>
        <View style={Theme.diary_rowText}>
          <Text style={Theme.diary_rowTitle}>
            {rowData.title}
          </Text>
          <Text style={Theme.diary_rowBio}>
            {rowData.bio}
          </Text>
        </View>
      </View>
    );
  }

  render() {
    return (
      <View style={Theme.diary_container}>
        <ListView
          dataSource={this.state.dataSource}
          renderRow={this.renderRow.bind(this)} />
      </View>
    );
  }
};
