import React from "react";
import { StyleSheet } from "react-native";
import colors from "utilities/Colors";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import {NavigationContainer} from "@react-navigation/native";
import LoadingComponent from "components/LoadingComponent";
import CreateAccountScreen from "screens/CreateAccountScreen";
import LoginScreen from "screens/LoginScreen";
import SearchCourseScreen from "screens/SearchCourseScreen";
import CoursePage from "screens/CoursePage";
import AccountScreen from "screens/AccountScreen";
import SavedCourseScreen from "screens/SavedCourseScreen";
import HomeScreen from "screens/HomeScreen";

interface Props {}

const Stack = createNativeStackNavigator();
/**
 * Will use this screen when waiting for api check of user login.
 *
 */
export default function SplashScreen({}: Props) {

    // set context 
    // create a loading context
    // call loading context in all initial routes
    const LoadingWrapper = () => {
        return (
            <LoadingComponent shouldShow={ true }/>
        );
    }

    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="LoadingComponent"
                screenOptions={{
                    headerShown: false,
                    gestureEnabled: true,
                }}
            >
                <Stack.Screen name="LoadingComponent" component={LoadingWrapper} />
                <Stack.Screen name="HomeScreen" component={HomeScreen} />
                <Stack.Screen name="CreateAccountScreen" component={CreateAccountScreen} />
                <Stack.Screen name="Login Screen" component={LoginScreen} />
                <Stack.Screen name="CoursePage" component={CoursePage} />
                <Stack.Screen name="SearchCoursePage" component={SearchCourseScreen} />
                <Stack.Screen name="AccoutScreen" component={AccountScreen} />
                <Stack.Screen name="SavedCourseScreen" component={SavedCourseScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    );

}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
  },
  title: {
    paddingTop: 20,
    color: colors.primary,
    fontWeight: "bold",
    fontSize: 30,
  },
  animationContainer: {
    width: "80%",
    justifyContent: "center",
    alignSelf: "center",
    alignItems: "center",
    marginLeft: "50%",
    marginRight: "50%",
  },
});
