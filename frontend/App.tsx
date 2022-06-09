import React, { useContext, useEffect, useMemo, useReducer } from "react";
import { LogBox } from "react-native";
import { StyleSheet, View } from "react-native";
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

    const [ auth_state, auth_dispatch ] = useReducer(authReducer, authContext as never);



    const userStates = useContext(UserContext);
    const [user_state, user_dispatch] = useReducer(userReducer, userStates as never)


    useEffect(() => {
        setTimeout(() => {
            checkLogin();
            auth_dispatch({type: "LOADING", payload: false});
        }, 3500);
        auth_dispatch({type: "LOADING", payload: true});
    }, []);

    useEffect(() => {
        checkLogin();
        auth_dispatch({type: "LOGGED_IN", payload: true});
    }, [auth_state.isLoading]);
    
    const checkLogin = async () => {
        //const user = await AsyncStorage.getItem('user');
        if (auth_state.isLoading || !auth_state.isLoggedIn) {
            let isValid = false;
            let user : userState = {username: 'nick', password: 'gnu', gender: 'M', token:'testToken1', isLoggedIn: true};
            try {
                isValid = await validUser(user);
            } catch(err){
                console.log(err);
            } finally {
                auth_dispatch({type: 'LOGGED_IN', payload: isValid });
            }
        }
    }


    const authValues = {
        state: auth_state,
        dispatch: auth_dispatch
    };

    const userValues = {
        state: user_state,
        dispatch: user_dispatch
    };

    /* return the bottom tabbar component and render the active page (initializes to Search)  */
    return (
        <NavigationContainer>
            <AuthContext.Provider value={authValues}>
                <UserContext.Provider value={userValues}>
                    {auth_state.isLoading 
                        ? <SplashScreen />
                        : ( auth_state.isLoggedIn || auth_state.isLoggedIn )
                        ? <HomeTabStack />
                        : <AuthStack />
                    }
                </UserContext.Provider>
            </AuthContext.Provider>
        </NavigationContainer>
    );
}


