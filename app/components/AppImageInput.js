import React from 'react';
import { View, StyleSheet, SafeAreaView } from 'react-native';

import * as ImagePicker from 'expo-image-picker'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import { TouchableOpacity } from 'react-native-gesture-handler';

function AppImageInput(props) {
    return (
        <SafeAreaView>
            <TouchableOpacity onPress={props.onPress}>
                <View style={styles.container}>
                    <MaterialCommunityIcons name='camera' size={25} />
                </View>
            </TouchableOpacity>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        width: 50,
        height: 50,
        margin: 20
    }
});

export default AppImageInput;