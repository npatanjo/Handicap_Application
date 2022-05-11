import {NavigationContainer} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import CreateAccountScreen from './CreateAccountScreen';
import LoginScreen from './LoginScreen';
import React from 'react';

const Stack = createNativeStackNavigator();

const LoginWrapperScreen = () => {

    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="CreateAccountScreen"
                screenOptions={{
                    headerShown: false,
                    gestureEnabled: true,
                }}
            >
                <Stack.Screen name="Create Account" component={CreateAccountScreen} />
                <Stack.Screen name="Login Screen" component={LoginScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    );
};


export default LoginWrapperScreen;
