import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import {CourseRating} from "utilities/GolfCourse";


interface Props {
    courseName: string;
    courseRatings: CourseRating[];
    firstCourseRatings: CourseRating[];
    image?: string; // just incase later
}

export default function CoursePage({courseName, courseRatings, firstCourseRatings, image}: Props){

    return ( 
        <View style={styles.container}>
            <View style={styles.title}>
                <Text style={styles.titleText}>{courseName}</Text>
            </View>

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
