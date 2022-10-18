import Geolocation from '@react-native-community/geolocation';
import React, { useEffect, useRef, useState } from 'react';
import { StyleSheet, Text, useWindowDimensions, View } from 'react-native';
import MapView, { MapMarkerProps, MapMarker, Polyline, PROVIDER_GOOGLE } from 'react-native-maps'; // re
import { useLocation } from '../hooks/useLocation';
import { LoadingScreen } from '../screens/LoadingScreen';
import { Fab } from './Fab';


interface Props {
    markers?: MapMarkerProps[];
}

export const Map = ({ markers }: Props) => {

    const {
        hasLoction,
        initialPosition,
        getCurrentLocation,
        fallowUserLocation,
        userLocation,
        stopFollowUserLocation,
        routeLines
    } = useLocation();
    const mapViewRef = useRef<MapView>();
    const following = useRef<boolean>(true);
    const [showPolyline, setShowPolyline] = useState(false);


    useEffect(() => {
        fallowUserLocation();
        return () => {
            console.log('STOPPP');
            stopFollowUserLocation();
            //TODO: Cancelar el seguimiento
        }
    }, [])

    useEffect(() => {
        // mapViewRef.current?.animateCamera({
        //     center: userLocation
        // })
        if (!following.current) return;
        centerPosition();
        return () => {

            //TODO: Cancelar el seguimiento
        }
    }, [userLocation])

    const centerPosition = async () => {
        const location = await getCurrentLocation();
        following.current = true;
        mapViewRef.current?.animateCamera({
            center: location
        })
    }

    if (!hasLoction)
        return <LoadingScreen />

    return (
        <>
            <MapView
                ref={(element) => mapViewRef.current = element!}
                provider={PROVIDER_GOOGLE} // remove if not using Google Maps
                style={{ flex: 1 }}
                showsUserLocation
                region={{
                    latitude: initialPosition.latitude,
                    longitude: initialPosition.longitude,
                    latitudeDelta: 0.015,
                    longitudeDelta: 0.0121,
                }}
                onTouchStart={() => following.current = false}
            >


                {showPolyline &&
                    (
                        <Polyline
                            coordinates={routeLines}
                            strokeColor='black'
                            strokeWidth={3}
                        />
                    )
                }

                {/* <MapMarker
                    image={require('../assets/custom-marker.png')}
                    coordinate={{
                        latitude: 37.78825,
                        longitude: -122.4324
                    }}
                    title='Esto es un título'
                    description='Esto es una descripción del marcador'
                    // coordinate={markers![0].coordinate}
                    // title={markers![0].title}
                    // description={markers![0].description}
                /> */}
            </MapView>

            <Fab
                iconName='compass-outline'
                onPress={centerPosition}
                style={{
                    position: 'absolute',
                    bottom: 20,
                    right: 20
                }}
            />
            <Fab
                iconName='brush-outline'
                onPress={()=>setShowPolyline(actualValue=>!actualValue)}
                style={{
                    position: 'absolute',
                    bottom: 80,
                    right: 20
                }}
            />
        </>
    )
}
