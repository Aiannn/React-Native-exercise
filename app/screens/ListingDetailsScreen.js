import React from 'react';
import { View, StyleSheet, Image, Text, SafeAreaView } from 'react-native';

import ListItem from '../components/ListItem'

function ListingDetailsScreen(props) {
    return (
        <View style={styles.container}>
            <Image style={styles.image} source={props.image} />
            <View style={styles.textContainer}>
                <Text style={styles.header}>{props.title}</Text>
                <Text>{props.subtitle}</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        alignItems: 'center',
        flex: 1,
        backgroundColor: 'white',
        marginBottom: 20,
        borderRadius: 30,
        overflow: 'hidden'
    },
    image: {
        width: '80%',
        height: 300
    },
    header: {
        fontSize: 24,
        fontWeight: "500"
    },
    textContainer: {
        padding: 20
    }
});

export default ListingDetailsScreen;