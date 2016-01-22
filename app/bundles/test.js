'use strict';

var React = require('react-native');
var Theme = require('../components/theme/theme');

var {
  NavigatorIOS,
  ListView,
  StyleSheet,
  Text,
  View,
} = React;

class Test extends React.Component{

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
    var feedItems = [{'name': 'Paracetamol'}, {'name': 'Ibuprofen'}, {'name': 'Codeine'}, {'name': 'Fluclox'}];

      

    this.setState({
      dataSource: this.state.dataSource.cloneWithRows(feedItems)
    });
  }

  renderRow(rowData){
    return (
      <View style={styles.rowView}>
        <View style={styles.rowViewText}>
          <Text style={styles.rowViewTitle}>
            {rowData}
          </Text>
          <Text style={styles.rowViewBio}>
            {rowData}
          </Text>
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
  },

  rowViewBio: {
    backgroundColor: '#FFF',
    fontFamily: 'Avenir',
  }
});

module.exports = Test;