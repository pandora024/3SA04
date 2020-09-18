import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function Forecast(props) {
    return (
        <View >
            <Text style={styles.medium}>{props.main}</Text>
            <Text style={styles.medium}>{props.description}</Text>
            <Text style={styles.medium}>°C{props.temp}</Text>
            <View>
                <Text>{props.temp}</Text>
                <Text>°C</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    backdrop: {
        alignItems: 'center',
        width: '100%',
        height: '100%',
    },
    cover: {
        backgroundColor: '#000',
        width: '100%',
        height: 300,
        opacity: 0.5,
        justifyContent: 'center',
        alignItems: 'center',
    },
    medium: {
        fontSize: 20,
        color: '#FFF',
    }
});