import React from 'react';
import { View } from 'react-native';
import Weather from './Weather';
import { StatusBar } from 'expo-status-bar';

export default function Welcome({route}) {    
    return (
        <View>
            <Welcome zipCode={route.params.zipCode} />
        </View>
    );
}