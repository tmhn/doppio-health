/* @flow */
'use strict';

import React from 'react-native';
import Theme from '../assets/theme/theme';
import UserService from '../helpers/UserService';

let componentsRegistry = {
  Diet: require('../bundles/diet/diet-container'),
  Record: require('../bundles/record/record-container'),
  Reminder: require('../bundles/reminder/reminder-container')
};

let {
  ActivityIndicatorIOS, 
  Component,
  NavigatorIOS,
  ListView,
  StyleSheet,
  Text,
  TouchableHighlight,
  View,
} = React;


class HomeFeed extends Component{
  constructor(props){
    super(props);

    let ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 != r2
    });

    this.state = {
      dataSource: ds.cloneWithRows(['A', 'B', 'C']),
      showProgress: true
    };
  }

  componentDidMount(){
    this.fetchFeed();    
  }

  fetchFeed(){
    UserService.getUserSessionData((result) => {
      console.log(result)
      console.log(`HomeFeed: ${result.userId}`)
      
      let userId = result.userId

        fetch(`http://localhost:8080/api/app/${userId}`)
          .then((response) => {
            return response._bodyText;
        })
        .then((responseBody) => {
            let userResult = JSON.parse(responseBody)
            let userSandboxes = userResult.sandboxes
            
            console.log(userSandboxes)
            this.setState({
              dataSource: this.state.dataSource.cloneWithRows(userSandboxes),
              showProgress: false
            });

        })
        .done();

    });
  }

  onPress(rowData){
    let component = componentsRegistry[rowData.type];

    this.props.navigator.push({
      title: `${rowData.name}`,
      component: component,
      passProps: {
          data: rowData
      }

    });
  }

  renderHeader(){

    return (
      <View style={Theme.homefeed_header}>
        <Text style={Theme.homefeed_headerTitle}>Hi!</Text>
        <Text style={Theme.homefeed_headerText}>Welcome to DoppioHealth</Text>
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
                {rowData.name}
              </Text>
              <Text style={Theme.homefeed_rowBio}>
                {rowData.description}
              </Text>
            </View>
          </View>
      </TouchableHighlight>
    );
  }

  

  render() {
    // let currentApps = this.state.apps;
    // console.log(`>> HomeFeed Render - currentApps`)
    // console.log(currentApps)

    if(this.state.showProgress){
      return(
        <View style={{flex: 1, justifyContent: 'center'}}>
           <ActivityIndicatorIOS
            animating={true}
            size={'large'} />
        </View>
      )
    }

    return (
      <View style={Theme.homefeed_container}>
        <ListView
          dataSource={this.state.dataSource}
          //renderHeader={this.renderHeader.bind(this)}
          renderRow={this.renderRow.bind(this)} />
      </View>
    );
  }
};

module.exports = HomeFeed;

