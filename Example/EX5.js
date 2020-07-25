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
  Platform,
  TextInput,
  TouchableOpacity,
} from "react-native";

import facebook from "../assets/facebook.jpg";
const screencWidth = Dimensions.get("window").width;
const screeheight = Dimensions.get("window").height;
export default function EX5() {
  function touch() {}
  return (
    <SafeAreaView style={styles.container}>
      <Image style={styles.img} source={facebook} />

      <View style={{ justifyContent: "center" }}>
        <TextInput
          style={styles.topTextFiled}
          placeholder="nhập số điện thoại hoặc email"
        ></TextInput>
        <TextInput
          style={styles.bottomTextFiled}
          placeholder="Mật khẩu"
        ></TextInput>

        <TouchableOpacity style={styles.buttonStyle} onPress={touch}>
          <Text style={{ textAlign: "center", color: "lightgray" }}>
            Đăng nhập
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.bottomStyle}>
          <Text style={styles.textStyle}>Quên mật khẩu</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.bottomStyle}>
          <Text style={styles.textStyle}>Quay lại</Text>
        </TouchableOpacity>
        <View style={styles.styleView}>
          <View style={styles.lindeView}></View>
          <Text>Hoặc</Text>
          <View style={styles.lindeView}></View>
        </View>
        <TouchableOpacity style={styles.newAcountbutton} onPress={touch}>
          <Text style={styles.textStyle}>
            Tạo tài khoản mới
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,

    backgroundColor: "#ffff",
  },
  img: {
    resizeMode: "contain",
    width: screencWidth,
    height: 250,
  },
  topTextFiled: {
    marginTop: 20,
    alignSelf: "center",
    width: "80%",
    textAlign: "left",
    height: 40,
    borderTopStartRadius: 5,
    borderWidth: 2,
    borderColor: "lightgray",
    padding: 10,
    borderTopEndRadius: 5,
  },
  bottomTextFiled: {
    alignSelf: "center",
    width: "80%",
    textAlign: "left",
    height: 40,
    borderWidth: 2,
    borderColor: "lightgray",
    padding: 10,
    borderBottomEndRadius: 5,
    borderBottomStartRadius: 5,
  },
  buttonStyle: {
    //alignItems: "center",

    padding: 10,
    marginTop: 30,
    width: "80%",
    alignSelf: "center",
    borderRadius: 10,
    backgroundColor: "#1977f3",
    color: "lightgray",
  },
  bottomStyle: {
    marginTop: 10,
    backgroundColor: "white",
    alignSelf: "center",
  },
  textStyle: {
    color: "#1977f3",
    textAlign: "center",
  },
  styleView: {
    flexDirection: "row",
    marginTop: 80,
    marginLeft: 90,
  },
  lindeView: {
    width: 80,
    height: 2,
    backgroundColor: "lightgray",
    alignSelf: "center",
  },
  newAcountbutton : {
    backgroundColor : "#e7f3ff",
    alignSelf : "center",
    width : "80%",
    marginTop : 10 ,
    height : 30,
    justifyContent : "center",
    borderRadius : 10
  }
});
