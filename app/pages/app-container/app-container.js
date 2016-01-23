// DoppioHealth - app-container.js
'use strict';

var React = require('react-native');
var Theme = require('../../components/theme/theme');

var HomeFeed = require('../../feeds/homeFeed');
var DiaryFeed = require('../../feeds/diaryFeed');
var Profile = require('../profile/profile');
var authService = require('../../helpers/AuthService');
var userService = require('../../helpers/UserService');

var DB = require('../../data/db');
var DBEvents = require('react-native-db-models').DBEvents

var Main = require('../main/main');

var {
  AlertIOS,
	NavigatorIOS,
  TabBarIOS,
  StatusBarIOS,
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
    this.fetchData();

    this.setState({
      loggedIn: true,
    });
  }

  fetchData(){
    DB.users.get_all(function(result){
        console.log('User table count: '+ result.totalrows);
    })
  }

  navbarLogout(){
    console.log('user logged in on logout press');
    userService.deleteUserSessionRows();
  }

  render() {
    StatusBarIOS.setStyle("light-content")

    return (
      <TabBarIOS style={Theme.appContainer}>
        <TabBarIOS.Item
          title="Home"
          icon={require('../../components/icons/home.png')}
          selected={this.state.selectedTab == "home"}
          onPress={()=> this.setState({selectedTab: 'home'})} >

          <NavigatorIOS
            style={{flex: 1}}
            barTintColor='#498EE0'
            tintColor='#FFF'
            titleTextColor='#FFF'
            initialRoute={{
              title: 'Home',
              component: HomeFeed
            }} />
        </TabBarIOS.Item>


        <TabBarIOS.Item
          title="Diary"
          icon={require('../../components/icons/bookmark.png')}
          barTintColor='#498EE0'
          selected={this.state.selectedTab == "diary"}
          onPress={()=> this.setState({selectedTab: 'diary'})} >

          <NavigatorIOS
            style={{flex: 1}}
            barTintColor='#498EE0'
            tintColor='#FFF'
            titleTextColor='#FFF'
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
          ref="nav"
            style={{flex: 1}}
            barTintColor='#498EE0'
            tintColor='#FFF'
            titleTextColor='#FFF'
            initialRoute={{
              title: 'Profile',
              component: Profile,
              rightButtonIcon: require('../../components/icons/settings.png'),
              onRightButtonPress: () => {
                AlertIOS.alert(
                  'Logout',
                  'Click OK to Logout',
                  [
                    {
                      text: 'OK',
                      onPress: () => this.navbarLogout(),
                    },
                    {
                      text: 'Cancel',
                      onPress: () =>console.log('Logout cancelled'),
                    },
                  ]
                );
              },
            }} />
        </TabBarIOS.Item>

      </TabBarIOS>
    );
  }
};

module.exports = AppContainer;
