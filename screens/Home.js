import { StatusBar } from 'expo-status-bar';
import React,{useState} from 'react';
import { StyleSheet, Text, View,Dimensions,ScrollView,FlatList ,Animated as OldAnim,Image,ImageBackground } from 'react-native';
import { Feather,FontAwesome} from '@expo/vector-icons';
import Namecard from '../components/Namecard'
import Header from '../components/Header'
import Navbar from '../components/Navbar'
import {
  TouchableHighlight,
} from "react-native-gesture-handler";


const windowHeight = Dimensions.get('window').height
const width = Dimensions.get('window').width
const { event, ValueXY } = OldAnim
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
    fontWeight: 'bold',
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
    // height: windowHeight*2 ,
    padding: 10,
    backgroundColor:'black',
    // justifyContent:'center'
    // alignItems:'center'

  },
  contentContiner2: {
    // height: windowHeight*2,
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
  eventcontainer:{
    backgroundColor:'#d44c4c',
    borderRadius:20,
    marginTop:25
  },
  eventhead:{
    alignSelf:'center',
    color:'white',
    fontSize:25,
    paddingBottom:15
  },
  eventdetail:{
    fontSize:20
  },
  scrollview:{
    // backgroundColor:'red',
    marginTop:30,
    // height:30,
    // width:windowWidth,
    flexDirection:'row',
  }
})

const CutomHeaderScreen = () => {





  const [nav,setNav] = useState(0);
  const[firstcl,setFirstcl] = useState('black')
  const[firstbgcl,setFirstbgcl] = useState('#fcce4e')
  const[secondcl,setSecondcl] = useState('white')
  const[secondbgcl,setSecondbgcl] = useState('black')


  const opacity = scrollY.y.interpolate({
    inputRange: [0, 60, 90],
    outputRange: [0, 0, 1],
    extrapolate: 'clamp',
  })

  return (
    <View>
      <Header opacity={opacity} title="About Us" back={false} />
      <ScrollView onScroll={event(
        [{ nativeEvent: { contentOffset: { y: scrollY.y } } }],
        { useNativeDriver: false }
      )}>
        <View style={{width:width}}>
            <ImageBackground source={require('../public/dnacover1.jpg')} style={{width:width,height:250}}>
              <Image source={require('../public/MnC.png')} style={{resizeMode:'cover',width:70,height:70,top:20,left:20} } />
              <Text style={{fontSize:40,color:'white',top:10,backgroundColor:'rgba(0, 0, 0,0.6)',paddingLeft:20,width:150,marginTop:20,fontWeight: 'bold'}}>About</Text>
              <Text style={{fontSize:40,color:'white',top:10,backgroundColor:'rgba(0, 0, 0,0.6)',paddingLeft:40,marginTop:10,fontWeight: 'bold',width:190}}>Us</Text>
            </ImageBackground>
        </View>
        <View style={{flexDirection:'row',backgroundColor:'black',paddingVertical:10,justifyContent:'center'}}>
          <TouchableHighlight onPress={()=>{setNav(0);setFirstcl('black');setFirstbgcl('#fcce4e');setSecondcl('white');setSecondbgcl('black');}}>
            <Navbar color={firstcl} bgcolor={firstbgcl} text="Home" />
          </TouchableHighlight>
          <TouchableHighlight onPress={()=>{setNav(1);setFirstcl('white');setFirstbgcl('black');setSecondcl('black');setSecondbgcl('#fcce4e');}}>
            <Navbar color={secondcl} bgcolor={secondbgcl} text="Team"/>
          </TouchableHighlight>
        </View>
        <Condition nav={nav} />
      </ScrollView>
    </View>
  )
}
export default CutomHeaderScreen


const Home = () => (

  <View style={[styles.contentContinerbig,{paddingBottom:180,paddingTop:30}]}>
    <Text style={styles.contentText}>The Media and Cultural Council at IITK is a hub for all activities about media and culture. Sounds obvious, right? Obvious as it may be, the implications of that have enriched the campus experience for innumerable students. Led by a dedicated team along with the respective clubs, the council organises a plethora of events throughout each year. From full-fledged workshops to hour-long impromptu sessions, we do it all.`,
  powers: "Powers and Abilities"</Text>
    <View style={styles.sociallogo}>
      <Feather name="instagram" size={35}  style={styles.instalogo} color="rgba(245, 51, 193,0.5)" />
      <FontAwesome name="facebook" style={styles.instalogo} size={35}  color="rgba(43, 106, 207,0.8)" />
      <FontAwesome name="twitter" style={styles.instalogo} size={35} color="rgba(125, 216, 255,0.8)" />
      <FontAwesome name="youtube-play" size={35} color="rgba(217, 61, 61,0.7)" />
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


const Condition = ({nav})=>{
  if(nav===0){
    return <Home />
  }else if(nav === 1){
    return <Team />
  }
}


