/**
 * @author Nate Patanjo, Nick Donfris
 *
 */

import React, { useContext } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import LoginInputBar from "components/LoginInputBar";
import colors from "colors";
import {UserContext} from "utils/contexts/UserContext";
import {useNavigation} from "@react-navigation/native";
import {handleLoginToAccount, storeAllUserData, userHasEmptyFields} from "utils/functions/LoginHelpers";
import {User} from "utils/interfaces/User";
import {AuthContext} from "utils/contexts/AuthContext";

interface NavButtonProps {
    buttonType: "login" | "create";
    nav: any;
}
const NavButton = ({buttonType, nav} : NavButtonProps) => {

    const {authState, authDispatch} = useContext(AuthContext);
    const {userState, userDispatch} = useContext(UserContext);

    const buttonText = buttonType == "login" ? "Log-in to Account" : "Create an Account";

    const onPress = async () => {
        if ( buttonType === "create" ) {
            nav.navigate("CreateAccountScreen")
        } else {
            let successfulLogin = false;
            if (userState.username && userState.password) {
                successfulLogin = await handleLoginToAccount(userState);
            }
            authDispatch({type: "LOGGED_IN", payload: successfulLogin})
            if (successfulLogin) {
                // TODO: create method to generate token
                // TODO: create helper method to store all of the new userState
                userDispatch({type: "setUsername", payload: userState.username});
                userDispatch({type: "setPassword", payload: userState.password});
                userDispatch({type: "setGender", payload: "M"});
                userDispatch({type: "setToken", payload: "1"});
                storeAllUserData(userState);
            }
        }
    }

    return (
        <>
          <TouchableOpacity
            style={styles.button}
            onPress={onPress}
          >
            <Text style={styles.buttonText}>{buttonText}</Text>
          </TouchableOpacity>
        </>
    );
}

interface LoginInputProps {
    type: "username" | "password";
}

const LoginInput = ({type} : LoginInputProps) => {

    const {userState, userDispatch} = useContext(UserContext);

    const value = type === "username" ? userState.username : userState.password;

    const setValue = (text: string) : void => {
        if ( type === "username" ) {
            userDispatch({type: "setUsername", payload: text});
        } else {
            userDispatch({type: "setPassword", payload: text});
        }
    }

    const placeholder = type === "username" ? "Username" : "Password";

    const SecureTextEntry = type === "password" ? true : false;

    return (
        <LoginInputBar value={value} setValue={setValue} placeholder={placeholder} secureTextEntry={SecureTextEntry}/>
    );
}


export default function LoginScreen() {

    const navigation = useNavigation();
    console.log(navigation);

    return (
    <View style={styles.container}>
      <View style={styles.loginContainer}>
        <Text style={styles.header}> Account Login </Text>
        <LoginInput type={"username"}/>
        <LoginInput type={"password"}/>
        <View style={styles.buttonContainer}>
            <NavButton nav={navigation} buttonType={"login"}/>
        </View>
        <View style={styles.buttonContainer}>
            <NavButton nav={navigation} buttonType={"create"}/>
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
    flexDirection: "column",
  },
  header: {
    fontSize: 20,
    fontWeight: "bold",
    color: colors.primary,
    marginBottom: 20,
  },
  loginContainer: {
    alignItems: "center",
    paddingVertical: "30%",
    height: "70%",
    justifyContent: "center",
    textAlign: "center",
    flexDirection: "column",
  },
  buttonContainer: {
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between",
    width: "50%",
  },
  button: {
    backgroundColor: colors.primary,
    padding: 10,
    width: 150,
    margin: 15,
    alignItems: "center",
    borderRadius: 10,
    textAlign: "center",
    justifyContent: "center",
  },
  buttonText: {
    color: "#fff",
    fontSize: 9,
  },
});
