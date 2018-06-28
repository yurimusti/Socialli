import React from "react";
import {
    View, Image, Text
} from 'react-native';
import {
    Icon
} from 'react-native-elements';

export default class Carousel extends React.Component{
    render(){
        return(
            
            <View style={{ backgroundColor: '#fff', height: 350, width: width, marginTop: 20, }}>

            <Image style={{ backgroundColor: "#00000055", height: height, flex: 1 }} source={{ uri: item.url }}
            />
            <View style={{ backgroundColor: "#00000099", position: 'absolute', bottom: 0, width: width, padding: 20, alignContent:'center' }}>
              <View style={{ flexDirection: 'row', }}>
    
    
                <Text style={{ color: '#fff', fontFamily: 'PoiretOneRegular', fontWeight: 'bold', fontSize: 18 }}>
    
                  {item.title}
    
                </Text>
    
    
    
                <View style={{ marginLeft: 20, }}>
                  <Icon
                    size={18}
                    name='users'
                    type='font-awesome'
                    color='#f3f3f3'
                    onPress={() => console.log('hello')} />
                </View>
    
    
              </View>
    
    
    
            </View>
    
    
          </View>
        );
    }



}


