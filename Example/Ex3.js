import React, { useState } from "react";

import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  SafeAreaViewBase,
  Image,
  Switch,
  Dimensions,
  Platform
} from "react-native";
import bulbOff from "../assets/bulb-off.jpg";
import bulbOn from "../assets/bulb-on.jpg";
const screencWidth = Dimensions.get("window").width;
const screeheight = Dimensions.get("window").height;
export default function Ex3() {
  const [isEnable,setEnable] = useState(false) ;
  function toggleSwitch(){
     setEnable(previousState => !previousState) ;
  }
  return (
    <SafeAreaView style={styles.container}>
      <Image style={styles.img} source={isEnable?bulbOn:bulbOff} />
      <View style={styles.containView}>
        <Switch style = {{transform : [{scale : 1 }]}}
            value = {isEnable}
          thumbColor =  "white"
          ios_backgroundColor = '#52d964'
          onValueChange ={toggleSwitch}

        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "space-between",
    backgroundColor: "#000",
  },
  img: {
    resizeMode: "contain",
    width: screencWidth,
    height: (screencWidth * 925) / 631 - 100,
  },
  header: {
    textAlign: "center",
    fontSize: 30,
  },
  containView: {
    flex : 1 ,
    justifyContent: "center",
    alignItems: "center",
  },
});
