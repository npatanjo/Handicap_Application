import React, {useEffect, useState} from 'react';
import { Text, StyleSheet, View } from 'react-native';
import LottieView from "lottie-react-native";
import colors from 'utilities/Colors';

interface Props {
    shouldShow?: boolean;

}

/**
 * Will use this screen when waiting for api check of user login.
 * 
 */
export default function SplashScreen({shouldShow}:Props) {
    const [ animation, setAnimation ] = useState<LottieView | null>();

    useEffect(() => {
        if (animation) {
            animation.play();
        }
        // add effect to title
    }, [animation]) 

    if (shouldShow)  {
        return (
            <View style={styles.container}>
                <View>
                    <Text style={styles.title}>Handicap Application</Text>
                </View>
                <LottieView
                    ref={animation => {
                        setAnimation(animation) 
                    }}
                    source={require('assets/load_golfball_animation.json')}
                    autoSize={true}
                    style={styles.animationContainer}
                    autoPlay={true}
                    loop={true}
                    resizeMode={"contain"}
                />
            </View>
        );
    } else {
        return (
            <View style={styles.container}></View>
        );
    }
}




const styles = StyleSheet.create({
    container: {
        backgroundColor: "#fff",
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
    },
    title: {
        paddingTop: 20,
        color: colors.darkGreen,
        fontWeight: "bold",
        fontSize: 30,
    },
    animationContainer: {
        width: '80%',
        justifyContent: 'center',
        alignSelf: 'center',
        alignItems: 'center',
        marginLeft: '50%',
        marginRight: '50%',
    },
});
