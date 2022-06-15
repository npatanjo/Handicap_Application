import React, { createContext, useContext, useMemo, useReducer, useState } from "react";
import { View, StyleSheet, Keyboard } from "react-native";
import SearchBar from "components/SearchBar";
import { SearchQueryContext } from "contexts/SearchContext";
import SearchBarResults from "components/SearchBarResults";
import {GolfCourse} from "utils/GolfCourse";
import SearchBarFilter from "components/SearchBarFilter";
import {fetchResults} from "utils/functions/SearchHelpers";
import searchReducer from "utils/reducers/SearchReducer";

// MOVE STATE INTO HERE
// export const SearchContext = React.createContext(null);

//const SearchQueryScreen = createContext({});

/**
* SearchCourseScreen - Contains a SearchBar, and A ResultList. API calls will
* be in the utilities class.
*
* HEADS UP:
*    • I will probably try to pass the props down through useContext()
*    • Also we should probably use a JSX component like FlatList instead of array.filter()
*      to avoid undefined objects
*    • Error with coursePage courseName
*
* @param {Props} props - N/A (potential styling?)
* @returns {React.JSX}
*/
export default function SearchScreen(){

    const {searchState, searchDispatch} = useContext(SearchQueryContext);

    const onSearch = async () : Promise<void> => {
        if (searchState.query.trim() === "") {
            searchDispatch({type: "setFocused", payload: false});
            return;
        }
        try {
            const foundCourses : GolfCourse[] = await fetchResults(searchState.query);
            searchDispatch({type: "setResults", payload: foundCourses});
        } catch (e) {
            console.log(e);
        } finally {
            searchDispatch({type: "setFocused", payload: false});
        }
    };

    const onFilterSelected = (selected: string) : void => {
        searchDispatch({type: "setQuery", payload: selected});
        onSearch();
        searchDispatch({type: "setFocused", payload: false});
    }

    return (
        <View style={styles.container}>
                <View style={styles.topContainer}>
                    <SearchBar
                        onSearch={onSearch}
                        placeholder={"Search for a Course"}
                        icon={true}
                    />
                </View>
                <View style={styles.results}>
                    {!searchState.focused 
                        ? <SearchBarResults />
                        : <SearchBarFilter onPress={onFilterSelected} /> 
                    }
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
        height: '15%',
        width: "100%",
        color: '#fff',
    },
    results: {
        width: "90%",
        height: "80%",
        justifyContent: "center",
        textAlign: "center",
    }
});

