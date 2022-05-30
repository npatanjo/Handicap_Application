import React from "react";
import { View, StyleSheet, TextInput } from "react-native";
import colors from 'utilities/Colors';

interface Props {
    query: string;
    setQuery: (arg0:string) => void;
    onSearch: () => void;
    placeholder?: string;
}

/**
 * SearchBar 
 *
 * NOTE: it is likely that onSearch will need to be updated once we get further on the api
 *
 * @param {string} query - string that is changed during typing
 * @param {(string) => void} setQuery - setter variable for the query prop
 * @param {() => void} onSearch - async function to backend 
 * @param {string} placeholder - initial query before user input
 * @returns {JSX.Element} Generic SearchBar 
 */
export default function SearchBar({query, setQuery, onSearch, placeholder}: Props) {

    return (
        <View style={styles.wrapperContainer}>
            <View style={styles.barContainer}>
                <TextInput 
                    style={styles.textContainer}
                    value={query}
                    onChangeText={setQuery}
                    onSubmitEditing={onSearch}
                    placeholder={placeholder}
                    placeholderTextColor={"#fff"}
                    returnKeyType={"search"}
                />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    wrapperContainer: {
        flex: 1,
        width: '100%',
        height: '100%',
        alignItems: 'center',
    },
    barContainer: {
        justifyContent: 'space-around',
        textAlign: 'center',
        backgroundColor: colors.primary,
        color: colors.white,
        width: '80%',
        paddingTop: '15%',
        marginTop: '15%',
        borderRadius: 15,
        fontSize: 15,
    },
    textContainer: {
        color: colors.white,
    }
});
