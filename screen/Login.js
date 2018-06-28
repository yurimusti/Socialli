import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  Dimensions,
  Image,
  TextInput,
  Button,


} from 'react-native';
import { createStackNavigator } from 'react-navigation';



class TelaLogin extends Component {
  static navigationOptions = {
    header: null


  }


  render() {

    return (


      <View style={{ flex: 1, flexDirection: 'column', height: height, marginTop: 0, backgroundColor: '#4B4237', }}>

        <View style={{ backgroundColor: "#000" }}>
          <Image style={{ opacity: 0.7, height: height, zIndex: -990 }} source={require('../resources/login.jpg')}>
          </Image>

          <View style={{ position: 'absolute' }}>
            <View style={style.Logocenter}>
              <Text style={style.LogocustomFont}>Socialli</Text>
            </View>

            <View style={style.container}>
              <View style={style.form}>
                <TextInput style={style.inputCelular}
                  placeholder="+55 31 X XXXX-XXXX" underlineColorAndroid="#D0021B" placeholderTextColor="#f3f3f3" />
              </View>

              <View style={style.btn_Login}>
                <Text style={style.text_Login}>Entrar</Text>
              </View>



              <View style={{ marginTop: 40 }}>

                <Text style={{ color: "#fff", fontWeight: 'bold', fontFamily: 'PoiretOneRegular', }}>Ainda não tem uma conta ? Cadastre-se aqui</Text>

              </View>
            </View>


          </View>


        </View>
      </View>

    );
  }



}


export default createStackNavigator({

  Login: {
    screen: TelaLogin
  },




},
);


const width = Dimensions.get('screen').width;
const height = Dimensions.get('screen').height;

const style = StyleSheet.create({

  Logocenter: {
    //position: 'absolute',
    flex: 0.2,
    marginTop: 40,
    alignItems: 'center',
    justifyContent: "center",
    top: 0,


  },

  LogocustomFont: {

    fontFamily: 'Finition',
    color: "#fdfdfc",
    fontSize: 130,
    textShadowColor: 'rgba(100, 0, 0, 0.45)',
    textShadowOffset: { width: 1, height: 5 },
    textShadowRadius: 10,
    textAlign: "center"

  },
  container: {
    top: height / 3.6,
    width: "100%",
    height: 200,
    justifyContent: 'center',
    alignItems: 'center',

  },
  form: {
    padding: 10,
    width: width,

  },

  inputCelular: {
    marginLeft: 50,
    marginRight: 50,
    fontWeight: 'bold',
    fontSize: 19,
    paddingBottom: 10,
    color: "#000000",

  },
  btn_Login: {

    borderRadius: 100,
    marginLeft: 15,
    marginRight: 15,
    top: 10,
    width: width / 2.2,
    height: 50,
    backgroundColor: '#D0021B',
    justifyContent: "center",
    alignContent: 'center',
    alignItems: 'center',

  },
  text_Login: {

    textAlign: "center",
    justifyContent: "center",
    fontWeight: "bold",
    fontSize: 18,
    color: "#fff",

  }

});
