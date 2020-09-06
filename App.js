import { StatusBar } from 'expo-status-bar';
import React, { useContext,useState,useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { MaterialCommunityIcons,AntDesign } from '@expo/vector-icons'

import Home from './screens/Home';
import Anime from './screens/Anime';

import Clubs from './screens/Clubs';
import Stack from './screens/Stack';
import Events from './screens/Events';
import Services from './screens/Services';
import Upcoming from './screens/Upcoming';
import Tabbar from './components/Tabbar';
import { NavigationContainer } from '@react-navigation/native';
// import {BottomProvider,BottomContext} from './components/Context'


const Tab = createBottomTabNavigator();

export default  App = ()=> {
  return (
    <NavigationContainer >
      <Tab.Navigator
      initialRouteName="Home"
      tabBar={(props)=><Tabbar {...props} />}
      // tabBarComponent={Tabbar}
      >
      <Tab.Screen
        name="Home"
        component={Home}
        // options={{
        //   tabBarLabel: 'Home',
        //   tabBarColor:'#610c68',
        //   tabBarIcon: ({ color }) => (
        //     <MaterialCommunityIcons name="home" color={color} size={26} />
        //   ),
        // }}
      />
      <Tab.Screen
        name="Events"
        component={Events}
        // options={{
        //   tabBarLabel: 'Events',
        //   tabBarColor:'#e65f5c',
        //   tabBarIcon: ({ color }) => (
        //     <MaterialCommunityIcons name="bell" color={color} size={26} />
        //   ),
        // }}
      />
      <Tab.Screen
        name="Clubs"
        component={Clubs}
        // options={{
        //   tabBarLabel: 'Clubs',
        //   tabBarColor:'#f1dab0',
        //   tabBarIcon: ({ color }) => (
        //     <MaterialCommunityIcons name="account" color={color} size={26} />
        //   ),
        // }}
      />
      <Tab.Screen
        name="Upcoming"
        component={Upcoming}
        // options={{
        //   tabBarLabel: 'Upcoming',
        //   tabBarColor:'#ff8c42',
        //   tabBarIcon: ({ color }) => (
        //     <MaterialCommunityIcons name="bell" color={color} size={26} />
        //   ),
        // }}
      />
      <Tab.Screen
        name="Services"
        component={Services}
        // options={{
        //   tabBarLabel: 'Services',
        //   tabBarColor:'#378a99',
        //   tabBarIcon: ({ color }) => (
        //     <AntDesign name="form" size={24} color={color} />
        //   ),
        // }}
      />


    </Tab.Navigator>
    </NavigationContainer>
    // <BottomProvider >
    //   <View style={styles.container}>
    //     <Condition />
    //     <Tabbar  />
    //   </View>
    // </BottomProvider>



  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    // alignItems: 'center',
    justifyContent: 'flex-end',
  },
});


const Condition = ()=>{
  useEffect(()=>{
    console.log('condition')
  },[])
  const [bottom,setBottom] = useContext(BottomContext);
  // console.log(bottom)
  if(bottom === 0){
    return <Home />
  }else if(bottom === 1){
    return <Events />
  }else if(bottom === 2){
    return <Stack />
  }else if(bottom === 3){
    return <Services />
  }else if(bottom === 4){
    return <Upcoming />
  }
}
