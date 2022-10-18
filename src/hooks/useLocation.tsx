import React, { useEffect, useState, useRef } from 'react'
import Geolocation from '@react-native-community/geolocation';
import { Location } from '../interfaces/appInterfaces';

export const useLocation = () => {

    const [hasLoction, setHasLoction] = useState(false);

    const [routeLines, setRouteLines] = useState<Location[]>([]);
    const [initialPosition, setInitialPosition] = useState<Location>({
        latitude: 0,
        longitude: 0
    });

    const [userLocation, setUserLocation] = useState<Location>({
        latitude: 0,
        longitude: 0
    });

    const watchId = useRef<number>();
    const isMounted = useRef<boolean>(true);


    useEffect(() => {
        isMounted.current=true;
        return () => {
            isMounted.current=false;
        }
    }, [])

    useEffect(() => {

        getCurrentLocation()
            .then(location => {
                if(!isMounted) return;

                setInitialPosition(location);
                // setUserLocation(location);
                setRouteLines(routes =>[...routes, location])
                setHasLoction(true);
            })

    }, []);



    const getCurrentLocation = (): Promise<Location> => {
        return new Promise((resolve, reject) => {
            Geolocation.getCurrentPosition(
                ({ coords }) => {
                    if(!isMounted) return;

                    resolve({
                        latitude: coords.latitude,
                        longitude: coords.longitude
                    });

                },
                err => reject({ err }),
                {
                    enableHighAccuracy: true
                }
            );
        });
    }

    const fallowUserLocation = () => {
        watchId.current = Geolocation.watchPosition(
            ({ coords }) => {
                if(!isMounted) return;


                const location: Location = {
                    latitude: coords.latitude,
                    longitude: coords.longitude
                }
                console.log('Test 1 routes');

                setUserLocation(location);
                setRouteLines(routes =>[...routes, location])


            },
            err => console.log(err),
            {
                enableHighAccuracy: true,
                distanceFilter: 10
            }
        )
    }


    const stopFollowUserLocation = () => {
        if (watchId.current)
            Geolocation.clearWatch(watchId.current);
    }



    return {
        hasLoction,
        initialPosition,
        getCurrentLocation,
        fallowUserLocation,
        userLocation,
        stopFollowUserLocation,
        routeLines
    }
}
