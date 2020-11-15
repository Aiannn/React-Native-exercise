import React from 'react';
import { View, StyleSheet, ImageBackground, Image, Text, Button } from 'react-native';

import AppButton from '../components/AppButton'

function WelcomeScreen(props) {
    return (
        <ImageBackground
            style={styles.background}
            source={require('../assets/background.jpg')}
        >
            <View style={styles.container}>
                <Image style={styles.logo} source={require('../assets/logo-red.png')} />
                <Text style={{
                    fontSize: 20,
                    fontWeight: 'bold'
                }}>Sell what you don't need</Text>
            </View>

            <View style={styles.buttonsContainer}>
                <AppButton title='Login'></AppButton>
                <AppButton title='Sign Up' color='green'></AppButton>
            </View>

        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center'
    },
    buttonsContainer: {
        padding: 20,
        alignItems: 'center',
        width: '100%'
    },
    logo: {
        width: 100,
        height: 100,
        marginBottom: 30
    },
    container: {
        position: 'absolute',
        top: 70,
        alignItems: 'center'
    },
    registerButton: {
        width: '100%',
        height: 70
    }
});

export default WelcomeScreen;