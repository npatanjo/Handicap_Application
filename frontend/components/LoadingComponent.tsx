import LottieView from 'lottie-react-native';
import {AuthContext} from "contexts/AuthContext";
import {useContext, useRef, useEffect} from "react";
import {View, StyleSheet} from "react-native";
 


export default function LoadingComponent({ showSplash }: { showSplash: boolean}) {

    const {state, dispatch} = useContext(AuthContext);
    const animation = useRef(null);

    useEffect(() => {
        // @ts-ignore
        animation.current.play();
    }, [state.isLoading]);

    return (
        <View style={styles.animationContainer}>
            <LottieView
                ref={animation}
                style={{
                    width: 200,
                    height: 200,
                    backgroundColor: '#fff',
                }}
                loop={state.isLoading}
                onAnimationFinish={() => {
                    dispatch({type: 'LOADING', payload: false});
                    dispatch({ type:'LOGGED_IN', payload: true })
                }}
                source={require('../assets/load_golfball_animation.json')}
            />
        </View>
    );
}

const styles = StyleSheet.create({
  animationContainer: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonContainer: {
    paddingTop: 20,
  },
});
