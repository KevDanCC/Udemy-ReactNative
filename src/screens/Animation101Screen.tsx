import React, { useRef } from 'react'
import { Animated, Button, Easing, StyleSheet, View } from 'react-native';
import { useAnimation } from '../hooks/useAnimation';
// import { styles } from '../theme/appTheme';

export const Animation101Screen = () => {

    const { fadeIn, fadeOut, opacity,  startMovingPosition, position } = useAnimation();


    return (
        <View style={styles.container}>
            <Animated.View style={{
                ...styles.purpleBox,
                marginBottom: 20,
                opacity: opacity,
                transform: [{
                    translateY: position
                }]
            }}>

            </Animated.View>
            <View style={{ flexDirection: 'row', width: '40%', justifyContent: 'space-between' }}>
                <Button title="FadeIn" onPress={()=>{
                    fadeIn();
                    startMovingPosition().start();
                }} />
                <Button title="FadeOut" onPress={fadeOut} />
            </View>

        </View>
    )
}


const styles = StyleSheet.create({
    purpleBox: {
        backgroundColor: '#5856D6',
        width: 150,
        height: 150
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});