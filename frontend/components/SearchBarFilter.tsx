import React, { useState, useEffect, useContext, useReducer } from 'react';
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

    const { state, dispatch } = useContext(SearchQueryContext);

    useEffect(() => {
        async function getFilter(q: string) {
            console.log(`useEffect called in SearchBarFilter setFilters(${state.query})`);
            console.log();
            try{
                const filters = await fetchFilter(q);
                dispatch({type:'setFilter', payload:filters});
            } catch (e) {
                console.log(e);
            } finally {

            }
        }
        getFilter(state.query);
    }, [state.query]);


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
                data={state.filter}
                renderItem={renderItem}
                ItemSeparatorComponent={ItemDivider}
                keyExtractor={(item, index) => index.toString()}
                numColumns={1}
                extraData={state.filter}
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
        fontSize: 25,
        fontWeight: 'bold',
        color: '#000'
    }
});



