
import React from "react";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import {MainScreenOptions} from "themes/HeaderBars";
import AccountScreen from "screens/AccountScreen";


const AccountScreenStack = createNativeStackNavigator();

export default function AccountStack() {
    return (
        <AccountScreenStack.Navigator initialRouteName="AccountScreen" screenOptions={MainScreenOptions}>
            <AccountScreenStack.Screen key="AccountScreen" name="AccountScreen" component={AccountScreen} />
        </AccountScreenStack.Navigator>
    );
}









