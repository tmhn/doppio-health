/* @flow */
'use strict';

import React from 'react-native';
import Theme from '../../../components/theme/theme';

var {
	Image,
	ListView,
	NavigatorIOS,
	StyleSheet,
	Text,
	TouchableHighlight,
	View,
} = React;

class Record extends React.Component{
  constructor(props){
    super(props);

    var ds = new ListView.DataSource({
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
    var feedItems = this.props.data;
    
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
    var count = (count + 1);
  }

  renderRow(rowData){
    return (
      <View style={styles.rowView}>
        <View style={styles.rowViewText}>
          <Text style={styles.rowViewTitle}>
            {rowData.name}
          </Text>
          <Text style={styles.rowViewBio}>
            {rowData.bio}
          </Text>

          <Text style={styles.rowViewBio}>
            {rowData.frequencyText}
          </Text>

        </View>

        <View style={styles.rowViewRight}>

          <TouchableHighlight
            onPress={this.decrementor.bind(this, rowData.count)}
            underlayColor={'#FFF'}>
            <Image 
              source={require('../../../components/icons/minus_solid.png')}
              style={styles.leftRowIcon} />
          </TouchableHighlight>

          <Text style={styles.rowCount}>{rowData.count}</Text>

          <TouchableHighlight
            onPress={this.incrementor.bind(this, rowData.count, rowData)}
            underlayColor={'#FFF'}>
            <Image 
              source={require('../../../components/icons/plus_solid.png')}
              style={styles.rightRowIcon} />
          </TouchableHighlight>

        </View>
      </View>
    );
  }

  render() {
    return (
      <View style={styles.container}>
        <ListView
          dataSource={this.state.dataSource}
          renderRow={this.renderRow.bind(this)} />
      </View>
    );
  }
};


var styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    backgroundColor: '#FFF',
  },
  rowView: {
    flex: 1,
    flexDirection: 'row',
    padding: 20,
    paddingTop: 30,
    paddingBottom: 30,
    alignItems: 'center',
    borderColor: '#D7D7D7',
    borderBottomWidth: 1,
  },
  rowViewText: {
    paddingLeft: 20,
  },

  rowViewTitle: {
    backgroundColor: '#FFF', 
    fontWeight: '700',
    fontFamily: 'Avenir',
    fontSize: 20,
    color: '#498EE0',
  },

  rowViewBio: {
    backgroundColor: '#FFF',
    fontFamily: 'Avenir',
  },

  rowViewRight: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    paddingRight: 15,
  },

  rowCount: {
    paddingTop: 8,
  },

  rightRowIcon: {
    height: 39,
    width: 39,
    marginRight: 15,
    marginLeft: 15,
  },

  leftRowIcon: {
    height: 39,
    width: 39,
    marginRight: 15,
    marginLeft: 15,
  },

});

module.exports = Record;
