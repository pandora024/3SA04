import React from 'react';
import { View, Text,StyleSheet } from 'react-native';

export default function Forecast(props) {
    return (
        <View style={styles.center}>
            <Text style={styles.big}>{props.main}</Text>
            <Text style={styles.mediam}>{props.description}</Text>
            <View>
                <Text style={styles.big}>{props.temp}</Text>
                <Text style={styles.mediam}>°C</Text>
            </View>
        </View>
    );
}
const styles = StyleSheet.create({
    center:{
        justifyCintent: 'center',
        allgnItems: 'center',
    },

    big: {
        fontSize: 30,
        color: 'white',  
    },
    
    median:{
        fontSize: 15,
        color: 'white',

    }
})