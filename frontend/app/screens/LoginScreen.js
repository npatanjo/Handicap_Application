import React from "react";
import {
  Text,
  StyleSheet,
  TextInput,
  View,
  Image,
  SafeAreaView,
  Button,
} from "react-native";

import colors from "../config/colors";

function LoginScreen(props) {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: colors.primary }}>
      <View style={styles.titleContainer}>
        <Text style={styles.loginText}>Login!</Text>
      </View>

      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Username"
          placeholderTextColor={colors.secondary}
        ></TextInput>
        <TextInput
          style={styles.input}
          placeholder="Password"
          placeholderTextColor={colors.secondary}
        ></TextInput>
      </View>

      <View style={styles.buttonContainer}>
        {/* add onlick below */}
        <Text style={{ fontFamily: "Helvetica" }}>Forgot password?</Text>
        {/* add onlick below */}
        <View style={styles.buttonInnerContainter}>
          <Text style={styles.buttonStyle}>Login</Text>
        </View>
      </View>

      <View style={styles.footerContainer}>
        {/* add onlick below */}
        <Text style={styles.footerText}>CREATE ACCOUNT</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flex: 2.5,
    alignItems: "center",
    justifyContent: "center",
  },
  loginText: {
    top: 30,
    fontSize: 35,
    fontFamily: "Helvetica",
    color: colors.secondary,
  },
  inputContainer: {
    flex: 2,
    alignItems: "center",
    justifyContent: "space-evenly",
  },
  input: {
    borderBottomWidth: 2,
    borderColor: colors.secondary,
    width: "70%",
    height: 40,
    color: colors.secondary,
  },
  buttonContainer: {
    flex: 1.7,
    alignItems: "center",
    justifyContent: "space-evenly",
  },
  buttonInnerContainter: {
    width: "70%",
    height: 55,
    borderColor: colors.secondary,
    borderWidth: 2,
    borderRadius: 25,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonStyle: {
    fontFamily: "Helvetica",
    fontWeight: "bold",
    fontSize: 20,
    color: colors.secondary,
  },
  footerContainer: {
    flex: 3,
    alignItems: "center",
    justifyContent: "flex-end",
  },
  footerText: {
    fontFamily: "Helvetica",
    fontSize: 15,
    fontWeight: "bold",
    color: colors.secondary,
  },
});

export default LoginScreen;
