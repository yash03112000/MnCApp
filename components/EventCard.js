import React from 'react';
import { StyleSheet, Text, View,Dimensions} from 'react-native';
import { Feather,FontAwesome} from '@expo/vector-icons';
import { Card } from 'react-native-elements'
const windowHeight = Dimensions.get('window').height
// var dnacover = require('../public/dnacover1.jpg')

export default function Header({title,pressed}) {

    const styles = StyleSheet.create({
        box:{
            height:300,
            width:200,
            marginLeft:30,
            marginTop:30,
            borderWidth:4,
            // borderColor:'#7e8185',
            borderRadius:20
        },
        lowerbox:{
            height:'27%',
            backgroundColor:'#3d4b57',
            borderBottomEndRadius:15,
            borderBottomStartRadius:15,

        },
        upperbox:{
            height:'73%',
            backgroundColor:'#4e6373',
            borderTopEndRadius:15,
            borderTopStartRadius:15,

        },
        heading:{
            color:'white',
            fontSize:25,
            alignSelf:'center'
        }
      });
  return (
      <View style={[styles.box,pressed?{borderColor:'#7e8185'}:{}]}>
          <View style={styles.upperbox}></View>
          <View style={styles.lowerbox}>
              <Text style={styles.heading}>{title}</Text>
          </View>
      </View>
  );
}

