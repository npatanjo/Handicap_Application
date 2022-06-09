import React, { useContext, useEffect, useReducer, useState } from "react";
import { AsyncStorage, LogBox } from "react-native";
import { StyleSheet, View } from "react-native";
import SplashScreen from "screens/SplashScreen";
import BottomBar from 'components/BottomBar';
import {setUserLoggedIn, setUserStates, validUser} from "utilities/functions/LoginFunctions";
import LoginWrapperScreen from "screens/LoginWrapperScreen";
import {UserContext} from "utilities/contexts/UserContext";
import userReducer, {initialUserState, userState} from "utilities/reducers/UserReducer";
import {NavigationContext} from "@react-navigation/native";
import LoginScreen from "screens/LoginScreen";
LogBox.ignoreLogs(["Syntax Error", "JSON Parse error: Unrecognized token"]);

interface Props {
    isLoaded: boolean;
    isLoggedIn: boolean;
}

function DisplayScreen({isLoaded, isLoggedIn }: Props) {
    if (isLoaded) {
        return (<></>);
    } else {
        if (isLoggedIn) {
            return (<BottomBar/>);
        } else {
            return (<LoginWrapperScreen/>);
        }
    }
}


/** 
 * App routes need reworking
 * IDEAS:
 *  • Maybe throw stack navigator in here?
 *  • useContext(NavigationContext)
 */
export default function App() {
    
    const [ isLoading, setIsLoading ] = useState(true);

    const userStates = useContext(UserContext);
    const [state, dispatch] = useReducer(userReducer, userStates as never)

    
    useEffect(() => {
        setTimeout(() => {
            setIsLoading(true);
        }, 3500);
        checkLogin();
        setIsLoading(false);
    }, []);

    
    const checkLogin = async () => {
        //const user = await AsyncStorage.getItem('user');
        let isValid = false;
        let user : userState = {username: 'nick', password: 'gnu', gender: 'M', token:'testToken1', isLoggedIn: true};
        try {
            isValid = await validUser(user);
            if (isValid) {
                setUserStates(user, dispatch);
            }
        } catch(err){
            console.log(err);
        } finally {
            setUserLoggedIn(state, isValid);
            setIsLoading(false);
        }
    }


    /* return the bottom tabbar component and render the active page (initializes to Search)  */
    return (
        <View style={styles.container}>
            <UserContext.Provider value={{state, dispatch}}>
            {isLoading 
                ? <SplashScreen />
                : <LoginScreen />
            }
            </UserContext.Provider>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});
