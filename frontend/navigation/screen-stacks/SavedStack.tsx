import React from "react";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import SavedScreen from 'screens/SavedScreen';
import CoursePage from 'screens/CoursePage';
import {InnerScreenOptions, MainScreenOptions} from "themes/HeaderBars";


const SavedScreenStack = createNativeStackNavigator();


export default function SavedStack() {
    return (
        <SavedScreenStack.Navigator initialRouteName={"SavedScreen"} screenOptions={MainScreenOptions}>
            <SavedScreenStack.Screen name="SavedScreen" component={SavedScreen} />
            <SavedScreenStack.Screen name="CoursePage" component={CoursePage} options={InnerScreenOptions}/>
        </SavedScreenStack.Navigator>
    );
}


