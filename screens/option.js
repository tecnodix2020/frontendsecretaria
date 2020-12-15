import React from 'react';
import { PixelRatio, Dimensions, StyleSheet, View, Text, Button, Image, TouchableWithoutFeedback } from 'react-native';
import {
 heightPercentageToDP as hp,
 widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

var FONT = wp(1.66);
var BALL_SIZE_LOGO = Dimensions.get('window').width * 0.26;
var BALL_SIZE_OPTIONS = Dimensions.get('window').width * 0.175;


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
                <Text style={styles.txtCircle}>Escolha Uma Opção</Text>
              </View>
              <TouchableWithoutFeedback onPress={pressHandlerGuest} >
                <View style={styles.circleGuest}>
                  <Image style={styles.imgIcons} source={require('../img/guest.png')} />
                  <Text style={styles.txtOptions}>VISITA</Text>
                </View>
              </TouchableWithoutFeedback>
              <TouchableWithoutFeedback onPress={pressHandlerMeeting} >
                <View style={styles.circleMeeting}>
                  <Image style={styles.imgIcons} source={require('../img/meeting.png')} />
                  <Text style={styles.txtOptions}>REUNIÃO</Text>
                  <Text style={styles.txtOptions}>ENTREVISTA</Text>
                </View>
              </TouchableWithoutFeedback>
              <TouchableWithoutFeedback onPress={pressHandlerDelivery} >
                <View style={styles.circleDelivery}>
                  <Image style={styles.imgIcons} source={require('../img/delivery.png')} />
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
    width: wp(16),
    height: wp(13),
    marginBottom: wp(1),
  },
  circleGuest: {
    width: BALL_SIZE_OPTIONS,
    height: BALL_SIZE_OPTIONS,
    borderRadius: Math.round(Dimensions.get('window').width + Dimensions.get('window').height) / 2,
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    left: '22%',
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
    left: '44%',
    top: '60%',
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
    left: '65%',
    top: '43%',
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: 'red',
  },
  txtCircle: {
    fontSize: wp(1.5),
    color: 'purple',
    textTransform: "uppercase",
    fontWeight: "bold",
  },
  txtOptions: {
    fontSize: FONT,
    color: 'grey',
    textTransform: "uppercase",
    fontWeight: "bold",
  },
  imgIcons: {
    width: wp(10),
    height: wp(7.5),
  }
});