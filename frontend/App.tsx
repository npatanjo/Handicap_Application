import React, { useContext, useEffect, useMemo, useReducer } from "react";
import { LogBox } from "react-native";
import SplashScreen from "screens/SplashScreen";
import {validUser} from "utilities/functions/LoginFunctions";
import {UserContext} from "utilities/contexts/UserContext";
import userReducer, {userState} from "utilities/reducers/UserReducer";
import {AuthContext} from "utilities/contexts/AuthContext";
import authReducer, {} from "utilities/reducers/AuthReducer";
import AuthStack from "screenStacks/AuthStack";
import HomeTabStack from "tabStacks/HomeTabStack";
import {NavigationContainer} from "@react-navigation/native";




LogBox.ignoreLogs(["Syntax Error", "JSON Parse error: Unrecognized token"]);

/** 
 * App routes need reworking
 * IDEAS:
 *  • Maybe throw stack navigator in here?
 *  • useContext(NavigationContext)
 */
export default function App() {
    

    const authContext = useContext(AuthContext);

    const [ authState, authDispatch ] = useReducer(authReducer, authContext as never);

    const userStates = useContext(UserContext);
    const [ userState, userDispatch ] = useReducer(userReducer, userStates as never)


    useEffect(() => {
        setTimeout(() => {
            checkLogin();
            authDispatch({type: "LOADING", payload: false});
        }, 3500);
        authDispatch({type: "LOADING", payload: true});
    }, []);

    useEffect(() => {
        checkLogin();
        authDispatch({type: "LOGGED_IN", payload: true});
    }, [authState.isLoading]);
    
    const checkLogin = async () => {
        //const user = await AsyncStorage.getItem('user');
        if (authState.isLoading || !authState.isLoggedIn) {
            let isValid = false;
            let user : userState = {username: 'nick', password: 'gnu', gender: 'M', token:'testToken1', isLoggedIn: true};
            try {
                isValid = await validUser(user);
            } catch(err){
                console.log(err);
            } finally {
                authDispatch({type: 'LOGGED_IN', payload: isValid });
            }
        }
    }

    const authValues = {
        authState,
        authDispatch
    };

    const userValues = {
        userState,
        userDispatch
    };

    /* return the bottom tabbar component and render the active page (initializes to Search)  */
    return (
        <NavigationContainer>
            <AuthContext.Provider value={authValues}>
                <UserContext.Provider value={userValues}>
                    {authState.isLoading 
                        ? <SplashScreen />
                        : ( authState.isLoggedIn )
                            ? <HomeTabStack />
                            : <AuthStack />
                    }
                </UserContext.Provider>
            </AuthContext.Provider>
        </NavigationContainer>
    );
}


