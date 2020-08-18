/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
} from 'react-native';

const App: () => React$Node = () => {
    return (
      <View style={[styles.body]}>
        <View style={[styles.placeholderLogo]}>
            <Image style={styles.imgLogo} source={require('./img/logo.png')}/>
            <Text style={[styles.txtLogo]}>CHAMAR</Text>
        </View>
      </View>
    );
};

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
    height: 900,
    justifyContent: 'center',
    alignItems: 'center',
    alignContent: 'center',
    borderRadius: 150,
    margin: 300,
  },
  imgLogo: {
    width: 150,
    height: 150,
    margin: 20,
  },
  txtLogo: {
    fontSize: 30,
    color: 'red',
  }
});


export default App;
