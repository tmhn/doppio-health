// DoppioHealth - app-container.js
'use strict';

import React from 'react-native';
import Theme from '../../assets/theme/theme';

import Intro from '../intro/intro';
import HomeFeed from '../../feeds/home-feed';
import DiaryFeed from '../../feeds/diary-feed';
import Profile from '../profile/profile';
import authService from '../../helpers/AuthService';
import UserService from '../../helpers/UserService';

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

class AppContainer extends Component{
  constructor(props){
    super(props);

    this.state = {
      selectedTab: 'home',
    }
  }

  componentDidMount(){  

  }

  navbarLogout(){
    console.log('>> User Logout Clicked');
    UserService.deleteUserSession();
  }

  render() {
    StatusBarIOS.setStyle("light-content")

    return (
      <TabBarIOS style={Theme.appContainer}>
        <TabBarIOS.Item
          title="Home"
          icon={require('../../assets/icons/home.png')}
          selected={this.state.selectedTab == "home"}
          onPress={()=> this.setState({selectedTab: 'home'})} >

          <NavigatorIOS
            style={{flex: 1}}
            barTintColor='#498EE0'
            tintColor='#FFF'
            titleTextColor='#FFF'
            initialRoute={{
              title: 'Home',
              component: Intro
            }} />
        </TabBarIOS.Item>

        <TabBarIOS.Item
          title="Feed"
          icon={require('../../assets/icons/list.png')}
          selected={this.state.selectedTab == "feed"}
          onPress={()=> this.setState({selectedTab: 'feed'})} >

          <NavigatorIOS
            style={{flex: 1}}
            barTintColor='#498EE0'
            tintColor='#FFF'
            titleTextColor='#FFF'
            initialRoute={{
              title: 'Feed',
              component: HomeFeed
            }} />
        </TabBarIOS.Item>


        <TabBarIOS.Item
          title="Diary"
          icon={require('../../assets/icons/bookmark.png')}
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
          icon={require('../../assets/icons/person.png')}
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
              rightButtonIcon: require('../../assets/icons/settings.png'),
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
                      onPress: () => console.log('Logout cancelled.'),
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

