import React from 'react';
import { Component } from 'react';
import { View, Button, Dimensions, StyleSheet, ImageBackground, Text, TextInput, TouchableNativeFeedback, ScrollView, FlatList, Image } from 'react-native';
import { createBottomTabNavigator } from 'react-navigation';
import {
  SearchBar, ListItem, Badge
} from 'react-native-elements';

import { YellowBox } from 'react-native';
YellowBox.ignoreWarnings(['Warning: isMounted(...) is deprecated', 'Module RCTImageLoader']);





class Tela1 extends Component {
  render() {
    return (

      <View style={{ height: height, backgroundColor: "#1a1a1c" }}>
        <ScrollView>

          <SearchBar
            showLoading
            containerStyle={{ backgroundColor: '#1a1a1c' }}
            inputStyle={{ color: '#f3f3f3', paddingLeft: 30 }}
            round
            cancelIcon={{ type: 'font-awesome', name: 'chevron-left' }}
            onChangeText={() => console.warn('')}
            onClear={() => console.warn('')}
            placeholder='O que deseja procurar ?'

          />

          <FlatList
            data={[

              {
                id: 'text',
                name: 'Amy Farha',
                avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
                subtitle: 'Belo Horizonte'
              },
              {
                id: 'tes',
                name: 'Chris Jackson',
                avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
                subtitle: 'Belo Horizonte'
              }

            ]}
            keyExtractor={item => item.id}
            renderItem={({ item }) =>

              <ListItem

                key={item.id}
                titleStyle={{ color: '#fff' }}
                title={item.name}
                subtitle={
                  <View style={{ flexDirection: 'row' }}>
                    <Badge containerStyle={{ backgroundColor: 'red', margin: 5, }}>
                      <Text style={{ color: '#fff' }}>Bandge</Text>
                    </Badge>
                    <Badge containerStyle={{ backgroundColor: 'red', margin: 5, }}>
                      <Text style={{ color: '#fff' }}>Bandge</Text>
                    </Badge>


                  </View>
                }
                avatar={<Image style={{ width: 60, height: 60, borderRadius: 30, overflow: 'hidden' }} source={{ uri: item.avatar_url }} />}
                avatarStyle={{ height: 150, width: 150 }}
                containerStyle={{ margin: 5, borderBottomWidth: 0.4, padding: 0, borderBottomColor: '#888' }}

              />

            }
          />

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
