import React, { Component } from 'react';
import { StyleSheet, View, Text, Button, Image, TouchableWithoutFeedback, FlatList, SafeAreaView } from 'react-native';

import {Picker} from '@react-native-picker/picker';

import api from '../services/api';

export default class Employee extends Component {
  constructor(props) {
      super(props);
      this.state = {
          data: [],
          selectedEmployee : "-"
      }
  }

  loadEmployees = async() => { 
    try {
      var response = await api.get('/employees')

      console.log(response.data);

      this.setState ({
                  data: response.data.map(item => {
                    return { id: item.id, name: item.name}
                  }) || []
              });
    } catch (error) {
      console.log(error);
    }
  }

  componentDidMount() {
      this.loadEmployees();
  }

  sendData = (value) => {
      this.props.parentCallback(value);
  }

  employeeList =  () => {
    return( this.state.data.map( (data,i) => { 
        return( <Picker.Item label={data.name} key={i} value={data.name} color="#4c319e" />)} ));
  }

  render() {
    return (
            <Picker
                selectedValue={this.state.selectedEmployee}
                style={styles.pickerStyle}
                onValueChange={ (value) => ( this.setState({selectedEmployee : value}), this.sendData(value))}>
                { this.employeeList() }
            </Picker>
    );
  }
}

const styles = StyleSheet.create({
  pickerStyle: {
    width: '80%',
    marginLeft: '2%',
  },
});


/*import React, { Component } from 'react';
import { StyleSheet, View, Text, Button, Image, TouchableWithoutFeedback, FlatList, SafeAreaView } from 'react-native';

export default class Employee extends Component {

  constructor(props) {
      super(props);
      this.state = {
          data: []
      }
  }

  loadUsers = () => {
      fetch("https://backendsecretaria.herokuapp.com/employees")
          .then( res => res.json() )
          .then( res => {
              this.setState ({
                  data: res || []
              });
          })
          .catch((error) => {
              console.error(error);
          });
  }

  componentDidMount() {
      this.loadUsers();
  }

  render() {
    return (
      <View style={[styles.body]}>
          <View style={styles.employeesList}>
            <FlatList
                data={this.state.data}
                renderItem={({item}) => (
                  <View>
                    <Text style={styles.name}>{item.name}</Text>
                  </View>
                )}
                keyExtractor={item => item.email}
            />
          </View >
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
  employeesList: {
    width: 220,
    height: 350,
    position: 'absolute',
    left: '30%',
    top: '25%',
    backgroundColor: '#FFF',
    borderRadius: 15,
  },
  name: {
    paddingLeft: 10,
    paddingTop: 15,
    fontSize: 20,
  },
});
*/