import React from 'react';
import { View, StyleSheet, Image, TouchableOpacity } from 'react-native';

import { MaterialCommunityIcons } from '@expo/vector-icons'

function ViewImageScreen(props) {
    return (
        <View style={styles.container}>
            <View style={styles.closeIcon}>
                <TouchableOpacity onPress={() => alert('Pressed')}>
                    <MaterialCommunityIcons name='close' size={30} />
                </TouchableOpacity>
            </View>
            <View style={styles.deleteIcon}>
                <MaterialCommunityIcons name='delete' size={30} />
            </View>
            <Image style={styles.image} source={require('../assets/chair.jpg')} />
        </View>
    );
}

const styles = StyleSheet.create({
    closeIcon: {
        position: 'absolute',
        top: 40,
        left: 30
    },
    deleteIcon: {
        position: 'absolute',
        top: 40,
        right: 30
    },
    image: {
        width: '100%',
        height: '100%',
        resizeMode: 'contain'
    }
});

export default ViewImageScreen;