import React, { useState } from "react";
import { LogBox } from "react-native";
import { BottomNavigation } from "react-native-paper";
import { StyleSheet, View } from "react-native";
import SearchCourseScreen from "screens/SearchCourseScreen";
import SavedCourseScreen from "screens/SavedCourseScreen";
import AccoutScreen from "screens/AccountScreen";
import LoginWrapperScreen from "screens/LoginWrapperScreen";
import SplashScreen from "screens/SplashScreen";
import colors from "colors";
//import SplashScreenAnimation from 'components/SplashScreenAnimation';
//import { MaterialCommunityIcons } from '@expo/vector-icons';
LogBox.ignoreLogs(["Syntax Error", "JSON Parse error: Unrecognized token"]);

/** 
 * 
 * TODO: 
 * I'm thinking its pretty likely that were going to end up moving the anything related to the
 * bottombar, into its own sepearte component. 
 *
 */
export default function App() {
    const [index, setIndex] = useState(0);

    const SplashWrap = () => {
        return <SplashScreen shouldShow={true} />;
    };

    /**
      * @npatanjo if you try to do anything with the frontend tomorrow this might help you.
      *
      * The goal of what I did in components/LoginScreen.tsx, is so that we can have the account,
      * set initially in this file. Then we can decide if we want to render the login
      * screens or the application screens, depending on how it is used. 
      *
      * If you check out the SearchCourseScreen, you will how were going to be able
      * pass the prop wherever we need it, without prop drilling (passing the user object
      * to components that don't need them, but their children might).
      *
      */
    const [routes] = useState([
        {key: "login", title: "login", icon: "login", color: colors.primary },
        {key: "search", title: "Search",icon: "golf-cart",color: colors.yellow},
        {key: "saved", title: "Saved", icon: "golf", color: colors.primary },
        {key: "account", title: "Browse",icon: "account",color: colors.primary},
        {key: "splash", title: "splash", icon: "loading",color: colors.primary}
    ]);

    /* maps the state to the actual page route */
    const renderScene = BottomNavigation.SceneMap({
        login: LoginWrapperScreen,
        search: SearchCourseScreen,
        saved: SavedCourseScreen,
        account: AccoutScreen,
        splash: SplashWrap,
    });

    /* return the bottom tabbar component and render the active page (initializes to Search)  */
    return (
        <View style={styles.container}>
            <BottomNavigation
                navigationState={{ index, routes }}
                onIndexChange={setIndex}
                renderScene={renderScene}
                shifting={true}
                barStyle={{
                    backgroundColor: colors.primary,
                    height: 70,
                }}
                inactiveColor={colors.lightGrey}
                activeColor={colors.white}
                />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});
