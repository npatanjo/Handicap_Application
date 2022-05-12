/**
 * @author Nick Donfris
 *
 */

import React, {useState} from "react";
import  { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import InputBar from '@components/loginItems/InputBar';
import colors from "@utilities/Colors";

interface Props {
    navigation: any;
}


const LoginScreen = ({navigation}: Props) => {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    return (
        <View style={styles.container}>
            <View style={styles.loginContainer}>
                <Text style={styles.header}> Account Login </Text>
                <InputBar placeholder={'username'}/>
                <InputBar placeholder={'password'} secureTextEntry={true}/>
                <View style={styles.buttonContainer}>
                    <TouchableOpacity
                        style={styles.button} 
                        onPress={
                            () => navigation.navigate('Login Screen')
                        }
                    >
                        <Text style={styles.buttonText}>login</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.button} 
                        onPress={
                            () => navigation.navigate('Create Account')
                        }
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
        flexDirection: 'column',
    },
    header: {
        fontSize: 20,
        fontWeight: 'bold',
        color: colors.darkGreen,
        marginBottom: 20,
    },
    loginContainer: {
        alignItems: "center",
        paddingVertical: "30%",
        height: "70%",
        justifyContent: "center",
        textAlign: "center",
        flexDirection: 'column',
    },
    buttonContainer: {
        alignItems: "center",
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '50%',
    },
    button: {
        backgroundColor: colors.darkGreen,
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
    }
});


export default LoginScreen;
