import React from 'react';
import { PixelRatio, Dimensions, StyleSheet, View, Text, Button, Image, TouchableWithoutFeedback } from 'react-native';

var FONT_LOGO = 26;

if (PixelRatio.get() <= 1.5) {
  FONT_LOGO = 18;
}



export default function Home({ navigation }) {
    
    const pressHandler = () => {
        navigation.navigate('Option');
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
    width: '100%',
    height: '100%',
    backgroundColor: '#50C3F3',
    alignItems: 'center',
    alignContent: 'center',
    justifyContent: 'center',
  },
  placeholderLogo: {
    backgroundColor: '#FFFFFF',
    width: Dimensions.get('window').width * 0.32,
    height: Dimensions.get('window').width * 0.32,
    borderRadius: Math.round(Dimensions.get('window').width + Dimensions.get('window').height) / 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  imgLogo: {
    width: '60%',
    height: '50%',
    margin: 10,
    resizeMode: 'stretch',
  },
  txtLogo: {
    fontSize: FONT_LOGO,
    color: 'red',
  }
});
