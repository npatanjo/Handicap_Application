import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  ListRenderItem,
} from "react-native";
import colors from "utilities/Colors";
import { CourseRating } from "utilities/GolfCourse";


interface Props {
    courseName: string;
    courseRatings: CourseRating[];
}

export default function SearchBarResultTile({courseName, courseRatings}: Props) {

    const renderItem : ListRenderItem<CourseRating> = ({ item }) => {
        return (
            <View style={renderStyles.circle}>
                {/* do something with color
                  * 
                  * <Text>{item.color}</Text>
                  * 
                  */}
                <Text style={renderStyles.gender}>{item.gender}</Text>
                <Text style={renderStyles.number}>{item.par}</Text>
            </View>
        );
    }

    return (
        <TouchableOpacity style={styles.container}>
            <View style={styles.title}>
                <Text>{courseName}</Text>
            </View>
            <View style={styles.colors}>
                <FlatList
                    data={courseRatings}
                    keyExtractor={(item, index) => index.toString()}
                    renderItem={renderItem}
                    numColumns={3}
                />
            </View>
        </TouchableOpacity>
    );
}



const renderStyles = StyleSheet.create({
    circle: {
        width: 50,
        height: 50,
        borderRadius: 25,
        justifyContent: "center",
        alignItems: "center",
        borderWidth: 5,
        borderColor: colors.primary,
        backgroundColor: colors.white,
    },
    gender: {
        textAlign: 'center',
        justifySelf: 'center',
        fontSize: 15,
        color: colors.primary,
        backgroundColor: colors.white,
    },
    number: {
        textAlign: 'center',
        marginTop: 5,
        fontSize: 5,
        color: colors.primary,
        backgroundColor: colors.white,
    },
});


const styles = StyleSheet.create({
    container: {
        flex: 1,
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
    },

});
