/**
 * @author Nick Donfris
 */

import React, {useState} from 'react';
import { View, StyleSheet, TextInput } from 'react-native';
import colors from '@colors';

interface Props {
    placeholder?: string;
    secureTextEntry?: boolean;
};


export default function InputBar({placeholder, secureTextEntry} : Props) {

    const [value, setValue] = useState("");

    return (
        <View style={styles.container}>
            <TextInput
                style={styles.input}
                placeholder={placeholder}
                placeholderTextColor={colors.white}
                secureTextEntry={secureTextEntry || false}
                onChangeText={(text) => setValue(text)}
                value={value}
            />
        </View>
    );
};


const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    input: {
        color: colors.white,
        borderStyle: 'solid',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.8,
        shadowRadius: 2,
        elevation: 1,
        backgroundColor: colors.darkGreen,
        width: 250,
        height: 50,
        borderRadius: 10,
        margin: 10,
        padding: 10
    }
});




