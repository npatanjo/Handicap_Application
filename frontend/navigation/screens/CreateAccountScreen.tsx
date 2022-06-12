/**
 * @author Nate Patanjo, Nick Donfris
 */
import React, { useContext, useReducer, useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import LoginInputBar from "components/LoginInputBar";
import colors from "colors";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useNavigation, useNavigationContainerRef } from "@react-navigation/native";
import fonts from "utils/Fonts";
import { UserContext } from "utils/contexts/UserContext";
import {setUserLoggedIn} from "utils/functions/LoginFunctions";
import {AuthContext} from "utils/contexts/AuthContext";
import {handleCreateAccount, storeAllUserData} from "utils/functions/LoginHelpers";

type genderString = "human-male" | "human-female";

interface GenderButtonProps {
  gender: "M" | "F" | "";
}

const GenderButton = ({ gender }: GenderButtonProps) => {
  const { userState, userDispatch } = useContext(UserContext);

  const isMale = () => {
    return gender === "M";
  };

  const iconName: genderString = isMale() ? "human-male" : "human-female";

  const isSelected = () => {
    return gender === userState.gender;
  };

  return (

    <>
      <TouchableOpacity
        style={conditionalStyles(isSelected()).genderButton}
        onPress={() => userDispatch({ type: "setGender", payload: gender })}
      >
        <MaterialCommunityIcons
          name={iconName}
          size={24}
          style={conditionalStyles(isSelected()).buttonText}
        />
      </TouchableOpacity>
    </>
  );
};

interface NavButtonProps {
    buttonType: "login" | "create";
    nav: any;
}

const NavButton = ({buttonType, nav} : NavButtonProps) => {

    const {authDispatch} = useContext(AuthContext);
    const {userState, userDispatch} = useContext(UserContext);

    const buttonText = buttonType == "login" ? "Log-in" : "Create Account";

    const onPress = async () => {
        if ( buttonType === "create" ) {
            let successfulLogin = false;
            userDispatch({type: "setToken", payload: '1'});
            successfulLogin = await handleCreateAccount(userState);
            authDispatch({type: "LOGGED_IN", payload: successfulLogin})
            if (successfulLogin) {
                storeAllUserData(userState);
            }
        } else {
            nav.navigate("LoginScreen");
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

/**
 * @npatanjo
 *
 * Basically any of the useReducer code here, will be exported back to the utilities/reducers
 * directory. It just made it way easier to debug, all in the same file.
 *
 * Also if you want, you can compare the differences between this component and the LoginScreen.
 *
 * • LoginScreen uses useState()
 *
 * • Here we use useReducer(), which allows us to have an actual object which can be accessed through the
 *   entire application with the useContext() hook (in the search bar).
 *
 * Lastly, you can fill in the useEffect() hook, with values that you'd want to test through the api, since
 * an empty array in the useEffect() hook will only run the first time the component is rendered/loaded.
 *
 */
export default function CreateAccountScreen(){
    const navigation = useNavigation();
    const { userState: state, userDispatch: dispatch } = useContext(UserContext);

  return (
    <View style={styles.container}>
      <View style={styles.loginContainer}>
        <Text style={styles.header}>Create Account</Text>
        <View style={styles.inputContainer}>
          <LoginInputBar
            placeholder={"Username"}
            value={state.username}
            setValue={(newText: string) =>
              dispatch({ type: "setUsername", payload: newText })
            }
          />
          <LoginInputBar
            placeholder={"Password"}
            value={state.password}
            setValue={(newText: string) =>
              dispatch({ type: "setPassword", payload: newText })
            }
            secureTextEntry={true}
          />
        </View>
        <View style={styles.buttonContainer}>
          <GenderButton gender={"M"} />
          <GenderButton gender={"F"} />
        </View>
            <View style={styles.loginButtonContainer}>
              <NavButton buttonType={"create"} nav={navigation} />
              <NavButton buttonType={"login"} nav={navigation} />
            </View>
        </View>
    </View>
  );
};

const conditionalStyles = (pressed: boolean) =>
  StyleSheet.create({
    genderButton: {
      borderRadius: 10,
      padding: 10,
      margin: 10,
      height: 50,
      width: 120,
      textAlign: "center",
      alignItems: "center",
      justifyContent: "center",
      borderWidth: pressed ? 0 : 1,
      borderStyle: "solid",
      borderColor: colors.primary,
      elevation: 1,
      backgroundColor: pressed ? colors.primary : colors.white,
    },
    buttonText: {
      color: pressed ? colors.white : colors.primary,
      fontSize: 30,
      fontWeight: "bold",
    },
  });

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
  },
  header: {
    fontSize: 30,
    fontFamily: fonts.primary,
    color: colors.primary,
    marginBottom: 30,
  },
  inputContainer: {
    flexDirection: "column",
    justifyContent: "space-evenly",
    height: "40%",
  },
  loginContainer: {
    alignItems: "center",
    paddingVertical: "30%",
    height: "90%",
    justifyContent: "space-between",
    textAlign: "center",
    flexDirection: "column",
  },
  loginButtonContainer: {
    flexDirection: "column",
  },
  buttonContainer: {
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between",
    width: "50%",
    marginTop: 20,
  },
  button: {
    padding: 10,
    width: 250,
    height: 50,
    borderStyle: "solid",
    borderColor: colors.primary,
    borderWidth: 1,
    margin: 30,
    alignItems: "center",
    borderRadius: 40,
    textAlign: "center",
    justifyContent: "center",
  },
  buttonText: {
    color: colors.primary,
    fontSize: 15,
    fontFamily: fonts.primary,
  },
  loginButtonText: {
    fontSize: 18,
    color: colors.primary,
    fontWeight: "bold",
    fontFamily: fonts.primary,
  },
});

