import React from 'react';
import { StyleSheet, View, Text, Button, Image, TextInput, TouchableWithoutFeedback } from 'react-native';

export default function Meeting({ navigation }) {

    const pressHandler = () => {
        navigation.navigate('Chat');
    }
    
    return (
      <View style={styles.body}>
        <View style={styles.square}>
          <View style={styles.menu}>
            <Text style={styles.txtMenu}>Selecione ou digite o nome da pessoa com quem irá reunir</Text>
          </View>
          <View style={styles.search}>
            <TextInput
              style={styles.inpTxtSearch}
              maxLength={40}
              editable
              autoFocus={false}
              placeholder={'BUSCAR'}
              />
          </View>
          <View style={styles.people}>
            <Text style={styles.txtTop3}>TOP 3 +</Text>
            <View style={styles.bodyNames}>
              <View style={styles.placeholderData}>
                <Text style={styles.position}>1</Text>
                <Text style={styles.name}>Laís dos Santos Bisinotto</Text>
              </View>
              <View style={styles.placeholderData}>
                <Text style={styles.position}>2</Text>
                <Text style={styles.name}>Jéssica Teixeira</Text>
              </View>
              <View style={styles.placeholderData}>
                <Text style={styles.position}>3</Text>
                <Text style={styles.name}>Tiago Moraes</Text>
              </View>
            </View>
          </View>
          <View style={styles.support}>
              <TouchableWithoutFeedback onPress={pressHandler} >
                <View style={styles.placeholderSupport}>
                  <Text style={styles.name}>Chamar Equipe Gente</Text>
                </View>
              </TouchableWithoutFeedback>
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
    height: '85%',
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
    fontSize: 16,
    color: '#FFFFFF',
    fontWeight: 'bold',
  },
  search: {
    height: '20%',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    alignContent: 'center',
  },
  support: {
    height: '18%',
    justifyContent: 'center',
    alignItems: 'center',
    alignContent: 'center',
  },
  inpTxtSearch: {
    borderWidth: 2.5,
    borderColor: '#009FE3',
    width: '80%',
    height: '70%',
    borderRadius: 30,
    margin: '1%',
  },
  people: {
    justifyContent: 'center',
    alignItems: 'center',
    alignContent: 'center',
  },
  txtTop3: {
    fontSize: 18,
    color: '#D5D5D5',
  },
  bodyNames: {
    width: '70%',
    overflow: 'hidden',
    marginBottom: '0.5%',
  },
  placeholderData: {
    margin: '0.5%',
    borderRadius: 30,
    borderWidth: 2.5,
    borderColor: '#D5D5D5',
    padding: '8%',
    justifyContent: 'center',
    alignItems: 'center',
    alignContent: 'center',
  },
  position: {
    position: 'absolute',
    left: '2%',
    paddingTop: '15%',
    borderWidth: 2.5,
    borderColor: '#009FE3',
    borderRadius: 25/2,
    height: 25,
    width: 25,
    color: '#009FE3',
    paddingLeft: '35%',
  },
  name: {
    position: 'absolute',
    left: '30%',
    paddingTop: '2%',
    fontSize: 9,
  },
  placeholderSupport: {
    borderWidth: 2.5,
    borderColor: '#009FE3',
    width: '70%',
    borderRadius: 30,
    overflow: 'hidden',
    padding: '5%',
    margin: '2%',
  }

});