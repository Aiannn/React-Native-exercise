import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { SafeAreaView, Button, View, Text, Image, StyleSheet, TextInput, Switch } from 'react-native';

import * as ImagePicker from 'expo-image-picker'
import * as Permissions from 'expo-permissions'
import AppImageInput from './app/components/AppImageInput';

export default function App() {

  // const requestPermission = async () => {
  //   const result = await Permissions.askAsync(Permissions.CAMERA_ROLL, Permissions.LOCATION)
  //   const result = await ImagePicker.requestCameraRollPermissionsAsync()
  //   if (!result.granted)
  //     alert('You need to enable permission')
  // }

  // useEffect(() => {
  //   requestPermission()
  // }, [])

  const [imageUri, setImageUri] = useState()

  const selectImage = async () => {
    try {
      const result = await ImagePicker.launchImageLibraryAsync()
      if (!result.cancelled) {
        setImageUri(result.uri)
      }
    } catch (error) {
      console.log('Error reading an image', error)
    }
  }

  return (
    <SafeAreaView>
      <AppImageInput onPress={selectImage} />
      <Image source={{ uri: imageUri }} style={{ width: 200, height: 200 }} />
    </SafeAreaView>
  )
}


