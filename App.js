import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { MaterialCommunityIcons,AntDesign } from '@expo/vector-icons'

import Home from './screens/Home';
import Anime from './screens/Anime';

import Clubs from './screens/Clubs';
import Stack from './screens/Stack';
import Events from './screens/Events';
import Services from './screens/Services';
import Upcoming from './screens/Upcoming';
import { NavigationContainer } from '@react-navigation/native';


const Tab = createMaterialBottomTabNavigator();

export default  App = ()=> {
  return (
    <NavigationContainer>
      <Tab.Navigator
      initialRouteName="Home"
      activeColor="#fff"
      >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarLabel: 'Home',
          tabBarColor:'#610c68',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="home" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Events"
        component={Events}
        options={{
          tabBarLabel: 'Events',
          tabBarColor:'#e65f5c',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="bell" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Clubs"
        component={Stack}
        options={{
          tabBarLabel: 'Clubs',
          tabBarColor:'#f1dab0',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="account" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Upcoming"
        component={Upcoming}
        options={{
          tabBarLabel: 'Upcoming',
          tabBarColor:'#ff8c42',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="bell" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Services"
        component={Services}
        options={{
          tabBarLabel: 'Services',
          tabBarColor:'#378a99',
          tabBarIcon: ({ color }) => (
            <AntDesign name="form" size={24} color={color} />
          ),
        }}
      />


    </Tab.Navigator>
    </NavigationContainer>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
