import React, { useState, setState, useEffect } from 'react';
import { ToastAndroid, TouchableOpacity, StyleSheet, View, Text, Button, Image, TextInput, TouchableWithoutFeedback } from 'react-native';
import Employee from '../components/employees';
import {
 heightPercentageToDP as hp,
 widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

import { format, parseISO, isAfter } from "date-fns";

import api from '../services/api';

import pt from 'date-fns/locale/pt-BR';

export default function Meeting({ navigation }) {

  const [employeePickerValue, setEmployeePickerSelectedValue] = useState('');

  const pressHandler = () => {
      navigation.navigate('Chat');
  }

  const handleSubmit = async() => {
    console.log(employeePickerValue);
    try {
        const messageToEmployee = {
          "idMessage": 1,
          "idEmployee": employeePickerValue,
          "dateMessage": format(new Date(), 'yyyy-MM-dd', { locale: pt }),
          "hourMessage": format(new Date(), 'hh:mm', { locale: pt }),
        }  

        console.log(messageToEmployee);

        const response = await api.post('/msgsbyemployee', messageToEmployee);

        const returnedValue = response.data;

        console.log(returnedValue);

        const message = await showToastWithGravityAndOffset("Mensagem Enviada Com Sucesso!");
       
      } catch (_err) {
        console.log(_err);
    }
  }

  const handleSubmitRH = () => {
    console.log("Gente foi acionada");
  }

  const showToastWithGravityAndOffset = (message) => {
    ToastAndroid.showWithGravityAndOffset(
      message,
      ToastAndroid.LONG,
      ToastAndroid.BOTTOM,
      10,
      20
    );
  };
    
  const onEmployeePickedValueChanged = (childData) => {
    //console.log(childData);
    setEmployeePickerSelectedValue(childData);
  }
    return (
      <View style={styles.body}>
        <View style={styles.square}>
          <View style={styles.menu}>
            <Text style={styles.txtMenu}>Selecione o Colaborador</Text>
          </View>
          
          <View style={styles.employees}>
            <Employee parentCallback = {onEmployeePickedValueChanged} />
          </View>
          <View style={styles.support}>
              <TouchableOpacity style={styles.submitContainer} onPress={handleSubmit}>
                <Text style={styles.submit}> ENVIAR </Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.submitContainer} onPress={handleSubmitRH}>
                <Text style={styles.submit}> CHAMAR RH </Text>
              </TouchableOpacity>
          </View>
        </View>
      </View>
  )
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
  square: {
    backgroundColor: '#FFFFFF',
    width: '40%',
    height: '75%',
    borderRadius: 8,
  },
  menu: {
    height: '18%',
    backgroundColor: '#009FE3',
    justifyContent: 'center',
    alignItems: 'center',
    alignContent: 'center',
  },
  txtMenu: {
    fontSize: wp(2.3),
    color: '#FFFFFF',
    fontWeight: 'bold',
    textTransform: "uppercase",
  },
  support: {
    height: '18%',
    justifyContent: 'center',
    alignItems: 'center',
    alignContent: 'center',
    marginTop: wp(2),
  },
  employees: {
    justifyContent: 'center',
    alignItems: 'center',
    alignContent: 'center',
    margin: wp(4.5),
  },
  submitContainer: {
    elevation: 8,
    backgroundColor: "#009688",
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 12,
    marginTop: wp(6),
    width: wp(30),
  },
  submit: {
    fontSize: wp(3),
    color: "#fff",
    fontWeight: "bold",
    alignSelf: "center",
    textTransform: "uppercase",
  },

});