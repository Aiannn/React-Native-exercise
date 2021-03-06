import React from 'react';
import { View, StyleSheet, Platform } from 'react-native';

import { MaterialCommunityIcons } from '@expo/vector-icons'
import { TextInput } from 'react-native-gesture-handler';

import defaultStyles from '../config/styles'

function AppTextInput(props) {
    return (
        <View style={styles.container}>
            <MaterialCommunityIcons name={props.icon} size={20} color='black' style={styles.icon} />
            <TextInput
                onChangeText={props.onChangeText}
                placeholder={props.placeholder}
                style={defaultStyles.text}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        backgroundColor: 'beige',
        borderRadius: 25,
        width: '100%',
        padding: 15,
        marginVertical: 10
    },
    icon: {
        marginRight: 10
    },
    textInput: {
        fontSize: 18,
        fontFamily: Platform.OS === 'android' ? 'Roboto' : 'Avenir'
    }
});

export default AppTextInput;