
import React from "react";
import  { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";

interface Props {

}




const AccoutScreen = ({}: Props) => {
    return (
        <View style={styles.container}>
            <Text>Account Course Screen</Text>
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




export default AccoutScreen;

