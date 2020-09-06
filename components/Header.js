import React from 'react';
import { StyleSheet, Text, View,Dimensions,Animated as OldAnim,Image,ImageBackground} from 'react-native';
import { MaterialIcons , Ionicons} from '@expo/vector-icons';
const windowHeight = Dimensions.get('window').height
const width = Dimensions.get('window').width
import { useNavigation } from '@react-navigation/native';
import {
  TouchableHighlight,
} from "react-native-gesture-handler";





export default function Header({opacity,title,back,navto}) {

    const styles = StyleSheet.create({
      headerCotainer: {
        width: width,
        paddingHorizontal: 24,
        paddingTop: 20,
        backgroundColor: 'black',
      },
      headerWrapper: {
        flexDirection: 'row', alignItems: 'center'
      },
      headerText: {
        color: 'white',
        fontSize: 20,
        fontWeight: 'bold',
        paddingLeft:20
      }
      });




  return (
      <View style={{width:width }}>
        <View style={styles.headerCotainer}>
          <View style={styles.headerWrapper}>
            <OldAnim.View style={{ paddingVertical:20, flexDirection:'row',opacity}}>
              <Condition back={back} navto={navto}  />
              <Text
                style={styles.headerText}>
                {title} 
              </Text>
            </OldAnim.View>
          </View>
        </View>  
      </View>
  );
}


const Condition = ({back,navto})=>{
  // const navigation = useNavigation()
  // console.log(navto)

  if(back){
    return(
      <TouchableHighlight onPress={()=>{ navigation.replace(navto)}}>
        <Ionicons name="md-arrow-back" size={24} color="white" />
      </TouchableHighlight>
    )
  }else {
    return null
  }
}
