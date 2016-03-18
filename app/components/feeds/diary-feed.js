'use strict';

import React from 'react-native';
import Theme from '../assets/theme/theme';
import Data from '../data/data';

import UserService from '../helpers/UserService';

let {
  ActivityIndicatorIOS,  
  Component,
  ListView,
  StyleSheet,
  Text,
  View,
} = React;

class DiaryFeed extends Component{
  constructor(props){
    super(props);

    let ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 != r2
    });

    this.state = {
      dataSource: ds.cloneWithRows(['A', 'B', 'C']),
      showProgress: true,
      emptyDiary: true
    };
  }

  componentDidMount(){

    UserService.getDiaryFeed((result) => {
      let diaryItem = result;
      let item = diaryItem.rows
      let newStr = JSON.stringify(item)
      let diaryJson = JSON.parse(newStr)

      var array = [];
      for (let prop in item) {
        array.push(item[prop]);
      }

      console.log(array)

      if(!array.length == 0){
        this.setState({
          emptyDiary: false,
        });
      } else {
        this.setState({
          emptyDiary: true,
        });
      }


      this.setState({
        dataSource: this.state.dataSource.cloneWithRows(array),
      });
    })
  
  }

  renderDiaryUpdate(){
    console.log(`updating diary....`);
  }

  renderRow(rowData){
    return(
      <View style={Theme.diary_row}>
        <View style={Theme.diary_rowText}>
          <Text style={Theme.diary_rowTitle}>
            {rowData.name}
          </Text>
          <Text style={Theme.diary_rowBio}>
            {rowData.description}
          </Text>
          <Text style={Theme.diary_rowBio}>
            Count: {rowData.count}
          </Text>
        </View>
      </View>
    );
  }

  render() {

    this.renderDiaryUpdate();

    if(this.state.emptyDiary){
      return(
        <View style={Theme.mainContainer}>
          <Text style={Theme.title}>Diary Empty</Text>
        </View>
      )
    }

    return (
      <View style={Theme.diary_container}>
        <ListView
          dataSource={this.state.dataSource}
          renderRow={this.renderRow.bind(this)} />
      </View>
    );
  }
};

module.exports = DiaryFeed;
