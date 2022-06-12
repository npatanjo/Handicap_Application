import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import {CourseRating, GolfCourse} from "utilities/GolfCourse";


interface Props {
    courseName: string;
    courseRatings: CourseRating[];
}


export default function CoursePage({courseName, courseRatings}: Props){
    console.log("CoursePage: " + courseName);

    return ( 
        <View style={styles.container}>
            <Text style={styles.titleText}>{courseName}</Text>
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
        backgroundColor: "blue",
    },
    rating: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
});
