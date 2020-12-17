import React, { Component } from 'react';
import { Dimensions, StyleSheet, View, Text, Button, Image, TouchableWithoutFeedback, FlatList, SafeAreaView } from 'react-native';
import {
 heightPercentageToDP as hp,
 widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

export default class Chat extends Component {

  render() {
    return (
      <View style={[styles.body]}>
          <View style={[styles.placeholderLogo]}>
            <Image style={styles.imgLogo} source={require('../img/logo.png')} />
          </View>

          <View style={styles.employeeList}>
            
          </View>
          <Text style={styles.txtUser}>O Colaborador está sendo acionado, aguarde a resposta</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  body: {
    flex: 1,
    width: '100%',
    height: '100%',
    backgroundColor: '#50C3F3',
    justifyContent: 'center',
    alignItems: 'center',
    alignContent: 'center',
  },
  placeholderLogo: {
    flex: 1,
    width: Dimensions.get('window').width * 0.25,
    height: Dimensions.get('window').width * 0.25,
    borderRadius: (Dimensions.get('window').width * 0.25 + Dimensions.get('window').height * 0.25)/2,
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    left: '40%',
    top: '15%',
    backgroundColor: 'white',
    borderWidth: 2,
  },
  imgLogo: {
    width: wp(18),
    height: wp(16),
    margin: wp(1),
  },
  txtLogo: {
    fontSize: 20,
  },
  user: {
    width: 150,
    height: 150,
    borderRadius: 150/2,
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    left: '43%',
    top: '55%',
  },
  txtUser: {
    fontSize: wp(2.3),
    color: '#FFFFFF',
    position: 'absolute',
    top: '70%',
    left: '15%',
    textTransform: "uppercase",
    fontWeight: "bold",
  },
  employeeList: {
    position: 'absolute',
    left: '86%',
    top: '17%',
  }
});
