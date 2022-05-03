import React from "react";
import { ImageBackground, Text, StyleSheet, View, Image } from "react-native";

function WelcomeScreen(props) {
  return (
    <ImageBackground
      style={styles.background}
      source={require("../assets/background.png")}
    >
      <View style={styles.logoContainer}>
        <Image style={styles.logo} source={require("../assets/logo.png")} />
      </View>
      <View style={styles.logoContainer} />
      <View style={styles.buttonContainer}>
        <View style={styles.loginButton}>
          <Text style={{ fontSize: 15, opacity: 1 }}>LOGIN</Text>
        </View>
        <View style={styles.createAccountButton}>
          <Text style={{ fontSize: 15, opacity: 1 }}>CREATE ACCOUNT</Text>
        </View>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    alignItems: "center",
    opacity: 0.7,
  },
  logoContainer: {
    flex: 2,
    justifyContent: "center",
  },
  logo: {
    width: 100,
    height: 100,
    justifyContent: "center",
    alignItems: "center",
    top: +40,
    opacity: 1,
    backgroundColor: "#fff",
    borderColor: "black",
    borderWidth: 2,
    borderRadius: 10,
  },
  buttonContainer: {
    backgroundColor: "#fff",
    width: "100%",
    height: "100%",
    flex: 0.7,
    alignItems: "center",
  },
  loginButton: {
    width: "90%",
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    borderBottomColor: "black",
    borderBottomWidth: 2,
  },
  createAccountButton: {
    width: "100%",
    height: 50,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default WelcomeScreen;
