import React from 'react';
import { StyleSheet, Text, useWindowDimensions, View } from 'react-native';
import { Map } from '../components/Map';

export const MapScreen = () => {
    const { height } = useWindowDimensions();
    return (
        <View style={{ flex: 1 }}>
            <Map
                // markers={
                //     [
                //         {
                //             // image= {require('../assets/custom-marker.png')},
                //             coordinate: {
                //                 latitude: 37.78825,
                //                 longitude: -122.4324,
                //             },
                //             title: 'Mapa1',
                //             description: 'Descripcion de Mapa 1'
                //         }

                //     ]

                //     // title={'Esto es un título'}
                // }
            />
        </View>
    )
}