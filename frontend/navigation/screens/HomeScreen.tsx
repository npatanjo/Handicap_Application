import BottomBar from "components/BottomBar";
import React, {createContext, useContext} from "react";
import {View} from "react-native";
import {UserContext} from "utilities/contexts/UserContext";


interface Props {}


const HomeScreen = ({}: Props) => {

    const {userState, userDispatch} = useContext(UserContext);

    return (
        <View>
             {/*   userState.isLoggedIn ? <BottomBar/> : <HomeScreen /> */}
        </View>
    );

}



export default HomeScreen;

