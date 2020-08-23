import React from 'react';
import { StyleSheet, View, Text, Button, Image, TouchableHighlight, TextInput } from 'react-native';

export default function Meeting({ navigation }) {
    
    return (
      <View style={styles.body}>
        <View style={styles.square}>
          <View style={styles.menu}>
            <Text style={styles.txtMenu}>Informe seu código de visitante ou a pessoa com quem vais se reunir</Text>
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
              <View style={styles.placeholderSupport}>
                <Text style={styles.name}>Chamar Equipe Gente</Text>
              </View>
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
    fontSize: 20,
    color: '#FFFFFF',
    fontWeight: 'bold',
    paddingLeft: '3%',
  },
  search: {
    height: '20%',
    justifyContent: 'center',
    alignItems: 'center',
    alignContent: 'center',
  },
  support: {
    height: '20%',
    justifyContent: 'center',
    alignItems: 'center',
    alignContent: 'center',
  },
  inpTxtSearch: {
    borderWidth: 2.5,
    borderColor: '#009FE3',
    width: '70%',
    height: '70%',
    borderRadius: 30,
    padding: '5%',
    margin: '2%',
  },
  people: {
    justifyContent: 'center',
    alignItems: 'center',
    alignContent: 'center',
  },
  txtTop3: {
    fontSize: 30,
    color: '#D5D5D5',
  },
  bodyNames: {
    width: '70%',
    overflow: 'hidden',
    margin: '0.5%',
  },
  placeholderData: {
    margin: '1%',
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
    left: '5%',
    paddingTop: '15%',
    borderWidth: 2.5,
    borderColor: '#009FE3',
    borderRadius: 30/2,
    height: 30,
    width: 30,
    color: '#009FE3',
    paddingLeft: '35%',
    
  },
  name: {
    position: 'absolute',
    left: '30%',
    paddingTop: '2%',
    fontSize: 16,
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