import { StatusBar } from 'expo-status-bar';
import React,{useState} from 'react';
import { StyleSheet, Text, View,Dimensions,ScrollView,FlatList ,Animated as OldAnim,Image,ImageBackground } from 'react-native';
// import Header from '../components/Header';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { Card } from 'react-native-elements'
var img = require('../public/dnacover1.jpg')
const Tab = createMaterialTopTabNavigator();
import { Feather,FontAwesome,Ionicons} from '@expo/vector-icons';
import {useNavigation} from '@react-navigation/native'
import Namecard from '../components/Namecard'
import EventCard from '../components/EventCard'
import EventDetail from '../components/EventDetails'
import Header from '../components/Header'
import Navbar from '../components/Navbar'


import Animated , {    abs,
  add,
  call,
  clockRunning,
  cond,
  eq,
  not,
  set,
  useCode,
  lessThan,
  greaterThan,
  and} from 'react-native-reanimated'

  import {
    snapPoint,
    timing,
    useClock,
    usePanGestureHandler,
    useValue,
    minus,
    clamp,
    translateZ,
    min,
  } from "react-native-redash";

  import {
    TouchableHighlight,
  } from "react-native-gesture-handler";


const windowHeight = Dimensions.get('window').height
const width = Dimensions.get('window').width

const { event, ValueXY } = OldAnim
const scrollY = new ValueXY()

