/**
 * @author Nate Patanjo, Nick Donfris
 *
 * FIX STYLING
 *
 */

import React, { useContext, useState } from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import LoginInputBar from "components/LoginInputBar";
import colors from "colors";
import {UserContext} from "utilities/contexts/UserContext";

interface Props {
  navigation: any;
}

const LoginScreen = ({ navigation }: Props) => {

    const {state, dispatch} = useContext(UserContext);
    

  return (
    <View style={styles.container}>
      <View style={styles.loginContainer}>
        <Text style={styles.header}> Account Login </Text>
        <LoginInputBar placeholder={"Username"} value={state.username} setValue={(text)=>{dispatch({type: 'setUsername', payload: text})}} />
        <LoginInputBar placeholder={"Password"} value={state.password} setValue={(text)=>{dispatch({type: 'setPassword', payload: text})}} secureTextEntry={true} />
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate()}
          >
            <Text style={styles.buttonText}>login</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate('')}
          >
            <Text style={styles.buttonText}>create account</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
  },
  header: {
    fontSize: 20,
    fontWeight: "bold",
    color: colors.primary,
    marginBottom: 20,
  },
  loginContainer: {
    alignItems: "center",
    paddingVertical: "30%",
    height: "70%",
    justifyContent: "center",
    textAlign: "center",
    flexDirection: "column",
  },
  buttonContainer: {
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between",
    width: "50%",
  },
  button: {
    backgroundColor: colors.primary,
    padding: 10,
    width: 100,
    margin: 15,
    alignItems: "center",
    borderRadius: 10,
    textAlign: "center",
    justifyContent: "center",
  },
  buttonText: {
    color: "#fff",
    fontSize: 9,
  },
});

export default LoginScreen;
