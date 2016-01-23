'use strict';

var React = require('react-native');
var Theme = require('../components/theme/theme');

var {
  Image,
  NavigatorIOS,
  ListView,
  StyleSheet,
  Text,
  TouchableHighlight,
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
    var feedItems = [{'id': '1', 'name': 'Paracetamol', 'bio': 'Extra strength', 'count': '3'}, {'id': '2', 'name': 'Ibuprofen', 'bio': 'Normal', 'count': '8'}, {'id': '3', 'name': 'Codeine', 'bio': 'Hospital strength', 'count': '2'}, {'id': '4', 'name': 'Fluclox', 'bio': 'Hospital strength', 'count': '6'}];
    
    this.setState({
      dataSource: this.state.dataSource.cloneWithRows(feedItems)
    });
  }

  decrementor(count){
    console.log('Decrementor pressed');
  }

  incrementor(count){
    console.log('Incrementer pressed');
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
        </View>

        <View style={styles.rowViewRight}>

          <TouchableHighlight
            onPress={this.decrementor.bind(this, rowData.count)}
            underlayColor={'#FFF'}>
            <Image 
              source={require('../components/icons/minus_solid.png')}
              style={styles.leftRowIcon} />
          </TouchableHighlight>

          <Text style={styles.rowCount}>{rowData.count}</Text>

          <TouchableHighlight
            onPress={this.incrementor.bind(this, rowData.count)}
            underlayColor={'#FFF'}>
            <Image 
              source={require('../components/icons/plus_solid.png')}
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

module.exports = Test;