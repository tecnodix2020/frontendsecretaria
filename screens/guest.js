import React from 'react';
import { Dimensions, StyleSheet, View, Text, Button, Image, TouchableWithoutFeedback } from 'react-native';
import {
 heightPercentageToDP as hp,
 widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

var OPTIONS = Dimensions.get('window').width * 0.25;

export default function Guest({ navigation }) {

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
              <Text style={styles.txtUser}>Outro Nome</Text>
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
    width: Dimensions.get('window').width * 0.29,
    height: Dimensions.get('window').width * 0.29,
    borderRadius: Math.round(Dimensions.get('window').width + Dimensions.get('window').height) / 2,
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    left: '40%',
    top: '7%',
    backgroundColor: 'white',
    borderWidth: 2,
    borderColor: 'green',
  },
  logoImage: {
    width: wp(16),
    height: wp(13),
    marginBottom: wp(1),
  },
  userImage: {
    width: wp(12),
    height: wp(12),
  },
  txtCircle: {
    fontSize: wp(2),
    color: 'purple',
    textTransform: "uppercase",
    fontWeight: "bold",
  },
  userOne: {
    width: OPTIONS,
    height: OPTIONS,
    borderRadius: Math.round(Dimensions.get('window').width + Dimensions.get('window').height) / 2,
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    left: '21%',
    top: '35%',
  },
  userTwo: {
    width: OPTIONS,
    height: OPTIONS,
    borderRadius: Math.round(Dimensions.get('window').width + Dimensions.get('window').height) / 2,
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    left: '41%',
    top: '53%',
  },
  userThree: {
    width: OPTIONS,
    height: OPTIONS,
    borderRadius: Math.round(Dimensions.get('window').width + Dimensions.get('window').height) / 2,
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    left: '62%',
    top: '35%',
  },
  userNotListed: {
    width: OPTIONS,
    height: OPTIONS,
    borderRadius: Math.round(Dimensions.get('window').width + Dimensions.get('window').height) / 2,
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    left: '75%',
    top: '5%',
  },
  txtUser: {
    color: '#FFFFFF',
    fontSize: wp(2),
    textTransform: "uppercase",
    fontWeight: "bold",
  }
});


/*import React from 'react';
import { StyleSheet, View, Text, Button, Image, TouchableHighlight, TextInput } from 'react-native';

export default function Guest({ navigation }) {
    
    return (
      <View style={styles.body}>
        <View style={styles.square}>
          <View style={styles.menu}>
            <Text style={styles.txtMenu}>Indique o nome</Text>
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

});*/