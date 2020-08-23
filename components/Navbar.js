import React from 'react';
import { StyleSheet, Text, View,Dimensions,Animated as OldAnim,Image,ImageBackground} from 'react-native';
import { MaterialIcons , Ionicons} from '@expo/vector-icons';
const windowHeight = Dimensions.get('window').height
const width = Dimensions.get('window').width






export default function Header({color,bgcolor,text}) {




  return (
    <View style={{paddingHorizontal:30,backgroundColor:bgcolor,borderRadius:20}}>
        <Text style={{color:color,fontSize:20,fontWeight:'bold',padding:5}}>{text}</Text>
    </View>
  );
}

