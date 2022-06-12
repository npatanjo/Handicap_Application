

import React, {useState} from "react";
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { StyleSheet, View, Text } from "react-native";
import SearchStack from "screenStacks/SearchStack";
import SavedStack from "screenStacks/SavedStack";
import AccountStack from "screenStacks/AccountStack";
import colors from "utils/Colors";

const Tab = createMaterialBottomTabNavigator();

export default function HomeTabStack() {

  /* return the bottom tabbar component and render the active page (initializes to Search)  */
  return (
        <Tab.Navigator
            initialRouteName="SearchScreen"
            activeColor="#fff0ff"
            inactiveColor="#fff"
            sceneAnimationEnabled={true}
            labeled={false}
            barStyle={styles.barStyle}
        >
            <Tab.Screen
                name="SearchStack"
                component={SearchStack}
                options={{
                    tabBarLabel: 'Search',
                    tabBarIcon: ({ color }) => (
                        <MaterialCommunityIcons name="magnify" color={color} size={26} />
                    ),
                }}
            />  
            <Tab.Screen
                name="SavedStack"
                component={SavedStack}
                options={{
                    tabBarLabel: 'Saved',
                    tabBarIcon: ({ color }) => (
                        <MaterialCommunityIcons name="golf" color={color} size={26} />
                    ),
                }}
            />
            <Tab.Screen
                name="AccountStack"
                component={AccountStack}
                options={{
                    tabBarLabel: 'Account',
                    tabBarIcon: ({ color }) => (
                        <MaterialCommunityIcons name="account" color={color} size={26} />
                    ),
                }}
            />
        </Tab.Navigator>
  );

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    barStyle: {
        position: 'absolute',
        backgroundColor: colors.primary,
        height: 80,
        bottom: 0,
    },
});
















