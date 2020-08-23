import React from 'react';
import { StyleSheet, View, Text, Button, Image, TouchableWithoutFeedback } from 'react-native';

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
                  <Text>VISITA</Text>
                </View>
              </TouchableWithoutFeedback>
              <TouchableWithoutFeedback onPress={pressHandlerMeeting} >
                <View style={styles.circleMeeting}>
                  <Image source={require('../img/meeting.png')} />
                  <Text>REUNIÃO</Text>
                  <Text>ENTREVISTA</Text>
                </View>
              </TouchableWithoutFeedback>
              <TouchableWithoutFeedback onPress={pressHandlerDelivery} >
                <View style={styles.circleDelivery}>
                  <Image source={require('../img/delivery.png')} />
                  <Text>ENTREGAS</Text>
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
    flex: 1,
    width: 250,
    height: 250,
    borderRadius: 250/2,
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    left: '40%',
    top: '10%',
    backgroundColor: 'white',
    borderWidth: 2,
    borderColor: 'green',
  },
  logoImage: {
    width: 150,
    height: 120,
    margin: 5,
  },
  circleGuest: {
    width: 150,
    height: 150,
    borderRadius: 150/2,
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
    width: 150,
    height: 150,
    borderRadius: 150/2,
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    left: '45%',
    top: '65%',
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: 'blue',
  },
  circleDelivery: {
    width: 150,
    height: 150,
    borderRadius: 150/2,
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
    fontSize: 16,
    color: 'red',
  }
});