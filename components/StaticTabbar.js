import React,{useContext,useEffect,useMemo,useState} from "react";
import {
  View, StyleSheet, TouchableWithoutFeedback, Animated, Dimensions,
} from "react-native";
import { Feather as Icon } from "@expo/vector-icons";
// import {BottomContext} from './Context'

const { width } = Dimensions.get("window");



const StaticTabbar = (props)=> {


    const { tabs ,value, state, descriptors, navigation  } = props;
    // const [bottom,setBottom] = useContext(BottomContext);

    useMemo(()=>{
      console.log('static')
    },[value])
    // console.log(value)
    const values = tabs.map((tab, index) => new Animated.Value(index === 0 ? 1 : 0));

  const onPress = (index) => {
    // setBottom(index);
    console.log('line22'+ index)
    const tabWidth = width / tabs.length;
    Animated.sequence([
      Animated.parallel(
        values.map(v => {Animated.timing(v, {
          toValue: 0,
          duration: 1,
          useNativeDriver: true,
        });})
      ),
      Animated.parallel([
        Animated.spring(value, {
          toValue: tabWidth * index,
          useNativeDriver: true,
        },),
        Animated.spring(values[index], {
          toValue: 1,
          useNativeDriver: true,
        }),
      ]),
      Animated.parallel(values.map(v=>{console.log(value);}))
    ]).start();


  }




  


    // const { onPress } = this;
    // const { tabs, value } = this.props;
    return (
      <View style={styles.container}>
        {
          state.routes.map((route, key) => {
            // console.log(tabs[key].name)
            const tabWidth = width / tabs.length;
            const cursor = tabWidth * key;
            const opacity = value.interpolate({
              inputRange: [cursor - tabWidth, cursor, cursor + tabWidth],
              outputRange: [1, 0, 1],
              extrapolate: "clamp",
            });
            const translateY = values[key].interpolate({
              inputRange: [0, 1],
              outputRange: [64, 0],
              extrapolate: "clamp",
            });
            const opacity1 = values[key].interpolate({
              inputRange: [0, 1],
              outputRange: [0, 1],
              extrapolate: "clamp",
            });
            const { options } = descriptors[route.key];
            const isFocused = state.key === key;
            const onPress2 = () => {
              const event = navigation.emit({
                type: 'tabPress',
                target: route.key,
                canPreventDefault: true,
              });
          
              if (!isFocused && !event.defaultPrevented) {
                navigation.navigate(route.name);
              }
            };
          
            const onLongPress = () => {
              navigation.emit({
                type: 'tabLongPress',
                target: route.key,
              });
            };
            return (
              <React.Fragment {...{ key }}>
                <TouchableWithoutFeedback onPress={() => {onPress(key); }}onLongPress={onLongPress} accessibilityRole="button"
            accessibilityStates={isFocused ? ['selected'] : []}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}>
                  <Animated.View style={[styles.tab, { opacity }]}>
                    <Icon name={tabs[key].name} color="black" size={25} />
                  </Animated.View>
                </TouchableWithoutFeedback>
                <Animated.View
                  style={{
                    position: "absolute",
                    top: -8,
                    left: tabWidth * key,
                    width: tabWidth,
                    height: 64,
                    justifyContent: "center",
                    alignItems: "center",
                    opacity: opacity1,
                    transform: [{ translateY }],
                  }}
                >
                  <View style={styles.activeIcon}>
                    <Icon name={tabs[key].name} color="black" size={25} />
                  </View>
                </Animated.View>
              </React.Fragment>
            );
          })
        }
      </View>
    );
  
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
  },
  tab: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    height: 64,
  },
  activeIcon: {
    backgroundColor: "#fcce4e",
    width: 40,
    height: 40,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
  },
});


export default StaticTabbar
