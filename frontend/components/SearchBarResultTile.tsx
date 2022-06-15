import {useNavigation, NavigationContext} from "@react-navigation/native";
import React, {useContext} from "react";
import {View, Text, StyleSheet, TouchableOpacity, FlatList, ListRenderItem} from "react-native";
import colors from "utils/Colors";
import { CourseRating, GolfCourse } from "utils/GolfCourse";
import CoursePage from 'screens/CoursePage';
import {SearchQueryContext} from "utils/contexts/SearchContext";


interface Props {
    courseName: string;
    courseRatings: CourseRating[];
    firstCourseRatings: CourseRating[];
    navigation: any;
}

export default function SearchBarResultTile({courseName, courseRatings, firstCourseRatings, navigation}: Props) {

    const { searchState, searchDispatch } = useContext(SearchQueryContext);

    const thisCourse: GolfCourse = {
        courseName: courseName,
        courseRatings: courseRatings,
    };

    const renderItem : ListRenderItem<CourseRating> = ({ item }) => {
        return (
            <View style={renderStyles.circle}>
                <Text style={renderStyles.circleText}>{item.color}</Text>
                <Text style={renderStyles.gender}>{item.gender}</Text>
                <Text style={renderStyles.number}>{item.par}</Text>
            </View>
        );
    }

    return (
        <TouchableOpacity
            style={styles.container}
            onPress={() => {
                searchDispatch({type: "setNewSelection", payload: thisCourse});
                console.log(searchState.selected);
                navigation.navigate('CoursePage');
            }}
        >
            <View style={styles.title}>
                <Text>{courseName}</Text>
            </View>
            <View style={styles.colors}>
                <FlatList
                    data={firstCourseRatings}
                    keyExtractor={(item, index) => index.toString()}
                    renderItem={renderItem}
                    numColumns={3}
                    centerContent={true}
                />
            </View>
        </TouchableOpacity>
    );
}



const renderStyles = StyleSheet.create({
    circleText:{
        color: colors.primary,
        textAlign: "center",
        padding: 5,
        overflow: "hidden",
    },
    circle: {
        width: 100,
        height: 100,
        borderRadius: 40,
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        borderWidth: 5,
        margin: 5,
        borderColor: colors.primary,
        backgroundColor: colors.white,
    },
    gender: {
        textAlign: 'center',
        fontSize: 15,
        color: colors.primary,
        backgroundColor: colors.white,
    },
    number: {
        textAlign: 'center',
        marginTop: 5,
        fontSize: 10,
        color: colors.primary,
        backgroundColor: colors.white,
    }
});


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.primary,
    },
    title: {
        padding: 10,
        backgroundColor: colors.primary,
        borderBottomWidth: 1,
        borderBottomColor: colors.primary,
        textAlign: 'center',
        fontSize: 25,
    },
    colors: {
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
    },

});
