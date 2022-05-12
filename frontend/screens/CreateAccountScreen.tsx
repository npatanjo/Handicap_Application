/**
 * @author Nick Donfris
 *
 */
import React, {useState} from "react";
import  { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import InputBar from '@components/loginItems/InputBar';
import colors from "@utilities/Colors";
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useNavigation,CommonActions, useNavigationContainerRef } from '@react-navigation/native';
import LoginScreen from "@screens/LoginScreen";

interface Props {
    navigation: any;
}



const CreateAccountScreen = ({navigation}: Props) => {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [male,  setMale] = useState(false);
    const [female, setFemale] = useState(false);
    //const [pressed, setPresse]
    const navigationRef = useNavigationContainerRef();


    return (
        <View style={styles.container}>
            <View style={styles.loginContainer}>
                <Text style={styles.header}> Create Account</Text>
                <View style={styles.inputContainer}>
                    <InputBar placeholder={'username'}/>
                    <InputBar placeholder={'password'} secureTextEntry={true} />
                </View>
                <View style={styles.buttonContainer}>
                    <TouchableOpacity 
                        style={conditionalStyles(female).genderButton}
                        onPress={()=> {setFemale(!female); setMale(false);}}
                    >
                        <MaterialCommunityIcons name="human-female" size={24} style={conditionalStyles(female).buttonText}/>
                    </TouchableOpacity>
                    <TouchableOpacity 
                        style={conditionalStyles(male).genderButton}
                        onPress={()=> {setMale(!male); setFemale(false);}}
                    >
                        <MaterialCommunityIcons name="human-male" size={44} style={conditionalStyles(male).buttonText}/>
                    </TouchableOpacity>
                </View>
                <View style={styles.loginButtonContainer}>
                    <TouchableOpacity
                        style={styles.button} 
                        onPress={
                            () => navigation.navigate('Login Screen')
                        }
                    >
                        <Text style={styles.buttonText}>create account</Text>
                    </TouchableOpacity>
                    <TouchableOpacity 
                        style={styles.button}
                        onPress={() => {}}
                    >
                        <Text style={styles.buttonText}>login</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>                                 
    );
};

const conditionalStyles = (pressed: boolean) => StyleSheet.create({
    genderButton: {
        backgroundColor: colors.black,
        borderRadius: 35,
        padding: 10,
        margin: 20,
        height: 80,
        width: 80,
        textAlign: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 1,
        borderStyle: 'solid',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.8,
        shadowRadius: 2,
        elevation: 1,
    },
    buttonText: {
        color: pressed ? colors.darkGreen : colors.white,
        fontSize: 50,
        fontWeight: 'bold',
    }
});


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
    inputContainer: {
        flexDirection: 'column',
        justifyContent: 'space-evenly',
        height: '40%',
    },
    loginContainer: {
        alignItems: "center",
        paddingVertical: "30%",
        height: "90%",
        justifyContent: "space-between",
        textAlign: "center",
        flexDirection: 'column',
    },
    loginButtonContainer: {
        flexDirection: 'column',
    },
    buttonContainer: {
        alignItems: "center",
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '50%',
        marginTop: 20,
    },
    button: {
        backgroundColor: colors.darkGreen,
        padding: 10,
        width: 100,
        borderStyle: 'solid',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.8,
        shadowRadius: 2,
        elevation: 1,
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


export default CreateAccountScreen;

