import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {
    useFonts,
    Roboto_400Regular,
    Roboto_700Bold
} from '@expo-google-fonts/roboto';
import { Text, View } from 'react-native';
import AppLoading from 'expo-app-loading';
import { Home } from './src/screens/Home/Home';

export default function App() {
    const [fontsLoaded] = useFonts({
        Roboto_400Regular,
        Roboto_700Bold
    });

    if(!fontsLoaded) {
        return <AppLoading />
    }else{
        return (
            <>
                <StatusBar style="light"/>
                <Home />
            </>
        );
    }
}
