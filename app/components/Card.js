import React from 'react';
import { View, StyleSheet, Image, Text } from 'react-native';

function Card({ title, subTitle, image }) {
    return (
        <View style={styles.card}>
            <Image style={styles.image} source={image} />
            <View style={styles.detailsContainer}>
                <Text>{title}</Text>
                <Text>{subTitle}</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    card: {
        borderRadius: 15,
        backgroundColor: 'white',
        marginBottom: 20,
        overflow: 'hidden'
    },
    image: {
        width: '100%',
        height: 200
    },
    detailsContainer: {
        alignItems: 'center',
        padding: 20
    }
});

export default Card;