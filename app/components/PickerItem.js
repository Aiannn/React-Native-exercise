import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

function PickerItem(props) {
    return (
        <TouchableOpacity>
            <Text>{props.label}</Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    container: {}
});

export default PickerItem;