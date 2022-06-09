
import React, {useContext} from "react";
import  { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import {AuthContext} from "utilities/contexts/AuthContext";
import {UserContext} from "utilities/contexts/UserContext";
import {initialUserState} from "utilities/reducers/UserReducer";

interface Props {

}


function Seperator() {
    return (
        <View style={styles.separator} />
    );
}

interface InlineProps { 
    text1: string;
    text2: string;
}

function InlineText({text1, text2} : InlineProps) {
    return (
        <View style={styles.inlineText}>
            <Text style={styles.inlineTextText1}>{text1}</Text>
            <Text style={styles.inlineTextText2}>{text2}</Text>
        </View>
    )

}

const AccountScreen = ({}: Props) => {

    //const {state, dispatch} = useContext(UserContext);

    const {state} = useContext(UserContext);
    const { dispatch } = useContext(AuthContext);


    const logout = () => {
        dispatch({type: "LOGGED_IN", payload: false});
        dispatch({type: "LOADING", payload: false});
    }

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Account Course Screen</Text>
            <Seperator />
            <InlineText text1={"USERNAME: "} text2={state.username} />
            <Seperator />
            <InlineText text1={"GENDER: "} text2={state.gender} />
            <Seperator />
            <TouchableOpacity style={styles.button} onPress={logout}>
                <Text style={styles.buttonText}>LOG OUT</Text>
            </TouchableOpacity>

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
    title: {
        top: 40,
        position: 'absolute',
        fontSize: 50,
        alignSelf: "center",
        textAlign: "center",
    },
    text: {
        margin: 30,
        justifyContent: "flex-start",
        fontSize: 20,
        textAlign: "left",
        position: "relative",
    },
    separator: {
        height: 5,
        width: "100%",
        backgroundColor: "#000",
    },
    button: {
        marginTop: 40,
        width: "50%",
        height: "10%",
        backgroundColor: "#15aabf",
        textAlign: "center",
        alignSelf: "center",
        justifyContent: "center",
        borderRadius: 20,
    },
    buttonText: {
        color: "#000",
        justifyContent: "center",
        textAlign: "center",
    },
    inlineText: {
        margin: 30,
        justifyContent: "flex-start",
        flexDirection: "row",
    },
    inlineTextText1: {
        fontSize: 20,
        marginRight: 10,
    },
    inlineTextText2: {
        fontSize: 20,
        fontWeight: "bold",
        marginLeft: 10,
        color: "#15aabf",
    },
});




export default AccountScreen;

