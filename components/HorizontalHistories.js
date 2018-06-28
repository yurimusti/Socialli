import React, { Component } from 'react';
import {
    ScrollView,
    FlatList,
    Image
} from 'react-native';


export default class HorizontalScrollStories extends Component {
    render() {
        return (
            <ScrollView showsHorizontalScrollIndicator={false} horizontal style={{ height: 70, marginTop: 10 }}>

                <FlatList
                    horizontal


                    data={[{ key: 'a' }, { key: 'b' }, { key: 'b' }, { key: 'b' }, { key: 'b' }, { key: 'b' }, { key: 'b' }, { key: 'b' }, { key: 'b' }, { key: 'b' }]}
                    renderItem={({ item }) => <Image style={{ height: 60, width: 60, borderRadius: 200, marginLeft: 12 }} source={require('../teste/yuri.jpeg')}
                    />}
                />


            </ScrollView>
        )
    }
};
