/* @flow */
'use strict';

var React = require('react-native');
var FeedData = require('../data/data');

var componentsRegistry = {
  Smoking: require('../bundles/smoking'),
  Pills: require('../bundles/pills'),
  FluJab: require('../bundles/flujab'),
  Optician: require('../bundles/optician'),
  Test: require('../bundles/test'),
};

var {
  NavigatorIOS,
  ListView,
  StyleSheet,
  Text,
  TouchableHighlight,
  View,
} = React;

class HomeFeed extends React.Component{
  constructor(props){
    super(props);

    var ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 != r2
    });

    this.state = {
      dataSource: ds.cloneWithRows(['A', 'B', 'C'])
    };
  }

  onPress(rowData){
    var component = componentsRegistry[rowData.title];

    this.props.navigator.push({
      title: `${rowData.title}`,
      component: component,
    });
  }

  renderRow(rowData){      

    return(
      <TouchableHighlight
          onPress={()=> this.onPress(rowData)}
          underlayColor='#FFF' >
          <View style={styles.rowView}>
            <View style={styles.rowViewText}>
              <Text style={styles.rowViewTitle}>
                {rowData.title}
              </Text>
              <Text style={styles.rowViewBio}>
                {rowData.bio}
              </Text>
            </View>
          </View>
      </TouchableHighlight>
    );
  }

  componentDidMount(){
    this.fetchFeed();
  }

  fetchFeed(){
    var feedItems = FeedData;

    this.setState({
      dataSource: this.state.dataSource.cloneWithRows(feedItems)
    });
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
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  rowView: {
    flex: 1,
    flexDirection: 'row',
    padding: 20,
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
  },

  rowViewBio: {
    backgroundColor: '#FFF',
    fontFamily: 'Avenir',
  }
});


module.exports = HomeFeed;