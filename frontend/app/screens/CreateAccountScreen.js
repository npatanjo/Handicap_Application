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

import { Picker } from "@react-native-community/picker";
import colors from "../config/colors";

function CreateAccountScreen(props) {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: colors.secondary }}>
      <View style={styles.titleContainer}>
        <Text style={styles.loginText}>Create Account</Text>
      </View>

      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Email"
          placeholderTextColor={colors.primary}
        ></TextInput>
        <TextInput
          style={styles.input}
          placeholder="Username"
          placeholderTextColor={colors.primary}
        ></TextInput>
        <TextInput
          style={styles.input}
          placeholder="Password"
          placeholderTextColor={colors.primary}
        ></TextInput>
      </View>

      <View style={styles.buttonContainer}>
        {/* add onlick below */}
        <View style={styles.buttonInnerContainter}>
          <Text style={styles.buttonStyle}>Create</Text>
        </View>
      </View>

      <View style={styles.footerContainer}>
        {/* add onlick below */}
        <Text style={styles.footerText}>Login</Text>
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
    color: colors.primary,
  },
  inputContainer: {
    flex: 2,
    alignItems: "center",
    justifyContent: "space-evenly",
  },
  input: {
    borderBottomWidth: 2,
    borderColor: colors.primary,
    width: "70%",
    height: 40,
    color: colors.primary,
  },
  buttonContainer: {
    flex: 1.7,
    alignItems: "center",
    justifyContent: "space-evenly",
  },
  buttonInnerContainter: {
    width: "70%",
    height: 55,
    borderColor: colors.primary,
    borderWidth: 2,
    borderRadius: 25,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonStyle: {
    fontFamily: "Helvetica",
    fontWeight: "bold",
    fontSize: 20,
    color: colors.primary,
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
    color: colors.primary,
  },
});

export default CreateAccountScreen;
