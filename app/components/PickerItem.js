import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { TouchableOpacity } from 'react-native';

function PickerItem(props) {
    return (
        <TouchableOpacity onPress={props.onPress}>
            <Text style={styles.text}>{props.label}</Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    text: {
        padding: 20,
        // backgroundColor: 'red'
    }
});

export default PickerItem;