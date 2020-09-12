import React from 'react';
import { StyleSheet, Text, View,Dimensions,Image} from 'react-native';
import { Feather,FontAwesome} from '@expo/vector-icons';
import { Card } from 'react-native-elements'
const windowHeight = Dimensions.get('window').height
const width = Dimensions.get('window').width
// var dnacover = require('../public/dnacover1.jpg')
import { LinearGradient } from 'expo-linear-gradient';

export default function Header({image,title,subtitle}) {

    const styles = StyleSheet.create({
        sociallogo:{
            paddingTop:30,
            alignSelf:'center',
            flexDirection:'row',
          },
          instalogo:{
            paddingRight:40,
          },
          name:{
            fontSize:45,
            alignSelf:'flex-start',
            paddingLeft:30
          },
          post:{
            fontSize:20,
            alignSelf:'flex-start',
            paddingLeft:30,
            color:'#c9c3c3'
          },
          dp:{
            height:"90%",
          },
          sociallogocard:{
            paddingTop:0,
            alignSelf:'center',
            flexDirection:'row',
            // backgroundColor:'red',
            position:'absolute'
          },
          con:{
            height:windowHeight*0.6
          }
      });
      var images = {
        dnacover : require('../public/dnacover1.jpg')
      }
  return (
    <View style={{width:width*0.9,height:400,marginBottom:30,backgroundColor:'white',alignSelf:"center"}}>
      <View style={{height:"40%",width:'100%',backgroundColor:'#eb5252'}}>
          <Image source={require('../public/Vaibhav.jpg')} style={{resizeMode:'contain',width:null,height:'80%',top:'50%',borderRadius:150,marginLeft:5} } />
      </View>
      <View style={{height:"60%",width:'100%',alignItems:'center'}}>
        <Text style={{fontSize:30,marginTop:60}}>Vaibhav Chandra</Text>
        <Text style={{fontSize:20,color:'#abaeb3'}}>General Secretary</Text>
        <View style={{flexDirection:'row',marginTop:20}}>
          <Feather name="instagram" size={40}  style={styles.instalogo} color="rgba(245, 51, 193,1)" />
          <FontAwesome name="facebook" style={styles.instalogo} size={40}  color="rgba(43, 106, 207,1)" />
          <FontAwesome name="twitter" style={styles.instalogo} size={40} color="rgba(125, 216, 255,1)" />
          <Feather name="mail" size={40} color="rgba(125, 216, 255,1)" />
        </View>
      </View>
    </View>
  );
}

