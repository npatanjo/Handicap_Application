import React from "react";
import { ImageBackground, Text, StyleSheet, View, Image } from "react-native";

import { NavigationContainer } from "@react-navigation/native";

import colors from "../config/colors";

function WelcomeScreen(props) {
  return (
    <ImageBackground
      style={styles.background}
      source={require("../assets/background.png")}
    >
      <View
        style={styles.loginButton}
        onPress={() => NavigationContainer.navigate("Login")}
      >
        <Text style={styles.textLog}>LOGIN</Text>
      </View>
      <View style={styles.createAccountButton}>
        <Text style={styles.textCreate}>CREATE AN ACCOUNT</Text>
      </View>
      <View style={styles.logoContainer}>
        <Image style={styles.logo} source={require("../assets/logo.png")} />
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-end",
  },
  logoContainer: {
    position: "absolute",
    top: 70,
    borderRadius: 10,
    width: 110,
    height: 110,
    justifyContent: "flex-end",
    alignItems: "center",
    /*
    for 3D effect. Logo is WIP obviously

    borderBottomColor: "#fff",
    borderBottomWidth: 2,
    borderLeftColor: "#fff",
    borderLeftWidth: 2,
    backgroundColor: "#3093CB",
    borderColor: "#fff",
    borderWidth: 1,
    */
  },
  logo: {
    width: 60,
    height: 85,
    bottom: 5,
  },
  createAccountButton: {
    width: "100%",
    height: 70,
    backgroundColor: colors.primary,
    alignItems: "center",
    justifyContent: "center",
  },
  loginButton: {
    width: "100%",
    height: 70,
    backgroundColor: colors.secondary,
    alignItems: "center",
    justifyContent: "center",
  },
  textLog: {
    fontFamily: "Helvetica",
    fontWeight: "bold",
    color: colors.primary,
  },
  textCreate: {
    fontFamily: "Helvetica",
    fontWeight: "bold",
    color: colors.secondary,
  },
});

export default WelcomeScreen;
