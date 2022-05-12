import React, { useCallback, useEffect, useRef, useState } from 'react';
import { LogBox, TouchableOpacity } from 'react-native';
import { BottomNavigation } from 'react-native-paper';
import { StyleSheet, Text, View } from 'react-native';
import SearchCourseScreen from 'screens/SearchCourseScreen';
import SavedCourseScreen from 'screens/SavedCourseScreen';
import AccoutScreen  from 'screens/AccountScreen';
import LoginWrapperScreen from 'screens/LoginWrapperScreen';
import SplashScreen from 'screens/SplashScreen';
import colors from 'colors';
import LottieView from "lottie-react-native";
//import SplashScreenAnimation from 'components/SplashScreenAnimation';
import AnimatedLottieView from 'lottie-react-native';
//import { MaterialCommunityIcons } from '@expo/vector-icons';
LogBox.ignoreLogs(["Syntax Error", "JSON Parse error: Unrecognized token"]);

/** 
 *  will be adding redux to this file, which will handle the state of the 
 *  current users login status. 
 *
 *  @npatanjo I assume you will want to edit the following styles:
 *            @screens/CreateAccountScreen.tsx
 *            @screens/LoginScreen.tsx 
 *            @components/LoginInputBar.tsx file
 */
export default function App() {

    const [index, setIndex] = useState(0);

    const SplashWrap = () => {
        return (
            <SplashScreen shouldShow={true} />
        );
    };

    /* useState hook, defines values for it's inner items */
    const [routes] = useState([
        {key: 'login', title: 'login', icon: 'login', color: colors.darkGreen},
        {key: 'search', title: 'Search', icon: 'golf-cart', color: colors.darkGreen },
        {key: 'saved', title: 'Saved', icon: 'golf', color: colors.darkGreen},
        {key: 'account', title: 'Browse', icon: 'account', color: colors.darkGreen},
        {key: 'splash', title: 'splash', icon: 'loading', color: colors.darkGreen}
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
                    backgroundColor: colors.darkGreen,
                    height: 70,
                }}
                inactiveColor={colors.lightGrey}
                activeColor={colors.white}
            />
        </View>
    );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
