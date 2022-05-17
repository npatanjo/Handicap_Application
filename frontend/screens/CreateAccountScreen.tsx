/**
 * @author Nate Patanjo, Nick Donfris
 *
 *
 */
import React, { useState } from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import LoginInputBar from "components/LoginInputBar";
import colors from "colors";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import {
  useNavigation,
  CommonActions,
  useNavigationContainerRef,
} from "@react-navigation/native";
import LoginScreen from "screens/LoginScreen";

interface Props {
  navigation: any;
}

const CreateAccountScreen = ({ navigation }: Props) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [male, setMale] = useState(false);
  const [female, setFemale] = useState(false);
  //const [pressed, setPresse]
  const navigationRef = useNavigationContainerRef();

  return (
    <View style={styles.container}>
      <View style={styles.loginContainer}>
        <Text style={styles.header}> Create Account</Text>
        <View style={styles.inputContainer}>
          <LoginInputBar placeholder={"Username"} />
          <LoginInputBar placeholder={"Password"} secureTextEntry={true} />
        </View>
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={conditionalStyles(female).genderButton}
            onPress={() => {
              setFemale(!female);
              setMale(false);
            }}
          >
            <MaterialCommunityIcons
              name="human-female"
              size={24}
              style={conditionalStyles(female).buttonText}
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={conditionalStyles(male).genderButton}
            onPress={() => {
              setMale(!male);
              setFemale(false);
            }}
          >
            <MaterialCommunityIcons
              name="human-male"
              size={44}
              style={conditionalStyles(male).buttonText}
            />
          </TouchableOpacity>
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
    fontWeight: "bold",
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
  },
  loginButtonText: {
    fontSize: 18,
    color: colors.primary,
    fontWeight: "bold",
  },
});

export default CreateAccountScreen;
