import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  TextInput,
} from "react-native";
import SearchBar from "components/SearchBar";
/*
temp using the json backing file. For testing pre database integration
*/
const data = require("../BACKING_FILE.json");

interface Props {}

const SearchCourseScreen = ({}: Props) => {
  return (
    <View style={styles.container}>
      <SearchBar placeholder={"search"}></SearchBar>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default SearchCourseScreen;
