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

export default function SearchBar(props) {
  const { source } = props;
  return (
    <TouchableOpacity onPress={props.onPress} style={styles.container}>
      <View>
        {source.length ? (
          source.map((item) => {
            return (
              <View>
                <Text>{item}</Text>
              </View>
            );
          })
        ) : (
          <View>
            <Text>Golf course not on record</Text>
          </View>
        )}
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
