import  React, { useState, useMemo, useEffect } from "react";
import {
    SafeAreaView, StyleSheet, Dimensions, View, Animated,
  } from "react-native";

import { Feather as Icon } from "@expo/vector-icons";
import posed from "react-native-pose";
import { TouchableHighlight } from "react-native-gesture-handler";
// import { useValue } from "react-native-reanimated";


const { width } = Dimensions.get("window");

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


const Tabbar = ({state, descriptors, navigation})=>{

    // console.log(props.state)
    const { index } = state;
    // console.log(activeRouteIndex)
    const tabWidth = width / state.routes.length;
    const [translateX] = useState(new Animated.Value(tabWidth/8));




    return(
        <View style={{flexDirection:'row',width:width,height:64,alignItems:'center',justifyContent:'center',backgroundColor:'#fcce4e' }}>
          <Animated.View style={[{...StyleSheet.absoluteFillObject,transform:[{translateX: translateX}]}]}>
            <View style={{width: 3*tabWidth/4,height: "100%",backgroundColor: "black",borderBottomEndRadius:35,borderBottomStartRadius:35}}  ></View>
          </Animated.View>
            {state.routes.map((route, key) =>{
                          const { options } = descriptors[route.key];
                          const isFocused = state.key === key;
                          const onPress = () => {
                            const event = navigation.emit({
                              type: 'tabPress',
                              target: route.key,
                              canPreventDefault: true,
                            });
                        
                            if (!isFocused && !event.defaultPrevented) {
                              navigation.navigate(route.name);
                            }
                            Animated.spring(translateX,{
                              toValue:(key*tabWidth+tabWidth/8),
                              velocity:10,
                              useNativeDriver:true
                            }).start();
                          };
                        
                          const onLongPress = () => {
                            navigation.emit({
                              type: 'tabLongPress',
                              target: route.key,
                            });
                          };
                        return (
                <TouchableHighlight accessibilityRole="button"
                  accessibilityStates={isFocused ? ['selected'] : []}
                  accessibilityLabel={options.tabBarAccessibilityLabel}
                  testID={options.tabBarTestID}
                  onPress={onPress}
                  onLongPress={onLongPress}
                  key={key}
                  underlayColor='#fcce4e'
                  style={{width:tabWidth}}
                >
                    <View style={{height:'100%',justifyContent:'center',alignItems:'center'}}> 
                        <Icon name={tabs[key].name} color="black" size={key===index?30:25} style={[{borderRadius:25,backgroundColor:'#fcce4e',padding:9},key===index?{transform:[{translateY:-5}]}:{}]} />
                    </View>
                </TouchableHighlight>
                        )
            })
            }

        </View>
    )
}

export default Tabbar