import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    Dimensions,
    Text,
    Image,
    TouchableNativeFeedback,
    ImageBackground,
    FlatList



} from 'react-native';

import Carousel from 'react-native-snap-carousel';

import { Icon, Badge } from 'react-native-elements';
import { sliderWidth, itemWidth } from '../../styles/SliderEntry.style';





export default class Perfil extends Component {



    render() {
        return (

            <View key='root' style={{flex:1}}>
                <View style={{flex:2, backgroundColor:'#000'}}>

                </View>
                <View style={{flex:4}}>

                </View>
                <View style={{flex:4}}>

                </View>




            </View>


        );
    }



}


const width = Dimensions.get('screen').width;
const height = Dimensions.get('screen').height;

const style = StyleSheet.create({


});
