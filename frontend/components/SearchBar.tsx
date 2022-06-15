import React, { useContext, useEffect, useState } from 'react';
import { View, StyleSheet, TextInput, TouchableOpacity, Keyboard } from "react-native";
import colors from 'utils/Colors';
import {SearchQueryContext} from 'contexts/SearchContext';
import { EvilIcons } from '@expo/vector-icons'; 
import { MaterialIcons } from '@expo/vector-icons';
import RefineSearch from './RefineSearch';

interface Props {
    onSearch: () => void;
    placeholder: string;
    icon?: boolean;
}

interface IconProps {
    hasFocus: boolean;
    setVisible: (visible: boolean) => void;
}

function RightIcon({ hasFocus, setVisible }: IconProps) {
    const {searchState, searchDispatch} = useContext(SearchQueryContext);

    if (hasFocus) {
        return (
            <TouchableOpacity 
                style={styles.rightIcon}
                onPress={() => {
                    searchDispatch({type: 'setFocused', payload: false});
                    searchDispatch({type: 'setQuery', payload: ''});
                }}
            >
                <EvilIcons name="close" size={24} color={ colors.white } />
            </TouchableOpacity>
        );
    } else {
        return (
            <TouchableOpacity 
                style={styles.rightIcon}
                onPress={() => setVisible(true)}
            >
                <MaterialIcons name={"sports-golf"} size={24} color={colors.white} />
            </TouchableOpacity>
        );
    }
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
export default function SearchBar({onSearch, placeholder, icon}: Props) {

    const {searchState, searchDispatch} = useContext(SearchQueryContext);
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        if (searchState.focused == false) {
            Keyboard.dismiss();
        }
    }, [ searchState.focused ]);
    
    const onChangeText = (text: string) => {
        searchDispatch({type: 'setQuery', payload: text});
    }

    const onFocus = () => {
        searchDispatch({type: 'setFocused', payload: true});
    }

    return (
        <View style={styles.wrapperContainer}>
            <View style={styles.innerWrapperContainer}>
                <View style={styles.barContainer}>
                    <TextInput 
                        style={styles.textContainer}
                        value={searchState.query}
                        onChangeText={onChangeText}
                        onSubmitEditing={onSearch}
                        onFocus={onFocus}
                        disableFullscreenUI={true}
                        clearTextOnFocus={true}
                        placeholder={placeholder}
                        placeholderTextColor={colors.white}
                        returnKeyType={"search"}
                        selectTextOnFocus={true}
                    />
                    {icon && <RightIcon hasFocus={searchState.focused} setVisible={() => setVisible(true)} />}
                </View>
                <View style={styles.refineContainer}>
                    <RefineSearch visible={visible} setVisible={setVisible} currentSearch={'all'}/>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    wrapperContainer: {
        flex: 1,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    innerWrapperContainer: {
        width: '90%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    barContainer: {
        textAlign: 'center',
        backgroundColor: colors.primary,
        color: colors.white,
        width: '100%',
        padding: '5%',
        marginTop: '10%',
        borderRadius: 15,
        fontSize: 15,
        flexDirection: 'row',
        zIndex: 1,
    },
    textContainer: {
        color: colors.white,
        position: 'relative',
        width: '90%',
        alignSelf: 'flex-start',
        zIndex: 1,
    },
    rightIcon: {
        textAlign: 'center',
        position: 'relative',
        alignSelf: 'flex-end',
        width: '8%',
        right: -10,
    },
    refineContainer: {
        width: '50%',
        height: '50%',
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
    }
});

