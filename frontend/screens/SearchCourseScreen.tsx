import React, { useState } from "react";
import { View, StyleSheet, TextInput } from "react-native";
import SearchBar from "components/SearchBar";

interface Props {}

/**
* SearchCourseScreen - Contains a SearchBar, and A ResultList. API calls will
* be in the utilities class.
*
* HEADS UP:
*    • I will probably try to pass the props down through useContext()
*    • Also we should probably use a JSX component like FlatList instead of array.filter()
*      to avoid undefined objects
*
* @param {Props} props - N/A (potential styling?)
* @returns {React.JSX}
*/
const SearchCourseScreen = ({}: Props) => {
    const [source] = useState(["tilden", "pebble beach", "augusta"]); // later will become database

    const [filtered, setFiltered] = useState(source);

    const [query, setQuery] = useState("");
    const [searching, setSearching] = useState(true);


    const onSearch = () => {
    };

    return (
        <View style={styles.container}>
            <View style={styles.topContainer}>
                <SearchBar
                    query={query}
                    setQuery={text => setQuery(text)}
                    onSearch={onSearch}
                    placeholder={"Search"}
                />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
    },
    topContainer: {
        height: '10%',
        width: "100%",
        color: '#fff',
    }
});

export default SearchCourseScreen;