const text = {
  biography:`The Anime Society provides an open and inviting environment for students interested in Anime, Manga/Comics including western animated content. Anime refers to the animation style originated in Japan. It is characterized by distinctive character features and background that visually and thematically set it apart from other forms of animation. Manga is Japanese for "comics". The Anime Society invites everyone to participate in all activities, so as to introduce anime to a brand new audience. This lets everyone find something special to them and re-discover themselves during the same.`
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

const CutomHeaderScreen = ({navigation}) => {

  const [nav,setNav] = useState(0);
  const[firstcl,setFirstcl] = useState('black')
  const[firstbgcl,setFirstbgcl] = useState('#fcce4e')
  const[secondcl,setSecondcl] = useState('white')
  const[secondbgcl,setSecondbgcl] = useState('black')
  const[thirdcl,setThirdcl] = useState('white')
  const[thirdbgcl,setThirdbgcl] = useState('black')





  return (

    <View>
      <Header opacity={opacity} title="Anime Society" back={true} navto='Clubs' />
      <ScrollView onScroll={event(
        [{ nativeEvent: { contentOffset: { y: scrollY.y } } }],
        { useNativeDriver: false }
      )}>
        <View style={{width:width}}>
            <ImageBackground source={require('../public/dnacover1.jpg')} style={{width:width,height:250}}>
              <Image source={require('../public/animenew.png')} style={{resizeMode:'cover',width:70,height:70,top:20,left:20} } />
              <Text style={{fontSize:40,color:'white',top:10,backgroundColor:'rgba(0, 0, 0,0.6)',paddingLeft:20,width:150,marginTop:20,fontWeight: 'bold'}}>Anime</Text>
              <Text style={{fontSize:40,color:'white',top:10,backgroundColor:'rgba(0, 0, 0,0.6)',paddingLeft:40,marginTop:10,fontWeight: 'bold',width:190}}>Society</Text>
            </ImageBackground>
        </View>
        <View style={{flexDirection:'row',backgroundColor:'black',paddingVertical:10,justifyContent:'center'}}>
          <TouchableHighlight onPress={()=>{setNav(0);setFirstcl('black');setFirstbgcl('#fcce4e');setSecondcl('white');setSecondbgcl('black');setThirdcl('white');setThirdbgcl('black')}}>
            <Navbar color={firstcl} bgcolor={firstbgcl} text="Home" />
          </TouchableHighlight>
          <TouchableHighlight onPress={()=>{setNav(1);setFirstcl('white');setFirstbgcl('black');setSecondcl('black');setSecondbgcl('#fcce4e');setThirdcl('white');setThirdbgcl('black')}}>
            <Navbar color={secondcl} bgcolor={secondbgcl} text="Events"/>
          </TouchableHighlight>
          <TouchableHighlight onPress={()=>{setNav(2);setFirstcl('white');setFirstbgcl('black');setSecondcl('white');setSecondbgcl('black');setThirdcl('black');setThirdbgcl('#fcce4e')}}>
            <Navbar color={thirdcl} bgcolor={thirdbgcl} text="Team"/>
          </TouchableHighlight>
        </View>
        <Condition nav={nav} />
      </ScrollView>
    </View>

  )
}
export default CutomHeaderScreen

const Condition = ({nav})=>{
  if(nav===0){
    return <Home />
  }else if(nav === 1){
    return <Events />
  }else if(nav === 2){
    return <Team />
  }
}
const Home = () => (

      <View style={[styles.contentContinerbig,{paddingBottom:180,paddingTop:30}]}>
        <Text style={styles.contentText}>“Making cartoons means very hard work at every step of the way, but creating a successful cartoon character is the hardest work of all.”
Loved watching cartoons as a kid? Want something similar, but with interesting and diverse stories, amazing music, and fluid animation? Look no further, anime is what you are looking for! Be it action, mystery, comedy, magic, science fiction, heart-wrenching emotional roller coasters that will make you weep, or just some simple story to pass the time with- we at the Anime Society have it all!
Metamorphosed from a hobby group to a fully-sanctioned club in 2019, the Anime Society at IIT Kanpur is a very recent addition to the Media and Cultural council. At the Anime Society of IIT Kanpur, we aim to introduce the campus community to anime and popularise this medium of storytelling.
The Anime Society conducts activities galore all around the year. We conduct special Anime Screenings, where one can experience the intense battles and stunning visuals on a big screen! We also conduct Anime quizzes (Beware! Our quizzes are not just anime trivia, but also touch upon mythology, history, philosophy, music and even science related to anime!) and discussions. We even organise Anime Cosplay events where the participants become anime characters themselves! The club also organises online events like the Pokémon Showdown Competitions (do you wanna be the very best?), Anime reviews(discussing anime, but slightly more formally), as well as podcasts (may your voice be heard by all). Already an anime fan? Then you are already a part of the family! Just drop by sometime and we would be happy to discuss your favourite shows, maybe exchange recommendations or listen to your rant about a show you did not like. New to anime? Contact us and we would love to get you started!</Text>
        <Text style={styles.contentText2}>Get In Touch</Text>
        <View style={styles.sociallogo}>
          <Feather name="instagram" size={35}  style={styles.instalogo} color="rgba(245, 51, 193,0.5)" />
          <FontAwesome name="facebook" style={styles.instalogo} size={35}  color="rgba(43, 106, 207,0.8)" />
          <FontAwesome name="twitter" style={styles.instalogo} size={35} color="rgba(125, 216, 255,0.8)" />
          <FontAwesome name="youtube-play" size={35} color="rgba(217, 61, 61,0.7)" />
        </View>

      </View>
)

const opacity = scrollY.y.interpolate({
  inputRange: [0, 60, 90],
  outputRange: [0, 0, 1],
  extrapolate: 'clamp',
})



const Team = () => (
  <View style={[styles.contentContiner2,{paddingBottom:150}]}>
    <Namecard image="dnacover" title="John Doe" subtitle="General Secratery"/>
    <Namecard image="dnacover" title="John Doe" subtitle="General Secratery"/>
    <Namecard image="dnacover" title="John Doe" subtitle="General Secratery"/>
  </View>
)

const Data = [
  {
    id: '0',
    title: 'Screenings',
    content:'Anime screenings are held regularly in the Open Air Theatre or Lecture Hall Complex. We generally show anime movies and ongoing anime series.'
  },
  {
    id: '1',
    title: 'Discussions',
    content:'Anime discussions are held occasionally, both formally and informally. Various aspects such as the cinematography, culture, music, art, philosophy and psychology related to specific or connected anime and mangas are discussed.'

  },
  {
    id: '2',
    title: 'VN Playthroughs',
    content:'Visual Novel is an interactive game genre, which originated in Japan, featuring text-based story with narrative style of literature and interactivity aided by static or sprite-based visuals, most often using anime-style art or occasionally live-action stills.'

  },
  {
    id: '3',
    title: 'Quizzes',
    content:'Quizzes testing anime and manga knowledge are held occasionally, especially as a competition between individuals or teams as a form of entertainment.'

  },
  {
    id: '4',
    title: 'Cosplay',
    content:'This event is for freshers’ only and is held along with ‘Fashion Show’ organised by the Films and Media Club. In this event, participants display their costumes onstage as a group.'

  },
  {
    id: '5',
    title: 'Pokemon Tournaments',
    content:'Pokémon is an anime we all grew up watching and loving but many people don’t know about it’s competitive side. We organize tournaments of various kinds on Pokémon Showdown, a free pokémon battle simulator, in which both experienced and new players can participate and enjoy the nostalgia.'

  }
];

const Events = () => {

  const [card,setCard] = useState(0);
  const [pressed,setPressed] = useState([true,false,false,false,false,false]);

return (
        <View style={styles.contentContiner2}>

        <FlatList horizontal data={Data} renderItem={({item})=>(<TouchableHighlight onPress={()=>{setCard(item.id);const a = [false,false,false,false,false,false];a[item.id]=true;setPressed(a)}}><EventCard title={item.title} pressed={pressed[item.id]} /></TouchableHighlight> )} keyExtractor={(item) => item.id} showsHorizontalScrollIndicator={false}/>


    <EventDetail title={Data[card].title} content={Data[card].content} />
    </View>
)

}





