/* @flow */
'use strict';

import React from 'react-native';
import Theme from '../assets/theme/theme';
import UserService from '../helpers/UserService';

let componentsRegistry = {
  Regime: require('../bundles/diet/diet-container'),
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
      showProgress: true,
      nullResult: false
    };
  }

  componentWillMount(){

      console.log(`>> HomeFeed - Feed Rendered`)

      UserService.getUserSessionData((result) => {
        console.log(`>> HomeFeed - result: `)
        console.log(result)
        
        let userId = result.userId
        console.log(`>> HomeFeed - userId ${userId}`)

          fetch(`http://localhost:8080/api/app/5703895d9850481200297e2e`)
          //fetch(`https://doppiohealth.herokuapp.com/api/app/${userId}`)
            .then((response) => {
              return response._bodyText;
          })
          .then((responseBody) => {
              let userResult = JSON.parse(responseBody)
              console.log("RESULT")
              console.log(userResult)

              console.log("USER SANDBOXES")
              console.log(userResult)
              
              let userSandboxes = userResult.sandboxes

              //let userSandboxes = userResult.sandboxes
              
              console.log(`>> HomeFeed - User Sandboxes:`)
              //console.log(userSandboxes)

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
    let description = rowData.description.slice(0,1).toUpperCase() + rowData.description.slice(1)

    return(
      <TouchableHighlight
          onPress={()=> this.onPress(rowData)}
          underlayColor='#FFF' >
          <View style={Theme.homefeed_row}>
            <View style={Theme.homefeed_rowText}>
              <Text style={Theme.homefeed_rowTitle}>
                {rowData.name}
              </Text>
              <Text style={Theme.homefeed_rowBio}><Text>Description: </Text>{rowData.description}</Text>
              <Text style={Theme.homefeed_rowBio}><Text>Type: </Text>{rowData.type}</Text>
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

    if(this.state.nullResult){
      return (
          <View style={Theme.mainContainer}>
            <Text style={Theme.title}>
              Error connecting to database
            </Text>
          </View>
        )
    }

    return (
      <View style={Theme.homefeed_container}>
        <ListView
          dataSource={this.state.dataSource}
          renderRow={this.renderRow.bind(this)} />
      </View>
    );
  }
};

module.exports = HomeFeed;

