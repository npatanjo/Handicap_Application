
import React from "react";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import LoginScreen from "screens/LoginScreen";
import CreateAccountScreen from "screens/CreateAccountScreen";
import {AuthScreenOptions} from "themes/HeaderBars";


const AuthScreenStack = createNativeStackNavigator();

export default function AuthStack() {
    return (
        <AuthScreenStack.Navigator initialRouteName="LoginScreen" screenOptions={AuthScreenOptions}>
            <AuthScreenStack.Screen key="LoginScreen" name="LoginScreen" component={LoginScreen}/>
            <AuthScreenStack.Screen key="CreateAccountScreen" name="CreateAccountScreen" component={CreateAccountScreen} options={AuthScreenOptions}/>
        </AuthScreenStack.Navigator>
    );
}









