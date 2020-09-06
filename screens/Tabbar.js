import  React,{useState} from "react";
import {
  SafeAreaView, StyleSheet, Dimensions, View, Animated,
} from "react-native";
import * as shape from "d3-shape";
import  {Svg,Path} from 'react-native-svg';
// import Navbar from '../components/Navbar'
import StaticTabbar from "../components/StaticTabbar";

const AnimatedSvg = Animated.createAnimatedComponent(Svg);
const { width } = Dimensions.get("window");
const height = 64;
// const { Path } = Svg;
const tabs = [
  {
    name: "grid",
  },
  {
    name: "list",
  },
  {
    name: "repeat",
  },
  {
    name: "map",
  },
  {
    name: "user",
  },
];
const tabWidth = width / tabs.length;
const backgroundColor = "#fcce4e";

const getPath = () => {
  const left = shape.line().x(d => d.x).y(d => d.y)([
    { x: 0, y: 0 },
    { x: width, y: 0 },
  ]);
  const tab = shape.line().x(d => d.x).y(d => d.y).curve(shape.curveBasis)([
    { x: width, y: 0 },
    { x: width + 5, y: 0 },
    { x: width + 10, y: 10 },
    { x: width + 15, y: height },
    { x: width + tabWidth - 15, y: height },
    { x: width + tabWidth - 10, y: 10 },
    { x: width + tabWidth - 5, y: 0 },
    { x: width + tabWidth, y: 0 },
  ]);
  const right = shape.line().x(d => d.x).y(d => d.y)([
    { x: width + tabWidth, y: 0 },
    { x: width * 2, y: 0 },
    { x: width * 2, y: height },
    { x: 0, y: height },
    { x: 0, y: 0 },
  ]);
  return `${left} ${tab} ${right}`;
};
const d = getPath();

// eslint-disable-next-line react/prefer-stateless-function
const Tabbar = ({ state, descriptors, navigation })=> {
  // const [value] = useState(new Animated.Value(0)); 
  const value = new Animated.Value(0); 

  // value.addListener(({value}) => console.log('line63 '+value))
    // const { value } = this;

    // console.log(value)
    const translateX = value.interpolate({
      inputRange: [0, width],
      outputRange: [-width, 0],
    });
  // translateX.addListener(({value}) => console.log('line63 '+value))


    return (
      <>
        <View {...{ height, width }}>
          <AnimatedSvg width={width * 2} {...{ height }} style={{ transform: [{ translateX }] }}>
            <Path fill={backgroundColor} {...{ d }} />
          </AnimatedSvg>
          <View style={StyleSheet.absoluteFill}>
            <StaticTabbar {...{ tabs, value, state, descriptors, navigation  }} />
          </View>
        </View>
        <SafeAreaView style={styles.container} />
      </>
    );
  
}

const styles = StyleSheet.create({
  container: {
    backgroundColor,
  },
});


export default Tabbar
