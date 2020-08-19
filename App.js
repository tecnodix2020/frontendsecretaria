/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import {
  StyleSheet,
  View,
  Text,
  Image,
} from 'react-native';

const Stack = createStackNavigator();

const App: () => React$Node = () => {
    return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Home"
            component={HomeScreen}
            options={{ title: 'Bem Vindo Visitante'}}
          />
          <Stack.Screen 
            name="Options" 
            component={OptionsScreen} 
          />
          <Stack.Screen 
            name="Visita" 
            component={GuestScreen} 
          />
          <Stack.Screen 
            name="EntrevistaReuniao" 
            component={MeetingScreen} 
          />
          <Stack.Screen 
            name="Entrega" 
            component={DeliverScreen} 
          />
        </Stack.Navigator>
      </NavigationContainer>
    );
};

const HomeScreen = ({ navigation }) => {
  return (
      <View style={[styles.body]}>
        <View 
          style={[styles.placeholderLogo]}
          onPress = { ()=>
            navigation.navigate('Tela2', { name: 'Teste'})
          }
        >
          <Image style={styles.imgLogo} source={require('./img/logo.png')}/>
          <Text style={[styles.txtLogo]}>CHAMAR</Text>
        </View>
      </View>
  )
};

const OptionsScreen = () => {
  return <Text>Aqui esta a tela 2</Text>;
};

const GuestScreen = () => {
  return <Text>Aqui esta a tela Visita</Text>;
};

const MeetingScreen = () => {
  return <Text>Aqui esta a tela EntrevistaReuniao</Text>;
};

const DeliverScreen = () => {
  return <Text>Aqui esta a tela Entrega</Text>;
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
