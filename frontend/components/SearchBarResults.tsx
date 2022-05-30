import React, { useState } from "react";
import {
  View,
  StyleSheet,
  FlatList,
  Text,
} from "react-native";
import colors from "utilities/Colors";
import { GolfCourse } from "utilities/GolfCourse";
import PopupDebugButton from "./PopupDebugButton";

interface Props {
    loading: boolean;
    results: GolfCourse[];
  //onPress?: () => void;
}

interface ItemProps {
    item: GolfCourse;
}

export default function SearchBarResults({ loading, results }: Props) {

    // const [courses, setCourses] = useState<GolfCourse[]>([]);

    const renderItem = ({ item } : ItemProps ) => {
        return (
            <View style={styles.item}>
                <PopupDebugButton text={item.course_name} />
            </View>
        );

    }

    return ( 
        <View style={styles.container}>
            {
                loading 
                    ? <Text style={styles.loading}>Loading...</Text> 
                    : <FlatList
                        data={results}
                        keyExtractor={(item, index) => index.toString()}
                        renderItem={renderItem}
                        numColumns={1}
                        style={styles.list}
                        extraData={results}
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
    },
    item: {
        paddingVertical: 10,
    },
    loading: {
        backgroundColor: "#fff",
        color: colors.primary,
        fontSize: 20,
        textAlign: "center",
        alignItems: "center",
        justifyContent: "center",
    }

});
