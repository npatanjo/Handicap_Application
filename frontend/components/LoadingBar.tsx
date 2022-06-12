import React, {useEffect, useState} from "react";
import { View, StyleSheet } from "react-native";
import LottieView from "lottie-react-native";


interface Props {
    style: any;
}



/**
 * LoadingBar - component to display the golf ball rolling
 *
 * @param {StyleSheet.style} style - style of the component
 *                                     {
 *                                        width: "80%",
 *                                        justifyContent: "center",
 *                                        alignSelf: "center",
 *                                        alignItems: "center",
 *                                        marginLeft: "50%",
 *                                        marginRight: "50%",
 *                                     }
 * @returns {React.JSX} - LoadingBar component
 */
export default function LoadingBar({ style }: Props) {

  const [animation, setAnimation] = useState<LottieView | null>();

  useEffect(() => {
    if (animation) {
      animation.play();
    }
  }, [animation]);

  return (
    <View style={styles.container}>
        <LottieView
          ref={(animation) => {
            setAnimation(animation);
          }}
          source={require("assets/load_golfball_animation.json")}
          autoSize={true}
          style={style}
          autoPlay={true}
          loop={true}
          resizeMode={"contain"}
        />
    </View>
  );
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
    }
});

