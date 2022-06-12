import React, {useContext} from "react";
import { View } from "react-native";
import LoadingComponent from "components/LoadingComponent";
import {AuthContext} from "utils/contexts/AuthContext";

/**
 * Will use this screen when waiting for api check of user login.
 *
 */
export default function SplashScreen() {
    const {authState} = useContext(AuthContext);

    // set context 
    // create a loading context
    // call loading context in all initial routes
    return (
        <View style={{
            flex: 1,
            justifyContent: "center",
            alignItems: "center"
        }}>
            {
                ( authState.isLoading || !authState.isLoggedIn ) 
                ? <LoadingComponent showSplash={ true }/>
                : <></>
            }

        </View>
    );

}


