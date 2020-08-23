import React from 'react';
import { StyleSheet, Text, View,Dimensions} from 'react-native';
import { Feather,FontAwesome} from '@expo/vector-icons';
import { Card } from 'react-native-elements'
const windowHeight = Dimensions.get('window').height
const windowWidth = Dimensions.get('window').width

// var dnacover = require('../public/dnacover1.jpg')

export default function Header({title,content}) {

    const styles = StyleSheet.create({
        box:{
            // height:300,
            width:windowWidth*0.9,
            // borderWidth:4,
            alignSelf:'center',
            // borderColor:'brown',
            // borderRadius:20,
            marginTop:60,
            backgroundColor:'#1e2021',
            marginBottom:100
        },
        head:{
            color:'white',
            fontSize:35,
            marginLeft:20,
            marginTop:10
            // alignSelf:'center'
        },
        content:{
            color:'white',
            marginHorizontal:20,
            fontSize:20,
            marginTop:20,
            marginBottom:40
        }

      });
  return (
      <View style={styles.box}>
          <Text style={styles.head}>{title}</Text>
  <Text style={styles.content}>{content}</Text>
      </View>
  );
}

