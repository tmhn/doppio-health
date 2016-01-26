/* @flow */
'use strict';

import React from 'react-native';
import FeedData from '../data/data';
import Theme from '../components/theme/theme';

let componentsRegistry = {
  smoking: require('../bundles/smoking'),
  pills: require('../bundles/pills'),
  flujab: require('../bundles/flujab'),
  optician: require('../bundles/optician'),
  fruit: require('../bundles/fruit'),
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
      dataSource: ds.cloneWithRows(['A', 'B', 'C'])
    };
  }

  componentDidMount(){
    this.fetchFeed();
  }

  fetchFeed(){
    let feedItems = FeedData;

    this.setState({
      dataSource: this.state.dataSource.cloneWithRows(feedItems)
    });
  }

  onPress(rowData){
    let component = componentsRegistry[rowData.ref];

    this.props.navigator.push({
      title: `${rowData.title}`,
      component: component,
    });
  }

  renderHeader(){
    return (
      <View style={Theme.homefeed_header}>
        <Text style={Theme.homefeed_headerTitle}>Hi Tom</Text>
        <Text style={Theme.homefeed_headerText}>These are your bundles</Text>
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
          renderHeader={this.renderHeader}
          renderRow={this.renderRow.bind(this)} />
      </View>
    );
  }
};

