import React, { useState } from "react";
import { Ionicons ,FontAwesome5} from '@expo/vector-icons';
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
  Button,
  TouchableOpacity,
} from "react-native";

const screencWidth = Dimensions.get("window").width;
const screeheight = Dimensions.get("window").height;
export default function Ex4() {
  function toggleButton() {}
  return (
    <SafeAreaView style={styles.container}>
      <Text style={[styles.headerLabel,{fontWeight : "bold"}]}> Xin chào ! </Text>
      <Text style={styles.nameLabel}> Nguyễn Xuân Toàn </Text>
      <Text style={styles.nameLabel}> 0379397538 </Text>
      <View>
      <TextInput style={styles.textFiled} secureTextEntry={true} placeholder = "nhap mat khau">
        
      </TextInput>
      </View>
      <TouchableOpacity onPress={toggleButton}>
        <View style={styles.buttonStyles}>
          <Text style={styles.TextStyle}>Đăng nhập</Text>
        </View>
      </TouchableOpacity>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-around",
          marginTop: 70,
        }}
      >
        <TouchableOpacity onPress={toggleButton}>
          <View>
            <Text style={styles.TextStyle}> Quên mật khẩu</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={toggleButton}>
          <View>
            <Text style={styles.TextStyle}> Thoát tài khoản </Text>
          </View>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "flex-start",
    backgroundColor: "#b0006d",
  },
  headerLabel: {
    textAlign: "center",
    fontSize: 30,
    marginTop: 50,
    color: "white",
  },
  nameLabel: {
    textAlign: "center",
    fontSize: 20,
    marginTop: 20,
    color: "white",
  },
  textFiled: {
    marginTop: 30,
    backgroundColor: "white",
    alignSelf: "center",
    width: "80%",
    textAlign: "center",
    height: 70,
    borderRadius: 30,
  },
  buttonStyles: {
    backgroundColor: "#8d015a",
    alignSelf: "center",
    marginTop: 90,
    width: "80%",
    height: 60,
    borderRadius: 40,
    justifyContent: "center",
    marginTop: 20,
  },
  TextStyle: {
    textAlign: "center",
    color: "white",
    fontSize: 20,
  },
});
