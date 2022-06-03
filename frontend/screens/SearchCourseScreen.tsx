import React, { createContext, useContext, useMemo, useReducer, useState } from "react";
import { View, StyleSheet, Keyboard } from "react-native";
import SearchBar from "components/SearchBar";
import { SearchQueryContext } from "contexts/SearchContext";
import SearchBarResults from "components/SearchBarResults";
import {GolfCourse} from "utilities/GolfCourse";
import SearchBarFilter from "components/SearchBarFilter";
import {fetchResults} from "utilities/functions/SearchHelpers";
import searchReducer from "utilities/reducers/SearchReducer";

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
*
* @param {Props} props - N/A (potential styling?)
* @returns {React.JSX}
*/
export default function SearchCourseScreen(){

    const searchStates = useContext(SearchQueryContext);

    const [state, dispatch] = useReducer(searchReducer, searchStates as never);

    const contextValue = useMemo(() => ({state, dispatch}), [state, dispatch]);

    const onSearch = async () : Promise<void> => {
        if (state.query.trim() === "") {
            dispatch({type: "setFocused", payload: false});
            return;
        }
        try {
            const foundCourses : GolfCourse[] = await fetchResults(state.query);
            dispatch({type: "setResults", payload: foundCourses});
        } catch (e) {
            console.log(e);
        } finally {
            dispatch({type: "setFocused", payload: false});
        }
    };

    const onFilterSelected = (selected: string) : void => {
        dispatch({type: "setQuery", payload: selected});
        onSearch();
        dispatch({type: "setFocused", payload: false});
    }

    return (
        <View style={styles.container}>
            <SearchQueryContext.Provider value={contextValue}>
                <View style={styles.topContainer}>
                    <SearchBar
                        onSearch={onSearch}
                        placeholder={"Search for a Course"}
                        icon={true}
                    />
                </View>
                <View style={styles.results}>
                    {!state.focused 
                        ? <SearchBarResults />
                        : <SearchBarFilter onPress={onFilterSelected} /> 
                    }
                </View>
            </SearchQueryContext.Provider>
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

