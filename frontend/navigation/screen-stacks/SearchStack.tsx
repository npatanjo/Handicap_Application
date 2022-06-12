
import React from "react";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import SearchScreen from 'screens/SearchScreen';
import CoursePage from 'screens/CoursePage';
import {InnerScreenOptions, MainScreenOptions} from "themes/HeaderBars";


const SearchScreenStack = createNativeStackNavigator();


export default function SearchStack() {
    return (
        <SearchScreenStack.Navigator initialRouteName={"SearchScreen"} screenOptions={MainScreenOptions} >
            <SearchScreenStack.Screen name="SearchScreen" component={SearchScreen} />
            <SearchScreenStack.Screen name="CoursePage" component={CoursePage} options={InnerScreenOptions} />
        </SearchScreenStack.Navigator>
    );
}


