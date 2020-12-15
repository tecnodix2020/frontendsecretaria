import React from 'react';
import { Dimensions, StyleSheet, View, Text, Button, Image, TouchableWithoutFeedback } from 'react-native';
import {
 heightPercentageToDP as hp,
 widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

var OPTIONS = Dimensions.get('window').width * 0.25;

export default function Delivery({ navigation }) {

    const pressHandler = () => {
        navigation.navigate('Chat');
    }
    
    return (
      <View>
          <View style={styles.body}>
              <View style={styles.logoCircle}>
                <Image style={styles.logoImage} source={require('../img/logo.png')} />
                <Text style={styles.txtCircle}>Selecione o</Text>
                <Text style={styles.txtCircle}>Destinatário</Text>
              </View>
          </View>
          <TouchableWithoutFeedback onPress={pressHandler} >
            <View style={styles.userOne}>
              <Image style={styles.userImage} source={require('../img/user.png')} />
              <Text style={styles.txtUser}>Ivan Coimbra</Text>
            </View>
          </TouchableWithoutFeedback>
          <TouchableWithoutFeedback onPress={pressHandler} >
            <View style={styles.userTwo}>
              <Image style={styles.userImage} source={require('../img/user.png')} />
              <Text style={styles.txtUser}>Guilherme Ferreira</Text>
            </View>
          </TouchableWithoutFeedback>
          <TouchableWithoutFeedback onPress={pressHandler} >
            <View style={styles.userThree}>
              <Image style={styles.userImage} source={require('../img/user.png')} />
              <Text style={styles.txtUser}>Felipe Freitas</Text>
            </View>
          </TouchableWithoutFeedback>
          <TouchableWithoutFeedback onPress={pressHandler} >
            <View style={styles.userNotListed}>
              <Image style={styles.userImage} source={require('../img/exclamation.png')} />
              <Text style={styles.txtUser}>Outro Nome</Text>
            </View>
          </TouchableWithoutFeedback>
      </View>
  )
}

const styles = StyleSheet.create ({
  body: {
    width: '100%',
    height: '100%',
    backgroundColor: '#50C3F3',
  },
  logoCircle: {
    width: Dimensions.get('window').width * 0.29,
    height: Dimensions.get('window').width * 0.29,
    borderRadius: Math.round(Dimensions.get('window').width + Dimensions.get('window').height) / 2,
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    left: '40%',
    top: '7%',
    backgroundColor: 'white',
    borderWidth: 2,
    borderColor: 'green',
  },
  logoImage: {
    width: wp(16),
    height: wp(13),
    marginBottom: wp(1),
  },
  userImage: {
    width: wp(12),
    height: wp(12),
  },
  txtCircle: {
    fontSize: wp(2),
    color: 'purple',
    textTransform: "uppercase",
    fontWeight: "bold",
  },
  userOne: {
    width: OPTIONS,
    height: OPTIONS,
    borderRadius: Math.round(Dimensions.get('window').width + Dimensions.get('window').height) / 2,
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    left: '21%',
    top: '35%',
  },
  userTwo: {
    width: OPTIONS,
    height: OPTIONS,
    borderRadius: Math.round(Dimensions.get('window').width + Dimensions.get('window').height) / 2,
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    left: '41%',
    top: '53%',
  },
  userThree: {
    width: OPTIONS,
    height: OPTIONS,
    borderRadius: Math.round(Dimensions.get('window').width + Dimensions.get('window').height) / 2,
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    left: '62%',
    top: '35%',
  },
  userNotListed: {
    width: OPTIONS,
    height: OPTIONS,
    borderRadius: Math.round(Dimensions.get('window').width + Dimensions.get('window').height) / 2,
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    left: '75%',
    top: '5%',
  },
  txtUser: {
    color: '#FFFFFF',
    fontSize: wp(2),
    textTransform: "uppercase",
    fontWeight: "bold",
  }
});