import React from 'react';
import { AppLoading } from 'expo';
import { StyleSheet, Text, View, StatusBar } from 'react-native';
import { Roboto_300Light, Roboto_700Bold, Roboto_400Regular, Roboto_300Light_Italic,  useFonts} from '@expo-google-fonts/roboto';

import Routes from './src/routes';


export default function App() {
  const [fontsLoaded] = useFonts({
    Roboto_300Light,
    Roboto_700Bold,
    Roboto_400Regular,
    Roboto_300Light_Italic,
  });

  if (!fontsLoaded) {
    return <AppLoading />
  }

  return (
    <>
        <StatusBar  barStyle="light-content" backgroundColor="transparent" translucent/>
        <Routes />
    </>
  );
}
