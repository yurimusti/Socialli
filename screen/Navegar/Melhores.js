import React from 'react';
import { Component } from 'react';
import { View, Button, Dimensions, StyleSheet, ImageBackground, Text, TextInput, TouchableNativeFeedback, ScrollView, FlatList, Image } from 'react-native';
import { createBottomTabNavigator } from 'react-navigation';
import {
  SearchBar, ListItem
} from 'react-native-elements';

import { YellowBox } from 'react-native';
YellowBox.ignoreWarnings(['Warning: isMounted(...) is deprecated', 'Module RCTImageLoader']);

class Tela1 extends Component {
  render() {
    return (

      <View style={{ height: height, backgroundColor: "#1a1a1c" }}>
        <ScrollView>

        

        </ScrollView>
      </View>

    );
  }

}


const width = Dimensions.get('screen').width;
const height = Dimensions.get('screen').height;

const style = StyleSheet.create(
  {
    Logocenter: {

      justifyContent: "center",
      top: 110,
      backgroundColor: "#00000088"



    },

    LogocustomFont2: {



      color: "#fdfdfc",
      fontSize: 25,
      textShadowColor: 'rgba(100, 0, 0, 0.45)',
      textShadowOffset: { width: 2, height: 5 },
      textShadowRadius: 10,

      textAlign: "center"


    }
  }
)

export default Tela1;
