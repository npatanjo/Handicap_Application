import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  TextInput,
} from "react-native";
import SearchBar from "../components/SearchBar";

interface Props {}

const SearchCourseScreen = ({}: Props) => {
  const [source] = useState(["tilden", "pebble beach", "augusta"]); //later will become database
  const [filtered, setFiltered] = useState(source);
  const [searching, setSearching] = useState(false);
  const onSearch = (text) => {
    if (text) {
      setSearching(true);
      const temp = text.toLowerCase();

      const tempList = source.filter((item) => {
        if (item.match(temp)) return item;
      });
      setFiltered(tempList);
    } else {
      setSearching(false);
      setFiltered(source);
    }
  };
  return (
    <View style={styles.container}>
      <TextInput placeholder="Search Courses"></TextInput>
      {searching && (
        <SearchBar onPress={() => setSearching(false)} source={filtered} />
      )}
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
