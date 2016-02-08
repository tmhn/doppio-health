// DoppioHealth - app-container.js
'use strict';

import React from 'react-native';
import Theme from '../../components/theme/theme';

import HomeFeed from '../../feeds/home-feed';
import DiaryFeed from '../../feeds/diary-feed';
import Profile from '../profile/profile';
import authService from '../../helpers/AuthService';
import userService from '../../helpers/UserService';

import DB from '../../data/db';
import UserData from '../../data/data';
import DBEvents from 'react-native-db-models';

import Main from '../main/main';

let {
  AlertIOS,
  Component,
	NavigatorIOS,
  TabBarIOS,
  StatusBarIOS,
  View,
} = React;

module.exports = class AppContainer extends Component{
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
              component: HomeFeed,
              passProps: {data: UserData}
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
              passProps: {data: UserData},
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
                      onPress: () =>console.log('Logout cancelled.'),
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

