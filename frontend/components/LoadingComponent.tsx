import React, { useEffect, useState } from "react";
import { StyleSheet, View, Text } from "react-native";
import LottieView from "lottie-react-native";
import colors from "utilities/Colors";

interface Props {
  shouldShow?: boolean;
}
/** 
 * 
 * TODO: 
 * I'm thinking its pretty likely that were going to end up moving the anything related to the
 * bottombar, into its own sepearte component. 
 *
 */
export default function LoadingComponent({shouldShow} : Props) {

    const [animation, setAnimation] = useState<LottieView | null>();

    useEffect(() => {
        if (animation) {
            animation.play();
        }
    }, [animation]);

    return (
        <View style={styles.container}>
            { shouldShow 
                ? <View>
                    <Text style={styles.title}>Handicap Application</Text>
                    <LottieView
                        ref={(animation) => {
                            setAnimation(animation);
                        }}
                        source={require("assets/load_golfball_animation.json")}
                        autoSize={true}
                        style={styles.animationContainer}
                        autoPlay={true}
                        loop={true}
                        resizeMode={"contain"}
                    />
                </View>
                : <></>
            }
        </View>);
    
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
  },
  title: {
    paddingTop: 20,
    color: colors.primary,
    fontWeight: "bold",
    fontSize: 30,
  },
  animationContainer: {
    width: "80%",
    justifyContent: "center",
    alignSelf: "center",
    alignItems: "center",
    marginLeft: "50%",
    marginRight: "50%",
  },
})
