import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Header from '../components/Header';



export default  Upcoming = ()=> {
    return (
        <View>
            <Header title="Upcoming" color="#ff8c42"/>
            <Text>
                Home
            </Text>
        </View>

    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });