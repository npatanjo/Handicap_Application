import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  TextInput,
  ScrollView,
  FlatList,
} from "react-native";

interface Props {
  data: any[];
  onPress: () => void;
}

export default function SearchBar({ data, onPress }: Props) {
  const [filteredData, setFilteredData] = useState();

  return <View></View>;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
