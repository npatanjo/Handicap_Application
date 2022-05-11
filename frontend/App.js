import { StatusBar } from "expo-status-bar";
import React from "react";

import { StyleSheet } from "react-native";

import LoginScreen from "./app/screens/LoginScreen";

import CreateAccountScreen from "./app/screens/CreateAccountScreen";

import WelcomeScreen from "./app/screens/WelcomeScreen";

export default function App() {
  return <CreateAccountScreen />;
}
