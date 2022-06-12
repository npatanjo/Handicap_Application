import React, { useState } from "react";
import { BottomNavigation } from "react-native-paper";
import { StyleSheet, View } from "react-native";
import SearchCourseScreen from "screens/SearchCourseScreen";
import SavedCourseScreen from "screens/SavedCourseScreen";
import AccoutScreen from "screens/AccountScreen";
import colors from "colors";

const BottomBar = () => {
    const [index, setIndex] = useState(0);

  /* useState hook, defines values for it's inner items */
    const [routes] = useState([
        {key: "search", title: "Search",icon: "golf-cart",color: colors.primary},
        {key: "saved", title: "Saved", icon: "golf", color: colors.primary },
        {key: "account", title: "Browse",icon: "account",color: colors.yellow},
    ]);

  /* maps the state to the actual page route */
    const renderScene = BottomNavigation.SceneMap({
        search: SearchCourseScreen,
        saved: SavedCourseScreen,
        account: AccoutScreen,
    });

  /* return the bottom tabbar component and render the active page (initializes to Search)  */
  return (
    <View style={styles.container}>
      <BottomNavigation
        navigationState={{ index, routes }}
        onIndexChange={setIndex}
        renderScene={renderScene}
        shifting={true}
        barStyle={{
          backgroundColor: colors.primary,
          height: 70,
        }}
        inactiveColor={colors.lightGrey}
        activeColor={colors.white}
      />
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});

export default BottomBar;
