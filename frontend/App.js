import { StatusBar } from "expo-status-bar";
import React from "react";

import { StyleSheet } from "react-native";

import WelcomeScreen from "./app/screens/WelcomeScreen";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

export default function App() {
  return (
    <NavigationContainer>
      <WelcomeScreen />
    </NavigationContainer>
  );
}
