import React from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';

export default function Option({ navigation }) {

    const pressHandler = () => {
        navigation.goBack();
    }

    return (
        <View>
            <Text>Tela de opções</Text>
            <Button title='voltar à tela inicial' onPress={pressHandler}/>
        </View>
    );
}