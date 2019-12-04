import React, { useEffect } from "react";
import { createAppContainer, createSwitchNavigator } from "react-navigation";
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createStackNavigator } from 'react-navigation-stack'
import { Ionicons } from '@expo/vector-icons';
import { Text } from 'react-native';
import Login from './containers/login';
import Home from './containers/Home';
import Detail from './containers/Detail'
import Search from './containers/Search'
import SearchCard from './containers/SearchCard';
import DetailSearchCard from './containers/DetailSearchCard';

const Logout = ({navigation}) => {
  useEffect(() => {
    navigation.navigate('Login')
  })
  return <Text> Logout </Text>
}

const stackNavigator = createStackNavigator({
  Home: {
    screen: Home,
    navigationOptions:{
      header: null
    }
  },
  Detail: {
    screen: Detail,
    navigationOptions: {
      headerStyle: {
        backgroundColor: '#fbe3b9'
      }
    }
  }
  
})

const searchStackNavigator = createStackNavigator({
  Search: {
    screen: Search,
    navigationOptions:{
      header: null
    }
  },
  SearchCard: {
    screen: SearchCard,
    navigationOptions: {
      headerStyle: {
        backgroundColor: '#fbe3b9',
        
      }
    }
  },
  DetailSearchCard: {
    screen: DetailSearchCard,
    navigationOptions: {
      headerStyle: {
        backgroundColor: '#fbe3b9',
        
      }
    }
  }
})

const bottomNavigator = createBottomTabNavigator({
  Home: {
    screen: stackNavigator,
    navigationOptions: ({navigation}) => {
      return {
        tabBarIcon: 
        <Ionicons
          name = 'md-home'
          size = {
            30
          }
        />
      }
    }
  },
  Search:{
    screen: searchStackNavigator,
    navigationOptions:{
      tabBarIcon: 
        <Ionicons
          name = 'md-search'
          size = {
            30
          }
        />
    }
  },
  Logout: {
    screen: Logout,
    navigationOptions: {
      tabBarIcon: 
        <Ionicons
          name = 'md-log-out'
          size = {
            30
          }
        />
    }
  }
}, {
  tabBarOptions:{
    style: {
      backgroundColor: '#fbe3b9'
    }
  }
})


const rootNavigator = createSwitchNavigator({
  Login,
  bottomNavigator
})

export default createAppContainer(rootNavigator)