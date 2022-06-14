import React, { useRef } from 'react'
import { Animated, PanResponder, StyleSheet, View } from 'react-native';

export const Animation102Screen = () => {

    const pan = useRef(new Animated.ValueXY()).current;


    const makeMovemnt = PanResponder.create({
        onStartShouldSetPanResponder: () => true,
        onPanResponderMove: Animated.event(
            [
                null,
                {
                    dx: pan.x, // x,y are Animated.Value
                    dy: pan.y,
                },
            ], {
            useNativeDriver: false
        }),
        onPanResponderRelease: () => {
            Animated.spring(
                pan, // Auto-multiplexed
                {
                    toValue: { x: 0, y: 0 },
                    useNativeDriver: false

                } // Back to zero
            ).start();
        },
    });


    return (
        <View style={styles.container}>
            <Animated.View
                {...makeMovemnt.panHandlers}
                style={[pan.getLayout(), styles.colorBox]}
            />
        </View>
    )
}


const styles = StyleSheet.create({
    colorBox: {
        backgroundColor: '#61dafb',
        width: 150,
        height: 150

    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }

});