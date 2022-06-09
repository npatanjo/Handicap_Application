/**
 * @author Nick Donfris, Nate Patanjo
 */

import React from "react";
import { View, StyleSheet, TextInput } from "react-native";
import colors from "colors";

interface Props {
    value?: string;
    setValue?: (text: string) => void;
    placeholder?: string;
    secureTextEntry?: boolean;
}

export default function LoginInputBar({ value, setValue, placeholder, secureTextEntry }: Props) {

    return (
        <View style={styles.container}>
            <TextInput
                style={styles.input}
                placeholder={placeholder}
                placeholderTextColor={colors.primary}
                secureTextEntry={secureTextEntry || false}
                onChangeText={setValue}
                value={value}
            />
        </View>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  input: {
    color: colors.primary,
    elevation: 1,
    borderBottomColor: colors.primary,
    borderBottomWidth: 1,
    width: 250,
    height: 50,
    margin: 10,
    padding: 10,
  },
});
