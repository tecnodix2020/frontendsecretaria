import React from 'react';
import { PixelRatio, Dimensions, StyleSheet, View, Text, Button, Image, TouchableWithoutFeedback } from 'react-native';
import {
 heightPercentageToDP as hp,
 widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

var FONT_LOGO = wp(25);


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
    width: Dimensions.get('window').width * 0.30,
    height: Dimensions.get('window').width * 0.30,
    borderRadius: Math.round(Dimensions.get('window').width + Dimensions.get('window').height) / 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  imgLogo: {
    width: wp(19),
    height: wp(15),
    margin: wp(1),
    alignSelf: 'center',
  },
  txtLogo: {
    fontSize: wp(3.8),
    color: 'purple',
  }
});
