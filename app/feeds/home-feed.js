/* @flow */
'use strict';

import React from 'react-native';
import Theme from '../components/theme/theme';

let componentsRegistry = {
  diet: require('../bundles/components/diet/diet-container'),
  record: require('../bundles/components/record/record-container'),
  reminder: require('../bundles/components/reminder/reminder-container')
};

let {
  Component,
  NavigatorIOS,
  ListView,
  StyleSheet,
  Text,
  TouchableHighlight,
  View,
} = React;


module.exports = class HomeFeed extends Component{
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
    let feedItems = this.props.data;

    this.setState({
      dataSource: this.state.dataSource.cloneWithRows(feedItems.apps),
    });
  }

  onPress(rowData){
    let component = componentsRegistry[rowData.bundle];

    this.props.navigator.push({
      title: `${rowData.title}`,
      component: component,
      passProps: {
          data: rowData
      }

    });
  }

  renderHeader(){
    let localUserInfo = this.props.data;

    return (
      <View style={Theme.homefeed_header}>
        <Text style={Theme.homefeed_headerTitle}>Hi {this.props.data.userInfo.firstName}</Text>
        <Text style={Theme.homefeed_headerText}>{this.props.data.userInfo.homeBio}</Text>
      </View>
    );
  }

  renderRow(rowData){
    return(
      <TouchableHighlight
          onPress={()=> this.onPress(rowData)}
          underlayColor='#FFF' >
          <View style={Theme.homefeed_row}>
            <View style={Theme.homefeed_rowText}>
              <Text style={Theme.homefeed_rowTitle}>
                {rowData.title}
              </Text>
              <Text style={Theme.homefeed_rowBio}>
                {rowData.bio}
              </Text>
            </View>
          </View>
      </TouchableHighlight>
    );
  }

  

  render() {
    return (
      <View style={Theme.homefeed_container}>
        <ListView
          dataSource={this.state.dataSource}
          renderHeader={this.renderHeader.bind(this)}
          renderRow={this.renderRow.bind(this)} />
      </View>
    );
  }
};

