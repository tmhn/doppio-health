/* @flow */
'use strict';

import React from 'react-native';
import Theme from '../../../components/theme/theme';

let {
  Component,
  Image,
  ListView,
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
    //console.log(feedItems.cats.length);

    this.setState({
      dataSource: this.state.dataSource.cloneWithRows(feedItems.cats)
    });
  }

  onPress(rowData){

  }


  renderRow(rowData){

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
              Record: {rowData.bio}
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
