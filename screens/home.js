import React from 'react';
import { StyleSheet, View, Text, Button, Image, TouchableWithoutFeedback } from 'react-native';

export default function Home({ navigation }) {
    
    const pressHandler = () => {
        navigation.navigate('Guest');
    }

    return (
      <View style={[styles.body]}>
        <TouchableWithoutFeedback onPress={pressHandler} >
          <View style={[styles.placeholderLogo]}>
            <Image style={styles.imgLogo} source={require('../img/logo.png')} />
            <Text style={[styles.txtLogo]}>CHAMAR</Text>
          </View>
        </TouchableWithoutFeedback>
      </View>
  )
}

const styles = StyleSheet.create({
  body: {
    flex: 1,
    width: 600,
    height: 900,
    backgroundColor: '#009FE3',
    justifyContent: 'center',
    alignItems: 'center',
    alignContent: 'center',
  },
  placeholderLogo: {
    backgroundColor: '#FFFFFF',
    flex: 1,
    width: 300,
    height: 300,
    borderRadius: 300/2,
    justifyContent: 'center',
    alignItems: 'center',
    alignContent: 'center',
    margin: 260,
  },
  imgLogo: {
    width: 170,
    height: 150,
    margin: 10,
  },
  txtLogo: {
    fontSize: 40,
    color: 'black',
  }
});
