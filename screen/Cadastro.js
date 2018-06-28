import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    Dimensions,
    Text


} from 'react-native';
import { createStackNavigator } from 'react-navigation';

import Icon from 'react-native-vector-icons/FontAwesome';
import { FormLabel, FormInput, FormValidationMessage, Avatar } from 'react-native-elements'

class TelaCadastro extends Component {

    static navigationOptions = {
        header: null


    }

    render() {
        return (
            <View style={{ flexDirection: 'column', height: height, backgroundColor: "#1c1c1c", }}>

                <View style={{ alignItems: 'center', marginTop: 40 }}>



                    <Avatar
                        xlarge
                        rounded
                        source={{ uri: "https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg" }}
                        onPress={() => console.log("Works!")}
                        activeOpacity={0.7}
                    />
                </View>

                <View style={{ marginTop: 10 }}>
                    <FormLabel>Nome</FormLabel>
                    <FormInput underlineColorAndroid="#D0021B" onChangeText={{}} />

                    <FormLabel>Sobrenome</FormLabel>
                    <FormInput underlineColorAndroid="#D0021B" onChangeText={() => alert('teste')} />

                    <FormLabel >Email</FormLabel>
                    <FormInput  underlineColorAndroid="#D0021B" onChangeText={() => alert('teste')} />

                    <FormLabel >Senha</FormLabel>
                    <FormInput underlineColorAndroid="#D0021B" onChangeText={() => alert('teste')} />
                    
            <View style={style.btn_Login}>
            <Text style={style.text_Login}>Cadastrar</Text>
            </View>

                </View>
            </View>
        );
    }
}


export default createStackNavigator({

    Login: {
        screen: TelaCadastro
    },




},
);


const width = Dimensions.get('screen').width;
const height = Dimensions.get('screen').height;

const style = StyleSheet.create({


    btn_Login: {
        alignSelf: 'center',
        top: 25,
        width: width / 2,
        height: 50,
        backgroundColor: '#D0021B',
        justifyContent: "center",
        alignContent: 'center',
        alignItems: 'center',
        borderRadius: 200,
    
    
    
      },
      text_Login: {
        textAlign: "center",
        justifyContent: "center",
        fontWeight: "bold",
        fontSize: 18,
        color: "#fff"
      }
});
