import React from "react";
import { View, StyleSheet, TextInput } from "react-native";
import colors from 'utilities/Colors';

interface Props {
    query: string;
    setQuery: () => void;
    onSearch: () => void;
    placeholder: string;
}

export default function SearchBar({ placeholder }: Props) {
  const [text, setText] = useState("");

/**
 * SearchBar 
 *
 * NOTE: it is likely that onSearch will need to be updated once we get further on the api
 *
 * @param {string} query - string that is changed during typing
 * @param {() => void} setQuery - setter variable for the query prop
 * @param {() => void} onSearch - async function to backend 
 * @param {string} placeholder - initial query before user input
 * @returns {JSX.Element} Generic SearchBar 
 */
export default function SearchBar({query, setQuery, onSearch, placeholder}: Props) {

    return (
        <View style={ styles.wrapperContainer }>
            <View style={styles.barContainer}>
                <TextInput 
                    style={styles.textContainer}
                    value={query}
                    onChangeText={setQuery}
                    onSubmitEditing={onSearch}
                    placeholder={placeholder}
                />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    wrapperContainer: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
    },
    barContainer: {
        width: '90%',
        height: '8%',
        backgroundColor: colors.primary,
    },
    textContainer: {
        color: colors.white,
        paddingLeft: 10,
        paddingRight: 10,
        justifyContent: "space-around",
        textAlign: "center",
    }
});
