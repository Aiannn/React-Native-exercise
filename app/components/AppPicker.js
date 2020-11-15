import React, { useState } from 'react';
import { View, StyleSheet, Platform, Modal, Button, SafeAreaView, FlatList } from 'react-native';

import { MaterialCommunityIcons } from '@expo/vector-icons'
import { TextInput, TouchableWithoutFeedback } from 'react-native-gesture-handler';


import PickerItem from './PickerItem'
import defaultStyles from '../config/styles'

function AppPicker(props) {

    const [modalVisible, setModalVisible] = useState(false)

    return (
        <React.Fragment>
            <TouchableWithoutFeedback onPress={() => setModalVisible(!modalVisible)}>
                <View style={styles.container}>
                    <MaterialCommunityIcons name={props.icon} size={20} color='blue' style={styles.icon} />
                    <TextInput
                        style={styles.text}
                        placeholder={props.placeholder}
                    />
                    <MaterialCommunityIcons name='chevron-down' size={20} color='blue' />
                </View>
            </TouchableWithoutFeedback>
            <Modal
                visible={modalVisible}
                animationType='slide'>
                <SafeAreaView>
                    <Button title='Close' onPress={() => setModalVisible(!modalVisible)}></Button>
                    <FlatList
                        data={props.items}
                        keyExtractor={(item) => item.value.toString()}
                        renderItem={({ item }) =>
                            <PickerItem label={item.label} />
                        }
                    />
                </SafeAreaView>
            </Modal>
        </React.Fragment>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        backgroundColor: 'grey',
        borderRadius: 25,
        width: '100%',
        padding: 15,
        marginVertical: 10
    },
    icon: {
        marginRight: 10
    },
    text: {
        flex: 1
    },
    textInput: {
        fontSize: 18,
        fontFamily: Platform.OS === 'android' ? 'Roboto' : 'Avenir'
    }
});

export default AppPicker;