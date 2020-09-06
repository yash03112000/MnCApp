import * as React from 'react';
import { View, Text,StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Clubs from '../screens/Clubs';
import Anime from '../screens/Anime';
import Header from '../components/Header';




const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Clubs" screenOptions={{headerShown:false , headerStyle:{backgroundColor:'black'}}} >
        <Stack.Screen name="Clubs" component={Clubs} />
        <Stack.Screen name="Anime" component={Anime}  />
      </Stack.Navigator>
    </NavigationContainer>  
  );
}

export default App;








