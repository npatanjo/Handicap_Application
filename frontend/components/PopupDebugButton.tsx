import React, {useState} from "react";
import { Modal, Text, TouchableOpacity, View, StyleSheet } from "react-native";
import colors from "utils/Colors";

interface AProps {
    visible: boolean;
    onPress: () => void;
    text: string;
}

function DebugModal({ visible, onPress, text }: AProps){
    return (
        <View style={styles.centered}>
            <Modal
                animationType={"fade"}
                transparent={true}
                visible={visible}
                style={styles.centered}
            >
                <View style={styles.modal}>
                    <TouchableOpacity onPress={onPress} style={styles.modalButton}>
                        <Text style={styles.text}>{text}</Text>
                        <View style={styles.innerButton}>
                            <Text style={styles.text}>Press to Close</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </Modal>
        </View>
    );

}

interface BProps {
    onPress: () => void;
    text: string;
}

function DebugButton({onPress, text}: BProps) {
    return (
        <View style={styles.button}>
            <TouchableOpacity onPress={onPress} > 
                <Text style={styles.text}>{text}</Text>
            </TouchableOpacity>
        </View>
    )
}


interface Props {
    text: string;
}

export default function PopupDebugButton({text}: Props) {

    const [visible, setVisible] = useState(false);

    const toggleModal = () => {
        setVisible(!visible);
    }

    return (
        <View style={styles.container}>
            {visible 
                ? <DebugModal visible={visible} onPress={toggleModal} text={text} />
                : <DebugButton onPress={toggleModal} text={text} /> }       
        </View>
    );
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
    },
    centered: {
    },
    modal: {
        color: colors.white,
        marginTop: "50%",
        height: "50%",
        width: 250,
        justifyContent: "center",
        alignItems: "center",
        alignSelf: "center",
    },
    text: {
        color: "white",
        fontWeight: "bold",
        fontSize: 20,
        padding: 10,
        textAlign: "center",
        alignSelf: "center",
        justifyContent: "center",
    },
    innerButton: {
        backgroundColor: "lightblue",
        padding: 20,
        borderRadius: 10,
    },
    modalButton: {
        backgroundColor: colors.primary,
        width: 300,
        height: 200,
        borderRadius: 50,
        textAlign: "center",
        alignItems: "center",
        justifyContent: "space-evenly",
    },
    button: {
        backgroundColor: colors.primary,
        width: "70%",
        height: "100%",
        marginTop: 20,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 20,
        borderWidth: 5,
        borderColor: "lightblue",
    }
});
