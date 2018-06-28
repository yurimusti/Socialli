import React from 'react';
import { Text, View, Dimensions, Image, ImageBackground, ScrollView, FlatList } from 'react-native';
import { createBottomTabNavigator } from 'react-navigation';
import { Icon, SearchBar, ListItem } from 'react-native-elements';

import { YellowBox } from 'react-native';
YellowBox.ignoreWarnings(['Warning: isMounted(...) is deprecated', 'Module RCTImageLoader']);

import HorizontalScrollStories from '../components/HorizontalHistories';


import Pesquisar from '../screen/Navegar/Pesquisar';
import Perfil from '../screen/Navegar/Perfil';
import Melhores from '../screen/Navegar/Melhores';

import Carousel from 'react-native-snap-carousel';
import { sliderWidth, itemWidth } from '../styles/SliderEntry.style';



class NavigateScreen extends React.Component {


  //CARALHO, habilitar e desabilitar sua biografia

  componentWillUnmount() {

  }

  _renderItem({ item, index }) {
    return (



      <View style={{ backgroundColor: '#fff', height: height/2, width: width, marginTop: 0, }}>

        <Image style={{ backgroundColor: "#00000088", height: null, flex: 1 }} source={{ uri: item.url }}
        />
        <View style={{ backgroundColor: "#000000dd", position: 'absolute', bottom: 0, width: width, padding: 20, alignContent: 'center' }}>

          <View style={{ flexDirection: 'row', flex: 1, alignItems: 'center' }}>

            <View style={{ flex: 5, }}>

              <Text style={{ color: '#fff', fontFamily: 'PoiretOneRegular', fontSize: 20 }}>{item.title}</Text>
            </View>
            <View style={{ flex: 1, }}>
              <Icon
                size={18}
                name='users'
                type='font-awesome'
                color='#f3f3f3'
                onPress={() => console.log('hello')} />

            </View>

            <View style={{ flex: 2, marginRight: 20 }}>

              <Text style={{ fontFamily: 'Arial', fontWeight: 'bold', color: '#fff' }}> 255</Text>
            </View>




          </View>



        </View>


      </View>

    );
  }

  render() {
    return (

      <ImageBackground style={{ backgroundColor: '#1c1c1c', flex: 1 }} source={require('../resources/login.jpg')} defaultSource>
        <View style={{ flex: 2 }}>
          <View style={{ backgroundColor: '#00000088' }}>
            <HorizontalScrollStories />
          </View>
          <View style={{ width: width, height: 0.4, backgroundColor: '#D0021B' }}></View>
          <View style={{ marginTop: 0, marginLeft: 0, backgroundColor: '#00000088', alignItems: 'center', padding: 25 }}>
            <Text style={{ fontSize: 24, color: '#fff', fontFamily: 'PoiretOneRegular' }}>AS MAIS POPULARES</Text>
          </View>
        </View>

        <View style={{flex: 4 }}>
          <Carousel layout={'default'}
            data={[
              {
                title: 'Festa do Yuri',
                url: 'https://i.pinimg.com/564x/9d/df/c3/9ddfc33c662d89671c8d95dbeaaee1cd.jpg'
              },
              {
                title: 'Festa do João',
                url: 'https://i.pinimg.com/564x/e7/f2/a3/e7f2a387cb7b61c85e0f9a7f84907cc2.jpg'
              },
              {
                title: 'Encontro da Ilha',
                url: 'https://i.pinimg.com/564x/58/55/7d/58557db80a8dcebbbf13d9927a2e6426.jpg'
              },
              {
                title: 'Teste Festa',
                url: 'https://i.pinimg.com/564x/3d/fd/22/3dfd22ea250997315cd9ef66288bfa62.jpg'
              }
            ]}
            hasParallaxImages={true}
            renderItem={this._renderItem}
            sliderWidth={sliderWidth}
            itemWidth={itemWidth}
          />
        </View>






      </ImageBackground>
    );
  }
}

class PesquisarScreen extends React.Component {
  static navigationOptions = {
    header: null,
  }
  render() {
    return (
      <Pesquisar />
    );
  }
}

class MelhoresScreen extends React.Component {
  static navigationOptions = {
    header: null,
  }
  render() {
    return (
      <Melhores />
    );
  }
}





class ProfileScreen extends React.Component {

  static navigationOptions = {
    header: 'Text',


  }



  render() {
    return (
      <Perfil />
    );
  }
}




const width = Dimensions.get('screen').width;
const height = Dimensions.get('screen').height;

export default createBottomTabNavigator(
  {

    Teste1: {
      screen: NavigateScreen,
      navigationOptions: {
        swipeEnabled: false,
        lazy: true,
        tabBarLabel: ' ',
        tabBarIcon: ({ tintColor }) => (<Icon name='globe' type='font-awesome' size={25} color={tintColor} />)

      },
    },
    Teste2: {
      screen: PesquisarScreen,
      navigationOptions: {
        swipeEnabled: false,
        lazy: true,
        tabBarLabel: ' ',
        tabBarIcon: ({ tintColor }) => (<Icon name='search' type='font-awesome' size={25} color={tintColor} />)

      },
    },

    Teste4: {
      screen: MelhoresScreen,
      navigationOptions: {
        swipeEnabled: false,
        lazy: true,
        tabBarLabel: ' ',
        tabBarIcon: ({ tintColor }) => (<Icon name='star' type='font-awesome' size={25} color={tintColor} />)

      },
    },
    Teste5: {
      screen: ProfileScreen,
      navigationOptions: {
        swipeEnabled: false,
        lazy: true,
        tabBarLabel: ' ',
        tabBarIcon: ({ tintColor }) => (<Icon name='list-ul' type='font-awesome' size={25} color={tintColor} />)

      },
    },
    Teste6: {
      screen: ProfileScreen,
      navigationOptions: {
        swipeEnabled: false,
        lazy: true,
        tabBarLabel: ' ',
        tabBarIcon: ({ tintColor }) => (<Icon name='user' type='font-awesome' size={25} color={tintColor} />)

      },
    }
  },
  {


    tabBarOptions: {
      swipeEnabled: false,
      showLabel: false,
      activeTintColor: '#D0021B',
      inactiveTintColor: '#3a393e',
      style: { backgroundColor: '#1c1c1c', marginTop: 0, },
      showIcon: true,
      indicatorStyle: { backgroundColor: '#D0021B' },
      pressColor: '#ccc',

    },
  }








);