import React from 'react';
import { View, StyleSheet, Text } from 'react-native';

function ErrorMessage(props) {

    if (!props.visible || !props.error) return null

    return (
        <Text style={styles.error}>{props.error}</Text>
    );
}

const styles = StyleSheet.create({
    error: {
        color: 'red',
        fontFamily: 'Avenir'
    }
});

export default ErrorMessage;