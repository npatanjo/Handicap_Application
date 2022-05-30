import React, { useMemo, useState } from "react";
import { View, StyleSheet, Keyboard } from "react-native";
import SearchBar from "components/SearchBar";
import { SearchQueryContext } from "utilities/SearchContext";

// MOVE STATE INTO HERE
// export const SearchContext = React.createContext(null);

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
export default function SearchCourseScreen(){
    const [source] = useState(["tilden", "pebble beach", "augusta"]); // later will become database

    const [filter, setFilter] = useState(source);

    const [query, setQuery] = useState("Search for a course");

    const [results, setResults] = useState([]);

    const [searching, setSearching] = useState(false);


    const queryValue = useMemo(
        () => ({query, setQuery}),
        [query]
    );

    //const filterValues = useMemo(
    //    () => ({filter, setFilter}),
    //    [filter]
    //);

    //const resultValues = useMemo(
    //    () => ({results, setResults}),
    //    [results]
    //);

    const onSearch = () => {
        setSearching(!searching);
        Keyboard.dismiss();
        try {
        } catch (e) {
            console.log(e);
        } finally {
            setSearching(false);
        }
    };

    return (
        <View style={styles.container}>
            <SearchQueryContext.Provider value={queryValue}>
                <SearchBar
                    onSearch={onSearch}
                    placeholder={"Search for a Course"}
                />
            </SearchQueryContext.Provider>
            {/* 
            <SearchQueryContext.Provider value={filteredValue}>
                     <ResultList /> 
            </SearchQueryContext.Provider> 
            */}
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

