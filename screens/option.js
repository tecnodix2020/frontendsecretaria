import React from 'react';
import { PixelRatio, Dimensions, StyleSheet, View, Text, Button, Image, TouchableWithoutFeedback } from 'react-native';

var FONT = 16;
var BALL_SIZE_LOGO = Dimensions.get('window').width * 0.26;
var BALL_SIZE_OPTIONS = Dimensions.get('window').width * 0.175;

if (PixelRatio.get() <= 2.5) {
  FONT = 12;
  BALL_SIZE_LOGO = Dimensions.get('window').width * 0.25;
  BALL_SIZE_OPTIONS = Dimensions.get('window').width * 0.175;
} 

if (PixelRatio.get() <= 1.5) {
  FONT = 9;
  BALL_SIZE_LOGO = Dimensions.get('window').width * 0.25;
  BALL_SIZE_OPTIONS = Dimensions.get('window').width * 0.175;
}


export default function Option({ navigation }) {

    const pressHandlerGuest = () => {
        navigation.navigate('Guest');
    }

    const pressHandlerMeeting = () => {
        navigation.navigate('Meeting');
    }

    const pressHandlerDelivery = () => {
        navigation.navigate('Delivery');
    }

    return (
        <View>
          <View style={styles.body}>
              <View style={styles.logoCircle}>
                <Image style={styles.logoImage} source={require('../img/logo.png')} />
                <Text style={styles.txtCircle}>Escolha Uma Das Opções</Text>
              </View>
              <TouchableWithoutFeedback onPress={pressHandlerGuest} >
                <View style={styles.circleGuest}>
                  <Image source={require('../img/guest.png')} />
                  <Text style={styles.txtOptions}>VISITA</Text>
                </View>
              </TouchableWithoutFeedback>
              <TouchableWithoutFeedback onPress={pressHandlerMeeting} >
                <View style={styles.circleMeeting}>
                  <Image source={require('../img/meeting.png')} />
                  <Text style={styles.txtOptions}>REUNIÃO</Text>
                  <Text style={styles.txtOptions}>ENTREVISTA</Text>
                </View>
              </TouchableWithoutFeedback>
              <TouchableWithoutFeedback onPress={pressHandlerDelivery} >
                <View style={styles.circleDelivery}>
                  <Image source={require('../img/delivery.png')} />
                  <Text style={styles.txtOptions}>ENTREGAS</Text>
                </View>
              </TouchableWithoutFeedback>
          </View>
        </View>
    );
}

const styles = StyleSheet.create({
  body: {
    width: '100%',
    height: '100%',
    backgroundColor: '#50C3F3',
  },
  logoCircle: {
    width: BALL_SIZE_LOGO,
    height: BALL_SIZE_LOGO,
    borderRadius: Math.round(Dimensions.get('window').width + Dimensions.get('window').height) / 2,
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    left: '40%',
    top: '10%',
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: 'green',
  },
  logoImage: {
    width: '60%',
    height: '50%',
    marginBottom: 4,
    resizeMode: 'stretch',
  },
  circleGuest: {
    width: BALL_SIZE_OPTIONS,
    height: BALL_SIZE_OPTIONS,
    borderRadius: Math.round(Dimensions.get('window').width + Dimensions.get('window').height) / 2,
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    left: '25%',
    top: '43%',
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: 'lime',
  },
  circleMeeting: {
    width: BALL_SIZE_OPTIONS,
    height: BALL_SIZE_OPTIONS,
    borderRadius: Math.round(Dimensions.get('window').width + Dimensions.get('window').height) / 2,
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    left: '45%',
    top: '64%',
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: 'blue',
  },
  circleDelivery: {
    width: BALL_SIZE_OPTIONS,
    height: BALL_SIZE_OPTIONS,
    borderRadius: Math.round(Dimensions.get('window').width + Dimensions.get('window').height) / 2,
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    left: '63%',
    top: '43%',
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: 'red',
  },
  txtCircle: {
    fontSize: FONT,
    color: 'red',
  },
  txtOptions: {
    fontSize: FONT,
    color: 'black',
  }
});