/**
 * @author Nate Patanjo, Nick Donfris
 *
 *
 */
// import { createNativeStackNavigator } from "@react-navigation/native-stack";
// import LoginScreen from "screens/LoginScreen";
import React, { useEffect, useReducer, useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import LoginInputBar from "components/LoginInputBar";
import colors from "colors";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useNavigationContainerRef } from "@react-navigation/native";
import fonts from "utilities/Fonts";
// TODO: move this back
//import userState from "reducers/UserReducer";
//import userReducer from "reducers/UserReducer";

// the state of the user, at any point in the component's lifecycle
interface userState {
  username: string;
  password: string;
  gender: string;
  token: string;
}

// the initial state for a user
const initialUserState: userState = {
  username: "",
  password: "",
  gender: "",
  token: "",
};

// type is the field to update
// payload is the new value
type userActions =
  | { type: "setInitial"; payload: userState }
  | { type: "setUsername"; payload: string }
  | { type: "setPassword"; payload: string }
  | { type: "setGender"; payload: string }
  | { type: "setToken"; payload: string };

// Helper function to show the user which fields are not filled in
const getUnsetStates = (checkState: userState): string[] => {
  let unsetStates: string[] = [];
  Object.entries(checkState).forEach(([key, value]) => {
    if ("" === value) {
      unsetStates.push(key.toString());
    }
  });
  return unsetStates;
};

const userReducer = (
  state: userState = initialUserState,
  action: userActions
) => {
  switch (action.type) {
    case "setInitial":
      return { ...state, ...action.payload };
    case "setUsername":
      return { ...state, username: action.payload };
    case "setPassword":
      return { ...state, password: action.payload };
    case "setGender":
      return { ...state, gender: action.payload };
    case "setToken":
      return { ...state, token: action.payload };
    default:
      const unsetStates = getUnsetStates(state);
      console.log(
        `Please fill in the following fields: ${unsetStates.join(", ")}.`
      );
      return state;
  }
};

interface GenderButtonProps {
  selected: boolean;
  onPress: () => void;
  iconName: "human-female" | "human-male";
}

// TODO: decompose more.
const GenderButton = ({ iconName, onPress, selected }: GenderButtonProps) => {
  return (
    <>
      <TouchableOpacity
        style={conditionalStyles(selected).genderButton}
        onPress={onPress}
      >
        <MaterialCommunityIcons
          name={iconName}
          size={24}
          style={conditionalStyles(selected).buttonText}
        />
      </TouchableOpacity>
    </>
  );
};

interface Props {
  navigation: any;
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
const CreateAccountScreen = ({ navigation }: Props) => {
  const [user, dispatch] = useReducer(userReducer, {} as any);

  const logger = (str: string, state: userState) => {
    console.log("~~~~~~~~~~~~~~~~~~~~~~~~~~~~");
    console.log(str);
    console.log();
    console.log("state [ typeof == userState ]");
    console.log(`username: ${state.username}`);
    console.log(`password: ${state.password}`);
    console.log(`gender:   ${state.gender}`);
    console.log(`token:    ${state.token}`);
    console.log("~~~~~~~~~~~~~~~~~~~~~~~~~~~~");
  };

  useEffect(() => {
    /* just for testing (this can be commented out) */
    console.log(user);
    dispatch({ type: "setUsername", payload: "john_doe_69" });
    logger(`Set username to: ${user.username}`, user);
    dispatch({ type: "setPassword", payload: "react_is_a_pain_in_the_ass" });
    logger(`Set Password to: ${user.gender}`, user);
    dispatch({ type: "setGender", payload: "" });
    logger(`Set Gender to: ${user.gender}`, user);
    dispatch({ type: "setPassword", payload: "ab99_xX*+?URR1010" });
    logger(`Set Gender to: ${user.token}`, user);
  }, []);

  const isFemale = () => {
    if (user.gender === "" || user.gender === undefined) {
      return false;
    }
    return user.gender === "F" ? true : false;
  };

  const isMale = () => {
    if (user.gender === "" || user.gender === undefined) {
      return false;
    }
    return user.gender === "M" ? true : false;
  };

  return (
    <View style={styles.container}>
      <View style={styles.loginContainer}>
        <Text style={styles.header}> Create Account</Text>
        <View style={styles.inputContainer}>
          <LoginInputBar
            placeholder={"Username"}
            value={user.username}
            setValue={(newText: string) =>
              dispatch({ type: "setUsername", payload: newText })
            }
          />
          <LoginInputBar
            placeholder={"Password"}
            value={user.password}
            setValue={(newText: string) =>
              dispatch({ type: "setPassword", payload: newText })
            }
            secureTextEntry={true}
          />
        </View>
        <View style={styles.buttonContainer}>
          {/* I'm going to abstract this another layer tomorrow so Gender Button only takes A male or female prop */}
          <GenderButton
            iconName={"human-female"}
            onPress={() => {
              dispatch({ type: "setGender", payload: "F" });
            }}
            selected={isFemale()}
          />
          <GenderButton
            iconName={"human-male"}
            onPress={() => {
              dispatch({ type: "setGender", payload: "M" });
            }}
            selected={isMale()}
          />
        </View>
        <View style={styles.loginButtonContainer}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate("Login Screen")}
          >
            <Text style={styles.buttonText}>Create</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.loginContainer} onPress={() => {}}>
            <Text style={styles.loginButtonText}>LOGIN</Text>
          </TouchableOpacity>
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

export default CreateAccountScreen;
