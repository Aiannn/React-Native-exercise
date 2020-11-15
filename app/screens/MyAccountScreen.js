import React from 'react';
import { View, StyleSheet, Image, Text } from 'react-native';

import { MaterialCommunityIcons } from '@expo/vector-icons'

function MyAccountScreen(props) {
    return (
        <View style={styles.container}>
            <View style={styles.first}>
                <Image source={require('../assets/mosh.jpg')} style={styles.image} />
                <View>
                    <Text>Mosh Hamedani</Text>
                    <Text>email@email.ru</Text>
                </View>
            </View>
            <View style={styles.second}>
                <View style={styles.innerFirst}>
                    <View style={styles.logoInnerFirst}>
                        <MaterialCommunityIcons name='format-list-bulleted' size={30} />
                    </View>
                    <Text>My Listings</Text>
                </View>
                <View style={styles.innerSecond}>
                    <View style={styles.logoInnerSecond}>
                        <MaterialCommunityIcons name='email' size={30} />
                    </View>
                    <Text>My Messages</Text>
                </View>
            </View>
            <View style={styles.third}>
                <View style={styles.logoThird}>
                    <MaterialCommunityIcons name='logout' size={30} />
                </View>
                <Text>LogOut</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'beige',
        flex: 1
    },
    image: {
        width: 80,
        height: 80,
        borderRadius: 40,
        marginRight: 10
    },
    first: {
        width: '100%',
        height: 90,
        backgroundColor: 'white',
        marginVertical: 70,
        flexDirection: 'row',
        padding: 5
    },
    third: {
        width: '100%',
        height: 70,
        backgroundColor: 'white',
        marginVertical: 50,
        alignItems: 'center',
        paddingLeft: 20,
        flexDirection: 'row'
    },
    innerFirst: {
        width: '100%',
        height: 70,
        backgroundColor: 'white',
        marginVertical: 10,
        alignItems: 'center',
        paddingLeft: 20,
        flexDirection: 'row'
    },
    innerSecond: {
        width: '100%',
        height: 70,
        backgroundColor: 'white',
        alignItems: 'center',
        paddingLeft: 20,
        flexDirection: 'row'
    },
    logoThird: {
        width: 50,
        height: 50,
        backgroundColor: 'red',
        borderRadius: 25,
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 20
    },
    logoInnerSecond: {
        width: 50,
        height: 50,
        backgroundColor: 'green',
        borderRadius: 25,
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 20
    },
    logoInnerFirst: {
        width: 50,
        height: 50,
        backgroundColor: 'yellow',
        borderRadius: 25,
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 20
    }
});

export default MyAccountScreen;