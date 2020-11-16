import React from 'react';
import { View, StyleSheet, Image, Text, TouchableOpacity, TouchableHighlight } from 'react-native';

import { MaterialCommunityIcons } from '@expo/vector-icons'

import Swipeable from 'react-native-gesture-handler/Swipeable';

function ListItem(props) {
    return (
        <Swipeable renderRightActions={props.renderRightActions}>
            <TouchableHighlight
                underlayColor='grey'
                onPress={props.onPress}>
                <View style={styles.container}>
                    <Image source={props.image} style={styles.image} />
                    <View style={styles.info}>
                        <Text>{props.title}</Text>
                        <Text>{props.subTitle}</Text>
                    </View>
                    {/* <MaterialCommunityIcons name='trash-can' size={70} /> */}
                </View>
            </TouchableHighlight>
        </Swipeable>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        marginVertical: 20
    },
    info: {
        padding: 10
    },
    image: {
        width: '20%',
        height: 70,
        borderRadius: 35
    }
});

export default ListItem;