import React, { useMemo, useState } from "react";
import { View, StyleSheet, Keyboard } from "react-native";
import SearchBar from "components/SearchBar";
import { SearchQueryContext } from "contexts/SearchContext";
import SearchBarResults from "components/SearchBarResults";
import BackingFile from "../BACKING_FILE.json";
import {GolfCourse} from "utilities/GolfCourse";
import colors from "utilities/Colors";
import SearchBarFilter from "components/SearchBarFilter";
import {fetchResults} from "utilities/functions/SearchHelpers";

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

    //const [filter, setFilter] = useState(source);

    const [query, setQuery] = useState("");

    const [results, setResults] = useState<GolfCourse[]>([]);

    const [loading, setLoading] = useState(false);
    const [showResults, setShowResults] = useState(false);


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

    const parseFile = async () : Promise<GolfCourse[]> => {
        Keyboard.dismiss();
        let courses : GolfCourse[] = [];
        try {
            for (var i in BackingFile) {
                const course: GolfCourse = BackingFile[i];
                if (course !== undefined || course !== null) {
                    courses.push(course);
                }
            }
        } catch (e) {
            console.log(e);
        } finally {
            return courses;
        }
    };

    const onSearch = async () : Promise<void> => {
        if (query.trim() === "") {
            setShowResults(false);
            return;
        }
        setLoading(true);
        try {
            let courses: GolfCourse[] = [];

            setResults([]);
            courses = await parseFile();

            const foundCourses : GolfCourse[] = await fetchResults(query);
            setResults(foundCourses);
            //courses.forEach(course => {
            //    if (course.courseName.toLowerCase().includes(query.toLowerCase())) {
            //        setResults( [course] );
            //    }
            //});
        } catch (e) {
            console.log(e);
        } finally {
            setLoading(false);
            setShowResults(true);
        }
    };

    const onFilterSelected = (filter: string) : void => {
        setQuery(filter);
        onSearch();
        setShowResults(true);
        Keyboard.dismiss();
    }

    return (
        <View style={styles.container}>
            <SearchQueryContext.Provider value={queryValue}>
                <View style={styles.topContainer}>
                    <SearchBar
                        onSearch={onSearch}
                        onFocus={() => { setShowResults(false) }}
                        placeholder={"Search for a Course"}
                    />
                </View>
                <View style={styles.results}>
                    {/* HERE IS WHERE THIS NEEDS EDITING
                      * issue with the search bar SELECTION,
                      * loading is slow between selections and result renders
                      *   • useMemo ? 
                      *   • update the searchBarFilter with the results
                      *   • LOADING SPINNER to fix this?
                      */}
                    {showResults 
                        ? <SearchBarResults results={results} loading={loading} />
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

