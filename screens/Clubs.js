import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View,Dimensions,Image,Animated} from 'react-native';
import StickyParallaxHeader from 'react-native-sticky-parallax-header'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
var img = require('../public/dnacover1.jpg')
const Tab = createMaterialTopTabNavigator();
import { Feather,FontAwesome} from '@expo/vector-icons';
import {useNavigation} from '@react-navigation/native'
import { TouchableHighlight } from 'react-native-gesture-handler';
import { LinearGradient } from 'expo-linear-gradient';

const windowHeight = Dimensions.get('window').height
const { event, ValueXY } = Animated
const scrollY = new ValueXY()
const text = {
  biography:`The Media and Cultural Council at IITK is a hub for all activities about media and culture. Sounds obvious, right? Obvious as it may be, the implications of that have enriched the campus experience for innumerable students. Led by a dedicated team along with the respective clubs, the council organises a plethora of events throughout each year. From full-fledged workshops to hour-long impromptu sessions, we do it all.`,
  powers: "Powers and Abilities",
  appearances: "Appearances"
}

const styles = StyleSheet.create({
  headerCotainer: {
    width: '100%',
    paddingHorizontal: 24,
    paddingTop: 55,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: 'black'
  },
  headerWrapper: {
    flexDirection: 'row', alignItems: 'center'
  },
  headerImage: {
    width: 20,
    height: 20
  },
  headerText: {
    color: 'white',
    paddingLeft: 20,
    fontSize: 20,
    fontWeight: 'bold'
  },
  titleStyle: {
    color: 'white',
    fontWeight: 'bold',
    padding: 10,
    fontSize: 40,
    backgroundColor: 'rgba(0,0,0,0.6)'
  },
  tabTextContainerStyle: {
    backgroundColor: 'transparent',
    borderRadius: 18
  },
  tabTextContainerActiveStyle: {
    backgroundColor: '#FFC106',
    display:'none'
  },
  tabTextStyle: {
    fontSize: 16,
    fontWeight: 'bold',
    lineHeight: 20,
    paddingHorizontal: 12,
    paddingVertical: 8,
    color: 'white',
  },
  tabTextActiveStyle: {
    fontSize: 16,
    fontWeight: 'bold',
    lineHeight: 20,
    paddingHorizontal: 12,
    paddingVertical: 8,
    color: 'black',
  },
  tabWrapperStyle: {
    paddingVertical: 10
  },
  tabsContainerStyle: {
    paddingHorizontal: 10
  },
  contentContinerbig: {
    height: windowHeight,
    padding: 10,
    backgroundColor:'black',
    // justifyContent:'center'
    // alignItems:'center'

  },
  contentContiner2: {
    height: windowHeight*2,
    // width:'80%',
    padding: 10,
    backgroundColor:'black',
    // alignContent:'center'
  },
  contentText: {
    fontSize: 20,
    color:'white'
  },
  contentText2: {
    paddingTop:30,
    fontSize: 30,
    color:'white',
    alignSelf:'center'
  },
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
    height:"97.2%",
  },
  sociallogocard:{
    paddingTop:0,
    alignSelf:'center',
    flexDirection:'row',
    // backgroundColor:'red',
    position:'absolute'
  },
  con:{
    height:windowHeight*0.5
  },
  widget:{
    height:windowHeight*0.3,
    flexDirection:'row',
    backgroundColor:'white',
    marginBottom:50,
    borderRadius:15
  },
  widgetdp:{
    height:'100%',
    width:'100%',
    resizeMode: 'center',
    // justifyContent:'flex-end',
    // alignSelf:'flex-end',
    // backgroundColor:'green'
  },
  halfone:{
    width:'53%',
    // backgroundColor:'red'
  },
  halftwo:{
    width:'47%',
    // backgroundColor:'blue'
  },
  headingone:{
    fontSize:40,
    paddingTop:40,
    paddingLeft:20
  },
  headingtwo:{
    fontSize:30,
    paddingLeft:30

  }
})

const CutomHeaderScreen = () => {

  const Club = () => {
    
const navigation = useNavigation();
    
    return(
    <View style={styles.contentContiner2}>


      <TouchableHighlight onPress={()=>{navigation.replace('Anime')}}>

        <LinearGradient style={styles.widget} colors={['rgba(222,62,62,1)','rgba(222,62,62,0.8)','rgba(222,62,62,0.5)','rgba(222,62,62,0.1)']} start={[0,0]} end={[1,0]}> 
            <View style={styles.halfone}>
              <Text style={styles.headingone}>
                Anime
              </Text>
              <Text style={styles.headingtwo}>
                Society
              </Text>
            </View>
            <View style={styles.halftwo}>
              <Image source={require('../public/animenew.png')} style={styles.widgetdp}></Image>
            </View>
          </LinearGradient>
      </TouchableHighlight>
      <TouchableHighlight onPress={()=>{navigation.replace('Anime')}}>

      <LinearGradient style={styles.widget} colors={['rgba(112,72,72,1)','rgba(112,72,72,0.8)','rgba(112,72,72,0.5)','rgba(112,72,72,0.1)']} start={[0,0]} end={[1,0]}> 
          <View style={styles.halfone}>
            <Text style={styles.headingone}>
              Book
            </Text>
            <Text style={styles.headingtwo}>
              Club
            </Text>
          </View>
          <View style={styles.halftwo}>
            <Image source={require('../public/book.jpg')} style={styles.widgetdp}></Image>
          </View>
        </LinearGradient>
      </TouchableHighlight>


    </View>
  )}

  const renderHeader = () => {
    const opacity = scrollY.y.interpolate({
      inputRange: [0, 60, 90],
      outputRange: [0, 0, 1],
      extrapolate: 'clamp',
    })

    return (
      <View
        style={styles.headerCotainer}>
        <View style={styles.headerWrapper}>
          <Animated.View style={{ opacity }}>
            <Text
              style={styles.headerText}>
              Clubs And Societies 
            </Text>
          </Animated.View>
        </View>
      </View>
    )
  }

  return (
    <StickyParallaxHeader
      headerType="TabbedHeader"
      backgroundImage={
         img
      }
      backgroundColor={'black'}
      header={renderHeader}
      title={'Clubs'}
      titleStyle={styles.titleStyle}
      foregroundImage={require('../public/MnC.png')}
      tabs={[
        {
          title: '',
          content: Club()
        }
      ]}
      tabTextContainerStyle={styles.tabTextContainerStyle}
      tabTextContainerActiveStyle={styles.tabTextContainerActiveStyle}
      tabTextStyle={styles.tabTextStyle}
      tabTextActiveStyle={styles.tabTextActiveStyle}
      tabWrapperStyle={styles.tabWrapperStyle}
      tabsContainerStyle={styles.tabsContainerStyle}
      scrollEvent={event(
        [{ nativeEvent: { contentOffset: { y: scrollY.y } } }],
        { useNativeDriver: false }
      )}
      snapToEdge={false}

    />
  )
}
export default CutomHeaderScreen

