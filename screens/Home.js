import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View,Dimensions,Image,Animated} from 'react-native';
import Header from '../components/Header';
import StickyParallaxHeader from 'react-native-sticky-parallax-header'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { Card } from 'react-native-elements'
var img = require('../public/dnacover1.jpg')
const Tab = createMaterialTopTabNavigator();
import { Feather,FontAwesome} from '@expo/vector-icons';
import Namecard from '../components/Namecard'



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
    backgroundColor: '#FFC106'
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
  }
})

const CutomHeaderScreen = () => {

  const Home = x => (
    <View
      style={styles.contentContinerbig}>
        <View style={styles.contentContinerbig}>
          <Text style={styles.contentText}>{x}</Text>
          <Text style={styles.contentText2}>Get In Touch</Text>
          <View style={styles.sociallogo}>
            <Feather name="instagram" size={35}  style={styles.instalogo} color="rgba(245, 51, 193,0.5)" />
            <FontAwesome name="facebook" style={styles.instalogo} size={35}  color="rgba(43, 106, 207,0.8)" />
            <FontAwesome name="twitter" style={styles.instalogo} size={35} color="rgba(125, 216, 255,0.8)" />
            <FontAwesome name="youtube-play" size={35} color="rgba(217, 61, 61,0.7)" />
          </View>

        </View>
    </View>
  )
  const Team = () => (
    <View style={styles.contentContiner2}>
      <Namecard image="dnacover" title="John Doe" subtitle="General Secratery"/>
      <Namecard image="dnacover" title="John Doe" subtitle="General Secratery"/>
      <Namecard image="dnacover" title="John Doe" subtitle="General Secratery"/>
    </View>
  )

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
              About Us 
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
      title={'About US'}
      titleStyle={styles.titleStyle}
      foregroundImage={require('../public/MnC.png')}
      tabs={[
        {
          title: 'About Us',
          content: Home(text.biography)
        },
        {
          title: 'Team',
          content: Team()
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



