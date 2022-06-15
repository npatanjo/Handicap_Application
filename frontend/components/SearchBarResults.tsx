import {NavigationContext} from "@react-navigation/native";
import React, {useContext} from "react";
import { View, StyleSheet, FlatList, Text } from "react-native";
import colors from "utils/Colors";
import {SearchQueryContext} from "utils/contexts/SearchContext";
import { GolfCourse } from "utils/GolfCourse";
import SearchBarResultTile from "./SearchBarResultTile";


interface ItemProps {
    item: GolfCourse;
}

export default function SearchBarResults() {

    const {searchState, searchDispatch} = useContext(SearchQueryContext);

    const navigation = useContext(NavigationContext);

    const renderItem = ({ item } : ItemProps ) => {
        const firstCourses = item.courseRatings.slice(0, 6);
        return (
            <View style={styles.item}>
                <SearchBarResultTile
                    courseName={item.courseName}
                    courseRatings={item.courseRatings}
                    firstCourseRatings={firstCourses}
                    navigation={navigation}
                />
            </View>
        );

    }

    return ( 
        <View style={styles.container}>
            {
                searchState.loading 
                ? <Text style={styles.loading}>Loading...</Text> 
                : <FlatList
                    data={searchState.results}
                    keyExtractor={(item, index) => index.toString()}
                    renderItem={renderItem}
                    showsVerticalScrollIndicator={false}
                    numColumns={1}
                    style={styles.list}
                    extraData={searchState.results}
                    ItemSeparatorComponent={() => <View style={styles.separator} />}
                 />
            }
        </View> 
    );
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        textAlign: "center",
        alignItems: "center",
        justifyContent: "center",
    },
    list: {
        width: "100%",
        height: "80%",
        borderRadius: 15,
    },
    item: {
        backgroundColor: colors.primary,
        paddingVertical: 10,
        borderRadius: 15,
    },
    separator: {
        height: 5,
        backgroundColor: colors.white,
    },
    loading: {
        backgroundColor: "#fff",
        color: colors.primary,
        fontSize: 20,
        textAlign: "center",
        alignItems: "center",
        justifyContent: "center",
    },

});
