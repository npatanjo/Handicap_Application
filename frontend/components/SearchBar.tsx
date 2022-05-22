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
  Button,
} from "react-native";

interface Props {
  placeholder: string;
  source: any[];
  onPress: () => void;
}

export default function SearchBar({ placeholder }: Props) {
  const [text, setText] = useState("");

  return (
    <View style={styles.container}>
      <View>
        <TextInput
          placeholder={placeholder}
          onChangeText={(text) => {
            setText(text);
          }}
        />
      </View>

      <View>
        <Button
          title="search"
          onPress={() => {
            console.log(text);
          }}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
