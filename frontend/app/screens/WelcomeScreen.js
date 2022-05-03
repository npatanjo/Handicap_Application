import React from "react";
import { ImageBackground, Text, StyleSheet, View, Image } from "react-native";

function WelcomeScreen(props) {
  return (
    <ImageBackground
      style={styles.background}
      source={require("../assets/background.png")}
    >
      <View style={styles.logoContainer}>
        <Image
          style={styles.logo}
          source={require("../assets/Golf-Ball.png")}
        />
      </View>
      <View style={styles.logoContainer} />
      <View style={styles.buttonContainer}>
        <View style={styles.loginButton}>
          <Text style={{ fontSize: 15, opacity: 1 }}>LOGIN</Text>
        </View>
        <View style={styles.createAccountButton}>
          <Text style={{ fontSize: 15, opacity: 1 }}>Create Account</Text>
        </View>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    alignItems: "center",
    opacity: 0.8,
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
    borderBottomWidth: 1,
  },
  createAccountButton: {
    width: "100%",
    height: 50,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default WelcomeScreen;
