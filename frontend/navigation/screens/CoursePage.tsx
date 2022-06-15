import React, {useContext} from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import {SearchQueryContext} from "utils/contexts/SearchContext";
import {CourseRating, GolfCourse} from "utils/GolfCourse";


interface Props {
    courseName: string;
    courseRatings: CourseRating[];
}


export default function CoursePage({courseName, courseRatings}: Props){

    const { searchState, searchDispatch } = useContext(SearchQueryContext);

    return ( 
        <View style={styles.container}>
            <Text style={styles.titleText}>{searchState.selected.courseName}</Text>
        </View>
    );
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: 50,
    },
    titleText: {
        fontSize: 30,
        fontWeight: 'bold',
        color: '#000',
    },
    rating: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
});
