import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { View, Text, ImageBackground ,FlatList, TouchableHighlight,  StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const availableZipItems = [
    { place: 'Hatyai', code: '90000' },
    { place: 'Trang', code: '92000' },
    { place: 'Chiangmai', code: '50000' },
    { place: 'Khonkaen', code: '40000' },
    { place: 'Chonburi', code: '20000' },
]

const ZipItem = ({ place, code, navigation }) => (
    <TouchableHighlight onPress={() => navigation.navigate('Weather', { zipCode:  code })}>
        <View style={styles.item}>
            <Text>{place}</Text>
            <Text>{code}</Text>
        </View>
    </TouchableHighlight>
)

const _keyExtractor = item => item.code

export default function ZipCodeScreen() {
    const navigation = useNavigation()
    return (
        <View>
            <ImageBackground source={require('../21.gif')} style={styles.backdrop}>

            <FlatList
                data={availableZipItems}
                keyExtractor={_keyExtractor}
                renderItem={({ item }) => <ZipItem {...item} navigation={navigation} />}
            />
            <StatusBar style="auto" />
            </ImageBackground>
        </View>
    );

}


const styles = StyleSheet.create({
    item: {
        height: 50,
        padding: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    backdrop:{
        

        width: '100%',
        height: '100%'
    },
    cover: {
        backgroundColor: 'black',
        width: '100%',
        height: 250,
        opacity: 0.4,
        alignItems: 'center',
    }
})