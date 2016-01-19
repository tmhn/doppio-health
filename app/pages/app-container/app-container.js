// DoppioHealth - app-container.js
'use strict';

var React = require('react-native');
var Theme = require('../../components/theme/theme');

var HomeFeed = require('../../feeds/homeFeed');
var DiaryFeed = require('../../feeds/diaryFeed');
var Profile = require('../profile/profile');

var DB = require('../../data/db');
var DBEvents = require('react-native-db-models').DBEvents

var {
	NavigatorIOS,
  TabBarIOS,
  StyleSheet,
  View,
} = React;

class AppContainer extends React.Component{
  constructor(props){
    super(props);

    this.state = {
      selectedTab: 'home'
    }
  }

  componentDidMount(){
    //this.fetchData();
  }

  fetchData(){
    DB.users.get_all(function(result){
        console.log("All Users: "),
        console.log(result);
    })
  }

  render() {
    return (
      <TabBarIOS style={Theme.appContainer}>
        <TabBarIOS.Item
          title="Home"
          icon={require('../../components/icons/home.png')}
          selected={this.state.selectedTab == "home"}
          onPress={()=> this.setState({selectedTab: 'home'})} >

          <NavigatorIOS
            style={{flex: 1}}
            initialRoute={{
              title: 'Home',
              component: HomeFeed
            }} />
        </TabBarIOS.Item>


        <TabBarIOS.Item
          title="Diary"
          icon={require('../../components/icons/bookmark.png')}
          selected={this.state.selectedTab == "diary"}
          onPress={()=> this.setState({selectedTab: 'diary'})} >

          <NavigatorIOS
            style={{flex: 1}}
            initialRoute={{
              title: 'Diary',
              component: DiaryFeed
            }} />
        </TabBarIOS.Item>

        <TabBarIOS.Item
          title="Profile"
          icon={require('../../components/icons/person.png')}
          selected={this.state.selectedTab == "profile"}
          onPress={()=> this.setState({selectedTab: 'profile'})} >

          <NavigatorIOS
            style={{flex: 1}}
            initialRoute={{
              title: 'Profile',
              component: Profile
            }} />
        </TabBarIOS.Item>

      </TabBarIOS>
    );
  }
};

module.exports = AppContainer;
