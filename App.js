import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { SafeAreaView, ImageBackground, View, Text, Image, StyleSheet, TextInput, Switch } from 'react-native';
import ViewImageScreen from './app/screens/ViewImageScreen';
import WelcomeScreen from './app/screens/WelcomeScreen';
import AppButton from './app/components/AppButton'

import Card from './app/components/Card.js'
import ListingDetailsScreen from './app/screens/ListingDetailsScreen';
import MessagesScreen from './app/screens/MessagesScreen'
import MyAccountScreen from './app/screens/MyAccountScreen';
import ListingsContainer from './app/components/ListingsContainer';
import AppTextInput from './app/components/AppTextInput';

import AppPicker from './app/components/AppPicker'


const categories = [
  { label: 'Furniture', value: 1 },
  { label: 'Chair', value: 2 },
  { label: 'Table', value: 3 },
]

export default function App() {

  const [isNew, setIsNew] = useState(false)

  return (
    <SafeAreaView>
      <AppPicker
        items={categories}
        icon='apps'
        placeholder='Category'
      />
      <AppTextInput
        icon='email'
      />
    </SafeAreaView>
  )
}


