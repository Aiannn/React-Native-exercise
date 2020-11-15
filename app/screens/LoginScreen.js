import React, { useState } from 'react';
import { View, StyleSheet, Image, Text } from 'react-native';
import AppTextInput from '../components/AppTextInput';
import AppButton from '../components/AppButton'

function LoginScreen(props) {

    const [email, setEmail] = useState()
    const [password, setPassword] = useState()

    return (
        <View style={styles.container}>
            <Image
                style={styles.logo}
                source={require('../assets/logo-red.png')} />
            <AppTextInput
                onChangeText={text => setEmail(text)}
                placeholder='email'
                autoCorrect={false}
                keyboardType='email-address'
                textContentType='emailAddress'
                icon='email'
                autoCapitalize='none'
            />
            <AppTextInput
                onChangeText={password => setPassword(password)}
                autoCapitalize='none'
                autoCorrect={false}
                icon='lock'
                placeholder='Password'
                textContentType='password'
                secureTextEntry={true}
            />
            <AppButton title='Login' onPress={() => console.log(email, password)} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: 15
    },
    logo: {
        width: 80,
        height: 80,
        alignSelf: 'center',
        marginTop: 50
    }
});

export default LoginScreen;