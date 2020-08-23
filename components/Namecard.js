import React from 'react';
import { StyleSheet, Text, View,Dimensions} from 'react-native';
import { Feather,FontAwesome} from '@expo/vector-icons';
import { Card } from 'react-native-elements'
const windowHeight = Dimensions.get('window').height
// var dnacover = require('../public/dnacover1.jpg')

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
    <Card  image={images[image]} featuredTitle={title} featuredTitleStyle={styles.name} featuredSubtitle={subtitle} featuredSubtitleStyle={styles.post} imageStyle={styles.dp} containerStyle={styles.con}>
              <View style={styles.sociallogocard}>
                <Feather name="instagram" size={40}  style={styles.instalogo} color="rgba(245, 51, 193,1)" />
                <FontAwesome name="facebook" style={styles.instalogo} size={40}  color="rgba(43, 106, 207,1)" />
                <FontAwesome name="twitter" style={styles.instalogo} size={40} color="rgba(125, 216, 255,1)" />
                <Feather name="mail" size={40} color="rgba(125, 216, 255,1)" />
              </View>
    </Card>
  );
}

