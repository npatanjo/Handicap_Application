import React, { useState, useEffect, useContext } from 'react';
import { FlatList, Text, View, TouchableOpacity, StyleSheet, Keyboard } from 'react-native';
import {SearchQueryContext} from 'contexts/SearchContext';
import {fetchFilter} from 'functions/SearchHelpers';



interface Props {
    onPress: (filter: string) => void;
}


interface ItemProps {
    item: string;
}


export default function SearchBarFilter({onPress}: Props) {

    const { query, setQuery } = useContext(SearchQueryContext);
    const [filters, setFilters] = useState([] as string[]);

    useEffect(() => {
        async function getFilter(query: string) {
            console.log(`useEffect called in SearchBarFilter setFilters(${query})`);
            console.log();
            await fetchFilter(query)
            .then(( res : string[] ) => setFilters(res))
            .catch(err => console.log(err));
        }
        getFilter(query);
    }, [query]);


    const ItemDivider = () => {
        return <View style={{height: 1, backgroundColor: '#e0e0e0'}} />;
    }

    const renderItem = ({ item } : ItemProps) => {
        return (
            <TouchableOpacity
                style={styles.item}
                onPress={() => {
                    onPress(item);
                }}>
                <Text style={styles.text}>{item}</Text>
            </TouchableOpacity>
        );
    }

    return (
        <View style={styles.container}>
            <FlatList
                data={filters}
                renderItem={renderItem}
                ItemSeparatorComponent={ItemDivider}
                keyExtractor={(item, index) => index.toString()}
                numColumns={1}
                extraData={query}
                keyboardShouldPersistTaps={'handled'}
            />
        </View>
    );

}





const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        height: '100%',
    },
    item: {
        width: '100%',
        padding: 10,
        backgroundColor: '#fff',
    },
    text: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#000'
    }
});




