import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import AppTextInput from '../components/AppTextInput';

import AppButton from '../components/AppButton'

function RegisterScreen(props) {

    const [username, setUsername] = useState()
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()

    return (
        <View style={styles.container}>
            <AppTextInput
                icon='user'
                placeholder='User'
                onChangeText={text => setUsername(text)}
            />
            <AppTextInput
                icon='email'
                placeholder='Email'
                onChangeText={text => setEmail(text)}
            />
            <AppTextInput
                icon='lock'
                placeholder='Password'
                onChangeText={text => setPassword(text)}
            />
            <AppButton title='Register' onPress={() => alert(`${username, email, password}`)} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: 15
    }
});

export default RegisterScreen;