import React from 'react';
import { StyleSheet, View, Text, Button, Image, TouchableWithoutFeedback } from 'react-native';

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
              <Text style={styles.txtUser}>O Destinatário</Text>
              <Text style={styles.txtUser}>Não Está Na Lista</Text>
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
    flex: 1,
    width: 200,
    height: 200,
    borderRadius: 200/2,
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    left: '40%',
    top: '15%',
    backgroundColor: 'white',
    borderWidth: 2,
    borderColor: 'green',
  },
  logoImage: {
    width: 120,
    height: 110,
    margin: 1,
  },
  txtCircle: {
    fontSize: 16,
    color: 'red',
  },
  userOne: {
    width: 150,
    height: 150,
    borderRadius: 150/2,
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    left: '25%',
    top: '43%',
  },
  userTwo: {
    width: 150,
    height: 150,
    borderRadius: 150/2,
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    left: '43%',
    top: '60%',
  },
  userThree: {
    width: 150,
    height: 150,
    borderRadius: 150/2,
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    left: '60%',
    top: '43%',
  },
  userNotListed: {
    width: 180,
    height: 180,
    borderRadius: 180/2,
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    left: '75%',
    top: '30%',
  },
  txtUser: {
    color: '#FFFFFF',
    fontSize: 18,
  }
});