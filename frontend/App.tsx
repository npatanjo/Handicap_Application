import React, { useContext, useEffect, useMemo, useReducer } from "react";
import { LogBox } from "react-native";
import SplashScreen from "screens/SplashScreen";
import {validUser} from "utils/functions/LoginFunctions";
import {UserContext} from "utils/contexts/UserContext";
import userReducer, {userState} from "utils/reducers/UserReducer";
import {AuthContext} from "utils/contexts/AuthContext";
import authReducer, {} from "utils/reducers/AuthReducer";
import AuthStack from "screenStacks/AuthStack";
import HomeTabStack from "tabStacks/HomeTabStack";
import {NavigationContainer} from "@react-navigation/native";
import {handleSplashLogin} from "utils/functions/LoginHelpers";




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
        async function CheckLogin() {
            const shouldLogin = await handleSplashLogin();
            if (shouldLogin) {
                authDispatch({type: "LOGGED_IN", payload: shouldLogin});
            }
        }
        authDispatch({type: "LOADING", payload: true});
        CheckLogin();
        console.log("App.tsx: useEffect: authState", authState);
        authDispatch({type: "LOADING", payload: false});
    }, []);

    useEffect(() => {
        async function CheckLogin() {
            const shouldLogin = await handleSplashLogin();
            if (shouldLogin) {
                authDispatch({type: "LOGGED_IN", payload: shouldLogin});
            }

        }
        CheckLogin();
        console.log("App.tsx: useEffect2: authState", authState);
    }, [authState.isLoading]);
    

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


