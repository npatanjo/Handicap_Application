
import {NativeStackNavigationOptions} from "@react-navigation/native-stack";

export const AuthScreenOptions: NativeStackNavigationOptions = {
    headerShown: false,
    gestureEnabled: true
};

export const MainScreenOptions: NativeStackNavigationOptions = {
    headerShown: false,
    gestureEnabled: false
};

export const InnerScreenOptions: NativeStackNavigationOptions = {
    headerShown: false,
    gestureEnabled: true,
};

export const OuterScreenOptions: NativeStackNavigationOptions = {
    headerShown: false,
    gestureEnabled: false,
}
