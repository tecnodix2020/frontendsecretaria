import React, { Component } from 'react';
import { StyleSheet, View, Text, Button, Image, TouchableWithoutFeedback, FlatList, SafeAreaView } from 'react-native';
import EmployeeList from '../components/employees.js';

export default class Chat extends Component {

  render() {
    return (
      <View style={[styles.body]}>
          <View style={[styles.placeholderLogo]}>
            <Image style={styles.imgLogo} source={require('../img/logo.png')} />
          </View>

          <View style={styles.employeeList}>
            
          </View>
          <Text style={styles.txtUser}>Olá! Já estou indo até a portaria</Text>
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
  },
  imgLogo: {
    width: 120,
    height: 100,
    margin: 10,
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
      fontSize: 26,
      color: '#FFFFFF',
      position: 'absolute',
      top: '75%',
      left: '25%',
  },
  employeeList: {
    position: 'absolute',
    left: '86%',
    top: '17%',
  }
});
