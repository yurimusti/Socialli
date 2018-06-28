import React from 'react';
import { Component } from 'react';
import { View, Button, Dimensions, StyleSheet, ScrollView, ImageBackground, Text, TextInput, TouchableNativeFeedback } from 'react-native';
import { createStackNavigator } from 'react-navigation';

import TelaLogin from './screen/Login';
//import TelaCadastro from './screen/Cadastro';
import Navegar from './screen/Navegar';


const width = Dimensions.get('screen').width;
const height = Dimensions.get('screen').height;

class LoginScreen extends Component {

  static navigationOptions = {
    header: null
  }

  render() {
    return (
      <TelaLogin />
    );
  }
}

class CadastroScreen extends Component {

  static navigationOptions = {
    header: null
  }

  render() {
    return (
      <Text> Cadastro </Text>
    );
  }
}

class Teste extends Component {

  static navigationOptions = {
    header: null
  }

  render() {
    return (
      <Navegar />
    );
  }
}

export default createStackNavigator(
  {
    Login: {
      screen: LoginScreen
    },
    Cadastro: {
      screen: CadastroScreen
    },
    Teste: {
      screen: Teste
    }
  },
  
  {
    initialRouteName: 'Teste',
  }
);


const styles = StyleSheet.create({
 
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
