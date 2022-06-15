/**
 * @author Nick Donfris
 * 
 * @npatanjo style this for me
 */ 

import React, {useState} from 'react';
import { View, StyleSheet, FlatList, Text, ListRenderItem, TouchableOpacity, Modal } from 'react-native';
//import searchMode from 'types/SearchMode';

interface Props {
    currentSearch?: string;
    visible: boolean;
    setVisible: (visible: boolean) => void;
};

function Sepeartor() {
    return (
            <View style={styles.separator} />
    );
}

function Item({item, setVisible}: {item: string, setVisible: (bool: boolean) => void}) {
    const [ isSelected, setIsSelected ] = useState(false);
        return (
            <TouchableOpacity
                style={styles.item}
                onPress={() => {{
                    if (item === 'close') {
                        setVisible(false);
                    } else {
                        setVisible(true);
                    }
                    setIsSelected(!isSelected);

                }}}
            >
                {/* change color on select? */}
                <View style={touchStyles(isSelected).circle}></View>
                <Text style={styles.itemText}>{item}</Text>
            </TouchableOpacity>
        );
}

export default function RefineSearch({currentSearch, visible, setVisible} : Props) {

    const [modes, setModes] = useState(['all', 'color', 'course rating', 'bogey rating', 'slope rating', 'front 9', 'back 9', 'close']);

    const renderItem: ListRenderItem<string> = ({ item }) => {
        return (
            <Item item={item} setVisible={setVisible} />
        );
    };

    return (
        <View style={styles.container}>
            <Modal
                animationType="slide"
                transparent={false}
                visible={visible}
                onRequestClose={() => setVisible}
                style={styles.modal}
            >
                <Text style={styles.header}>Refine Search</Text>
                <Sepeartor />
                <Text style={styles.subheader}>Search Modes</Text>
                <View>
                    <FlatList 
                        data={modes}
                        renderItem={renderItem}
                        keyExtractor={(item,index) => index.toString()}
                    />
                </View>
            </Modal>
        </View>
    );
};


const touchStyles = (focused: boolean) => StyleSheet.create({
    circle: {
        width: 20,
        height: 20,
        borderRadius: 10,
        backgroundColor: focused ? 'black' : '#fff',
        marginRight: 10,
    },
});

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        width: '80%',
        height: '80%',
        backgroundColor: '#000',
    },
    modal: {
        flex: 1,
        width: "70%",
        height: "40%",
        backgroundColor: '#000',
        alignItems: 'center',
        justifyContent: 'center',
    },
    separator: {
        height: 1,
        marginTop: 20,
        marginBottom: 20,
        color: '#000',
        backgroundColor: '#000',
    },
    circle: {
        width: 20,
        height: 20,
        borderRadius: 10,
        backgroundColor: '#000',
        marginRight: 10,
    },
    header: {
        fontSize: 20,
        marginTop: 50,
        alignSelf: 'center',
        fontWeight: 'bold',
        marginBottom: 10,
    },
    subheader: {
        fontSize: 16,
        fontWeight: 'bold',
        alignSelf: 'center',
        marginBottom: 10,
    },
    item: {
        backgroundColor: '#f9c2ff',
        flexDirection: 'row',
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
    },
    itemText: {
        fontSize: 18,
    },
});
